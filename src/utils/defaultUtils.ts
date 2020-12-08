import { Dayjs, default as dayjs } from 'dayjs'
import 'dayjs/locale/en'
import  Holidays = require('date-holidays')
let hd = new Holidays()

export const getNextWorkingDay = (day: Dayjs, extraHolidays: Date[] = []): Dayjs => {
  let candidate = day.add(1, 'day')
  if (!candidate) return
  if (!isStandardHoliday(candidate)
    && !isExtraHoliday(candidate, extraHolidays)
    && !isWeekend(candidate)) return dayjs(candidate)
  return getNextWorkingDay(dayjs(candidate), extraHolidays)
}

export const formatDayArr = (dayArr: Dayjs[]): Date[] =>
  dayArr.map(day => {
    return day.set('hour', 8).set('minute', 30).set('second', 0).locale('en').toDate()
  })

const isWeekend = (day: Dayjs): boolean => (day.day() === 0 || day.day() === 6)

const isStandardHoliday = (day: Dayjs): boolean => {
  hd.init('GB', 'EN')
  return !hd.isHoliday(day.toDate()) == false
}

const isExtraHoliday = (day: Dayjs, extraHolidays: Date[] = []): boolean => {
  if (!extraHolidays || !extraHolidays.length) return false
  return extraHolidays.map(date => dayjs(date))
                      .filter((excluded) => excluded.isSame(day, 'day'))
                      .length > 0 ? true : false
}