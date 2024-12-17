import { Calendar, DateObject } from "react-multi-date-picker";
import persian from "react-date-object/calendars/persian";
import persian_fa from "react-date-object/locales/persian_fa";

import { CodeComponentMeta } from "@plasmicapp/host";
import moment from "jalali-moment";
import { cn } from "@/lib/utils";
import React, { useMemo } from "react";

// تابع کمکی برای محاسبه زمان شروع روز (بدون moment)
function startOfDayUnix(timestampInSeconds) {
  // تعداد ثانیه‌های یک روز: 86400
  return Math.floor(timestampInSeconds / 86400) * 86400;
}

export const DatePicker = ({
  onChange,
  onMonthChange,
  onYearChange,
  locale,
  holidays = [],
  value,
  mode,
  values = [],
  dayCell,
  customDayCell,
  selectedDate, // اگر selectedDate از بیرون پاس داده می‌شود
}: any) => {
  // اگر selectedDate را از props دریافت نمی‌کنید و باید از تقویم بگیرید، 
  // می‌توانید این قسمت را متناسب با کد خود تنظیم کنید.
  // اینجا فرض بر این است که selectedDate را از Calendar می‌گیرید یا از props می‌آید.

  const isFaLocale = locale === "fa";

  // محاسبه weekend ها بر اساس locale
  const weekendDays = isFaLocale ? [5, 6] : [0, 6];

  // با استفاده از useMemo فقط زمانی که holidays عوض شود Set ساخته می‌شود
  const holidaysSet = useMemo(() => {
    return new Set(
      holidays.map((h: number) => {
        return startOfDayUnix(h);
      })
    );
  }, [holidays]);

  // ساخت Set برای روزهای انتخاب‌شده
  const selectedDaysSet = useMemo(() => {
    if (Array.isArray(values) && mode === "multiple") {
      return new Set(values.map((d: number) => startOfDayUnix(d)));
    } else if (mode === "single" && value) {
      return new Set([startOfDayUnix(value)]);
    } else {
      return new Set();
    }
  }, [values, value, mode]);

  return (
    <>
      <Calendar
        monthYearSeparator="|"
        multiple={mode === "multiple"}
        value={
          mode === "multiple"
            ? (Array.isArray(values) ? values : [values]).map(
                (item: any) => item * 1000
              )
            : value
            ? value * 1000
            : undefined
        }
        onChange={(value: any) => {
          if (Array.isArray(value)) {
            onChange(value.map((item: any) => item.unix));
          } else {
            onChange(value.unix);
          }
        }}
        onMonthChange={(val: DateObject) => {
          onMonthChange(val.month);
        }}
        onYearChange={(val: DateObject) => {
          onYearChange(val.year);
        }}
        className={cn("fragment", { "custom-day-cell": customDayCell })}
        {...(isFaLocale && {
          calendar: persian,
          locale: {
            ...persian_fa,
            weekDays: persian_fa.weekDays.map((item) => [item[0], item[1].slice(0, 1)]),
          },
        })}
        shadow={false}
        mapDays={({ date, today, isSameDate, selectedDate }) => {
          // محاسبه‌ی ابتدای روز فقط یکبار
          const dayUnix = startOfDayUnix(date.unix);

          const isHoliday = holidaysSet.has(dayUnix);
          const isSelected = selectedDaysSet.has(dayUnix);
          const isWeekend = weekendDays.includes(date.weekDay.index);

          if (customDayCell && !!dayCell) {
            // اگر dayCell یک کامپوننت React است، توصیه می‌شود آن را خارج از این فایل
            // با React.memo اکسپورت کنید تا رندر اضافی نداشته باشد.
            return {
              style: {},
              class: "fragment-day-reset-cell",
              children: React.createElement(dayCell, {
                unix: date.unix,
                date: { day: date.day, month: date.month, year: date.year },
                isToday: isSameDate(date, today),
                isWeekend,
                isHoliday,
                isSelected,
              }),
            };
          }

          // اگر از customDayCell استفاده نمی‌کنید، کلاس ها را مستقیماً اختصاص می‌دهیم:
          let className = "fragment-day-cell";

          if (isWeekend) className = "fragment-day-holiday-cell";
          if (isSameDate(date, today)) className = "fragment-day-today-cell";
          if (isHoliday) className = "fragment-day-holiday-cell";
          if (isSelected) className = "fragment-day-active-cell";

          return { class: className };
        }}
      />
    </>
  );
};

export const datePickerMeta: CodeComponentMeta<any> = {
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
