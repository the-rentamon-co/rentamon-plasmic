import { Calendar, DateObject } from "react-multi-date-picker";
import persian from "react-date-object/calendars/persian";
import persian_fa from "react-date-object/locales/persian_fa";
import { CodeComponentMeta } from "@plasmicapp/host";
import { cn } from "@/lib/utils";
import React, { useMemo } from "react";

type LocaleType = "fa" | "en";

interface DayCellProps {
  unix: number;
  date: { day: number; month: number; year: number };
  isToday: boolean;
  isWeekend: boolean;
  isHoliday: boolean;
  isSelected: boolean;
}

interface DatePickerProps {
  onChange?: (value: number | number[]) => void;
  onMonthChange?: (month: number) => void;
  onYearChange?: (year: number) => void;
  locale?: LocaleType;
  holidays?: number[];
  // حذف value و values برای جلوگیری از کنترل خارجی
  mode?: "single" | "multiple";
  customDayCell?: boolean;
  dayCell?: React.ComponentType<DayCellProps>;
}

interface MonthType {
  number: number;
  index: number;
  name: string;
  shortName: string;
}

interface YearType {
  number: number;
}

// تابع کمکی برای محاسبه زمان شروع روز
function startOfDayUnix(timestampInSeconds: number): number {
  return Math.floor(timestampInSeconds / 86400) * 86400;
}

// تابع کمکی برای استخراج year/month/day به صورت عددی از DateObject
function extractNumbersFromDateObject(date: DateObject): { day: number; month: number; year: number } {
  const m = date.month as unknown as MonthType;
  const y = date.year as unknown as YearType;
  return { day: date.day, month: m.number, year: y.number };
}

export const DatePicker: React.FC<DatePickerProps> = ({
  onChange,
  onMonthChange,
  onYearChange,
  locale = "fa",
  holidays = [],
  mode = "single",
  customDayCell,
  dayCell,
}) => {
  const isFaLocale = locale === "fa";

  const weekendDays = isFaLocale ? [5, 6] : [0, 6];

  const holidaysSet = useMemo(() => {
    return new Set(
      holidays.map((h: number) => {
        return startOfDayUnix(h);
      })
    );
  }, [holidays]);

  return (
    <Calendar
      monthYearSeparator="|"
      multiple={mode === "multiple"}
      // بدون value یا values کنترل شده
      onChange={(val: DateObject | DateObject[]) => {
        // انتخاب روز دیگر state والد را تغییر نمی‌دهد
        // فقط console.log برای نمایش انتخاب
        if (Array.isArray(val)) {
          const selected = val.map((item) => item.unix);
          console.log("Selected multiple days:", selected);
          onChange && onChange(selected);
        } else {
          console.log("Selected single day:", val.unix);
          onChange && onChange(val.unix);
        }
        // چون props تغییر نمی‌کند، mapDays مجدداً اجرا نمی‌شود
      }}
      onMonthChange={(val: DateObject) => {
        const m = val.month as unknown as MonthType;
        console.log("Month changed:", m.number);
        onMonthChange && onMonthChange(m.number);
      }}
      onYearChange={(val: DateObject) => {
        const y = val.year as unknown as YearType;
        console.log("Year changed:", y.number);
        onYearChange && onYearChange(y.number);
      }}
      className={cn("fragment", { "custom-day-cell": customDayCell })}
      {...(isFaLocale && {
        calendar: persian,
        locale: {
          ...persian_fa,
          weekDays: persian_fa.weekDays.map((item: string[]) => {
            const dayShort = item[1] ? item[1].slice(0, 1) : "";
            return [item[0], dayShort];
          }),
        },
      })}
      shadow={false}
      mapDays={({
        date,
        today,
        isSameDate,
      }: {
        date: DateObject;
        today: DateObject;
        isSameDate: (d1: DateObject, d2: DateObject) => boolean;
      }) => {
        const dayUnix = startOfDayUnix(date.unix);
        const isHoliday = holidaysSet.has(dayUnix);

        // در این نسخه دیگر انتخاب روز باعث تغییر props و رندر مجدد نمی‌شود
        // بنابراین isSelected را می‌توان حذف یا ثابت فرض کرد
        // اما اگر بخواهید isSelected داشته باشید بدون تغییر props، باید logic داخلی داشته باشید
        const isSelected = false; // بدون تغییری در props، Selected هم ثابت می‌ماند مگر با راهکار داخلی
        const isWeekend = weekendDays.includes(date.weekDay.index);
        const isToday = isSameDate(date, today);

        const { day, month, year } = extractNumbersFromDateObject(date);

        if (customDayCell && dayCell) {
          return {
            style: {},
            class: "fragment-day-reset-cell",
            children: React.createElement(dayCell, {
              unix: date.unix,
              date: { day, month, year },
              isToday,
              isWeekend,
              isHoliday,
              isSelected,
            }),
          };
        }

        let className = "fragment-day-cell";

        if (isWeekend) className = "fragment-day-holiday-cell";
        if (isToday) className = "fragment-day-today-cell";
        if (isHoliday) className = "fragment-day-holiday-cell";
        if (isSelected) className = "fragment-day-active-cell";

        return { class: className };
      }}
    />
  );
};

export const datePickerMeta: CodeComponentMeta<DatePickerProps> = {
  name: "DatePicker",
  displayName: "Fragment/DatePicker",
  importPath: "@/fragment/components/date-picker",
  props: {
    // value و values حذف شدند و تقویم دیگر کنترل خارجی ندارد
    onChange: {
      type: "eventHandler",
      argTypes: [
        {
          name: "date",
          type: "object",
        },
      ],
    },
    onMonthChange: {
      type: "eventHandler",
      argTypes: [
        {
          name: "month",
          type: "object",
        },
      ],
    },
    onYearChange: {
      type: "eventHandler",
      argTypes: [
        {
          name: "year",
          type: "object",
        },
      ],
    },
    locale: {
      defaultValue: "fa",
      type: "choice",
      options: ["fa", "en"],
    },
    mode: {
      type: "choice",
      options: [
        {
          label: "Single",
          value: "single",
        },
        {
          label: "Multiple",
          value: "multiple",
        },
      ],
    },
    holidays: {
      defaultValue: [],
      type: "array",
      helpText: "Array of day timestamps, e.g., [1710534600, 1710707402].",
    },
    customDayCell: "boolean",
    dayCell: {
      displayName: "Custom Day Cell",
      type: "slot",
      renderPropParams: ["dateProps"],
      hidden: (ps) => !ps.customDayCell,
    },
  },
  states: {
    // value و values state حذف شدند
    month: {
      type: "readonly",
      variableType: "object",
      onChangeProp: "onMonthChange",
    },
    year: {
      type: "readonly",
      variableType: "object",
      onChangeProp: "onYearChange",
    },
  },
};
