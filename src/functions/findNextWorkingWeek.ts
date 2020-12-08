import { Dayjs, default as dayjs } from 'dayjs'
import { getNextWorkingDay, formatDayArr, getThisSunday, trimToNextWeek } from '../utils'

export const findNextWorkingWeek = (inputDate: Date = null, extraHolidays: Date[] = []): Date[] => {
  let day: Dayjs = inputDate ? dayjs(inputDate) : dayjs()
  let sunday: Dayjs = getThisSunday(day)
  let nextFiveWorkingDays: Dayjs[] = []
  while (nextFiveWorkingDays.length < 5) {
    let lastDateAdded = nextFiveWorkingDays[nextFiveWorkingDays.length-1] || sunday
    let nextDay = getNextWorkingDay(lastDateAdded, extraHolidays)
    nextFiveWorkingDays.push(nextDay)
  }
  return formatDayArr(trimToNextWeek(day, nextFiveWorkingDays))
}

