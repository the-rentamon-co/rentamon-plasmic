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
  onChange: (value: number | number[]) => void;
  onMonthChange: (month: number) => void;
  onYearChange: (year: number) => void;
  locale?: LocaleType;
  holidays?: number[];
  value?: number;
  mode?: "single" | "multiple";
  values?: number[];
  customDayCell?: boolean;
  dayCell?: React.ComponentType<DayCellProps>;
}

// تعریف انواع Month و Year
interface MonthType {
  number: number;
  index: number;
  name: string;
  shortName: string;
}

interface YearType {
  number: number;
}

// تابع کمکی برای محاسبه زمان شروع روز (بدون moment)
function startOfDayUnix(timestampInSeconds: number): number {
  return Math.floor(timestampInSeconds / 86400) * 86400;
}

export const DatePicker: React.FC<DatePickerProps> = ({
  onChange,
  onMonthChange,
  onYearChange,
  locale = "fa",
  holidays = [],
  value,
  mode = "single",
  values = [],
  dayCell,
  customDayCell,
}) => {
  const isFaLocale = locale === "fa";

  // محاسبه weekend ها بر اساس locale
  const weekendDays = isFaLocale ? [5, 6] : [0, 6];

  // ساخت Set برای holidays با استفاده از useMemo
  const holidaysSet = useMemo(() => {
    return new Set(
      holidays.map((h: number) => {
        return startOfDayUnix(h);
      })
    );
  }, [holidays]);

  // ساخت Set برای روزهای انتخاب‌شده
  const selectedDaysSet = useMemo(() => {
    if (mode === "multiple" && Array.isArray(values)) {
      return new Set(values.map((d: number) => startOfDayUnix(d)));
    } else if (mode === "single" && typeof value === "number") {
      return new Set([startOfDayUnix(value)]);
    } else {
      return new Set<number>();
    }
  }, [values, value, mode]);

  return (
    <Calendar
      monthYearSeparator="|"
      multiple={mode === "multiple"}
      value={
        mode === "multiple"
          ? (Array.isArray(values) ? values : [values]).map(
              (item: number) => item * 1000
            )
          : typeof value === "number"
          ? value * 1000
          : undefined
      }
      onChange={(val: DateObject | DateObject[]) => {
        if (Array.isArray(val)) {
          onChange(val.map((item: DateObject) => item.unix));
        } else {
          onChange(val.unix);
        }
      }}
      onMonthChange={(val: DateObject) => {
        const m = val.month as unknown as MonthType;
        onMonthChange(m.number);
      }}
      onYearChange={(val: DateObject) => {
        const y = val.year as unknown as YearType;
        onYearChange(y.number);
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
        selectedDate: currentSelectedDate,
      }: {
        date: DateObject;
        today: DateObject;
        isSameDate: (d1: DateObject, d2: DateObject) => boolean;
        selectedDate: DateObject | DateObject[];
      }) => {
        const dayUnix = startOfDayUnix(date.unix);

        const isHoliday = holidaysSet.has(dayUnix);
        const isSelected = selectedDaysSet.has(dayUnix);
        const isWeekend = weekendDays.includes(date.weekDay.index);
        const isToday = isSameDate(date, today);

        if (customDayCell && dayCell) {
          return {
            style: {},
            class: "fragment-day-reset-cell",
            children: React.createElement(dayCell, {
              unix: date.unix,
              date: { day: date.day, month: date.month, year: date.year },
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
    value: { type: "number", hidden: (ps) => ps.mode === "multiple" },
    values: {
      type: "array",
      hidden: (ps) => ps.mode === "single",
      defaultValue: [],
    },
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
      helpText: "Array of day timestamps, e.g., [1710534600, 1710707400].",
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
    value: {
      type: "writable",
      variableType: "number",
      valueProp: "value",
      onChangeProp: "onChange",
      hidden: (ps) => ps.mode === "multiple",
    },
    values: {
      type: "writable",
      variableType: "array",
      valueProp: "values",
      onChangeProp: "onChange",
      hidden: (ps) => ps.mode === "single",
    },
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
