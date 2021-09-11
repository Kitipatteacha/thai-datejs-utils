import dayjs from 'dayjs';
import defaultDayjs from 'dayjs';
import buddhistEra from 'dayjs/plugin/buddhistEra';
import advancedFormat from 'dayjs/plugin/advancedFormat';
import customParseFormat from 'dayjs/plugin/customParseFormat';

defaultDayjs.extend(buddhistEra);
defaultDayjs.extend(advancedFormat);
defaultDayjs.extend(customParseFormat);

type Dayjs = defaultDayjs.Dayjs;

type Constructor<TDate extends Dayjs> = (
    ...args: Parameters<typeof defaultDayjs>
) => TDate;

interface Opts {
    locale?: string;
    instance?: typeof defaultDayjs;
    dayjs?: typeof defaultDayjs;
}

const withLocale = <TDate extends Dayjs>(
    dayjs: any,
    locale?: string
): Constructor<TDate> =>
    !locale ? dayjs : (...args) => dayjs(...args).locale(locale);

function DayjsUtils({ locale, instance, dayjs }: Opts = {}) {
    this.locale = locale;
    this.yearFormat = 'BBBB';
    this.dateFormat = 'MMMM Do';
    this.time24hFormat = 'HH:mm';
    this.time12hFormat = 'hh:mm A';
    this.yearMonthFormat = 'MMMM BBBB';
    this.dateTime24hFormat = 'MMMM Do HH:mm';
    this.dateTime12hFormat = 'MMMM Do hh:mm a';
    this.dayjs = withLocale(instance || dayjs || defaultDayjs, locale);
}

const thaiDayjsUtils = () => {
    DayjsUtils.prototype.parse = function (value: string, format: string) {
        if (value === '') {
            return null;
        }

        return this.dayjs(value, format);
    };

    DayjsUtils.prototype.date = function (value: string) {
        if (value === null) {
            return null;
        }
        return this.dayjs(value);
    };

    DayjsUtils.prototype.isValid = function (value: string) {
        return this.dayjs(value).isValid();
    };

    DayjsUtils.prototype.isNull = function (date: Dayjs) {
        return date === null;
    };

    DayjsUtils.prototype.getDiff = function (
        date: Dayjs,
        comparing: Dayjs,
        units?: any,
        float?: any
    ) {
        return date.diff(comparing, units, float);
    };

    DayjsUtils.prototype.isAfter = function (date: Dayjs, value: Dayjs) {
        return date.isAfter(value);
    };

    DayjsUtils.prototype.isBefore = function (date: Dayjs, value: Dayjs) {
        return date.isBefore(value);
    };

    DayjsUtils.prototype.isAfterDay = function (date: Dayjs, value: Dayjs) {
        return date.isAfter(value, 'day');
    };

    DayjsUtils.prototype.isBeforeDay = function (date: Dayjs, value: Dayjs) {
        return date.isBefore(value, 'day');
    };

    DayjsUtils.prototype.isBeforeYear = function (date: Dayjs, value: Dayjs) {
        return date.isBefore(value, 'year');
    };

    DayjsUtils.prototype.isAfterYear = function (date: Dayjs, value: Dayjs) {
        return date.isAfter(value, 'year');
    };

    DayjsUtils.prototype.startOfDay = function (date: Dayjs) {
        return date.clone().startOf('day');
    };

    DayjsUtils.prototype.endOfDay = function (date: Dayjs) {
        return date.clone().endOf('day');
    };

    DayjsUtils.prototype.format = function (date: Dayjs, formatString: string) {
        return this.dayjs(date).format(formatString);
    };

    DayjsUtils.prototype.formatNumber = function (numberToFormat: string) {
        return numberToFormat;
    };

    DayjsUtils.prototype.getHours = function (date: Dayjs) {
        return date.hour();
    };

    DayjsUtils.prototype.addDays = function (date: Dayjs, count: number) {
        return count < 0
            ? date.clone().subtract(Math.abs(count), 'day')
            : date.clone().add(count, 'day');
    };

    DayjsUtils.prototype.setMonth = function (date: Dayjs, count: number) {
        return date.clone().set('month', count);
    };

    DayjsUtils.prototype.setHours = function (date: Dayjs, count: number) {
        return date.clone().set('hour', count);
    };

    DayjsUtils.prototype.getMinutes = function (date: Dayjs) {
        return date.minute();
    };

    DayjsUtils.prototype.setMinutes = function (date: Dayjs, count: number) {
        return date.clone().set('minute', count);
    };

    DayjsUtils.prototype.getSeconds = function (date: Dayjs) {
        return date.second();
    };

    DayjsUtils.prototype.setSeconds = function (date: Dayjs, count: number) {
        return date.clone().set('second', count);
    };

    DayjsUtils.prototype.getMonth = function (date: Dayjs) {
        return date.month();
    };

    DayjsUtils.prototype.isSameDay = function (date: Dayjs, comparing: Dayjs) {
        return date.isSame(comparing, 'day');
    };

    DayjsUtils.prototype.isSameMonth = function (
        date: Dayjs,
        comparing: Dayjs
    ) {
        return date.isSame(comparing, 'month');
    };

    DayjsUtils.prototype.isSameYear = function (date: Dayjs, comparing: Dayjs) {
        return date.isSame(comparing, 'year');
    };

    DayjsUtils.prototype.isSameHour = function (date: Dayjs, comparing: Dayjs) {
        return date.isSame(comparing, 'hour');
    };

    DayjsUtils.prototype.getMeridiemText = function (ampm: any) {
        return ampm === 'am' ? 'AM' : 'PM';
    };

    DayjsUtils.prototype.startOfMonth = function (date: Dayjs) {
        return date.clone().startOf('month');
    };

    DayjsUtils.prototype.endOfMonth = function (date: Dayjs) {
        return date.clone().endOf('month');
    };

    DayjsUtils.prototype.getNextMonth = function (date: Dayjs) {
        return date.clone().add(1, 'month');
    };

    DayjsUtils.prototype.getPreviousMonth = function (date: Dayjs) {
        return date.clone().subtract(1, 'month');
    };

    DayjsUtils.prototype.getMonthArray = function (date: Dayjs): any[] {
        const firstMonth = date.clone().startOf('year');
        const monthArray = [firstMonth];
        while (monthArray.length < 12) {
            const prevMonth = monthArray[monthArray.length - 1];
            monthArray.push(this.getNextMonth(prevMonth));
        }
        return monthArray;
    };

    DayjsUtils.prototype.getMonthText = function (date: Dayjs) {
        return this.format(date, 'MMMM');
    };

    DayjsUtils.prototype.getYear = function (date: Dayjs) {
        return date.year();
    };

    DayjsUtils.prototype.setYear = function (date: Dayjs, year: number) {
        return date.clone().set('year', year);
    };

    DayjsUtils.prototype.mergeDateAndTime = function (
        date: Dayjs,
        time: Dayjs
    ) {
        return this.setMinutes(
            this.setHours(date, this.getHours(time)),
            this.getMinutes(time)
        );
    };

    DayjsUtils.prototype.getWeekdays = function () {
        const start = this.dayjs().startOf('week');
        return [0, 1, 2, 3, 4, 5, 6].map((diff) =>
            this.format(start.add(diff, 'day'), 'dd')
        );
    };

    DayjsUtils.prototype.isEqual = function (value: any, comparing: any) {
        if (value === null && comparing === null) {
            return true;
        }
        return this.dayjs(value).isSame(comparing);
    };

    DayjsUtils.prototype.getWeekArray = function (date: Dayjs) {
        const start = this.dayjs(date).clone().startOf('month').startOf('week');
        const end = this.dayjs(date).clone().endOf('month').endOf('week');

        let count = 0;
        let current = start;
        const nestedWeeks: Dayjs[][] = [];

        while (current.isBefore(end)) {
            const weekNumber = Math.floor(count / 7);
            nestedWeeks[weekNumber] = nestedWeeks[weekNumber] || [];
            nestedWeeks[weekNumber].push(current);

            current = current.clone().add(1, 'day');
            count += 1;
        }

        return nestedWeeks;
    };

    DayjsUtils.prototype.getYearRange = function (start: Dayjs, end: Dayjs) {
        const startDate = this.dayjs(start).startOf('year');
        const endDate = this.dayjs(end).endOf('year');
        const years = [];
        let current = startDate;
        while (current.isBefore(endDate)) {
            years.push(current);
            current = current.clone().add(1, 'year');
        }
        return years;
    };

    DayjsUtils.prototype.getCalendarHeaderText = function (date: Dayjs) {
        return this.format(date, 'MMMM BBBB');
    };

    DayjsUtils.prototype.getYearText = function (date: Dayjs) {
        return this.format(date, 'BBBB');
    };

    DayjsUtils.prototype.getDatePickerHeaderText = function (date: Dayjs) {
        return this.format(date, 'ddd, MMM D');
    };

    DayjsUtils.prototype.getDateTimePickerHeaderText = function (date: Dayjs) {
        return this.format(date, 'MMM D');
    };

    DayjsUtils.prototype.getDayText = function (date: Dayjs) {
        return this.format(date, 'D');
    };

    DayjsUtils.prototype.getHourText = function (date: Dayjs, ampm: boolean) {
        return this.format(date, ampm ? 'hh' : 'HH');
    };

    DayjsUtils.prototype.getMinuteText = function (date: Dayjs) {
        return this.format(date, 'mm');
    };

    DayjsUtils.prototype.getSecondText = function (date: Dayjs) {
        return this.format(date, 'ss');
    };

    return DayjsUtils;
};

export default thaiDayjsUtils();
