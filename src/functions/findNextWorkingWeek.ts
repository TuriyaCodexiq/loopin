import { Dayjs, default as dayjs } from 'dayjs'
import { getNextWorkingDay, formatDayArr } from '../utils'

export const findNextWorkingWeek = (startDate: Date = null, extraHolidays: Date[] = []): Date[] => {
  if (!startDate) startDate = dayjs().toDate()
  let day = dayjs(startDate)
  let nextFiveWorkingDays: Dayjs[] = []
  while (nextFiveWorkingDays.length < 5) {
    let lastDateAdded = nextFiveWorkingDays[nextFiveWorkingDays.length-1] || day
    let nextDay = getNextWorkingDay(lastDateAdded, extraHolidays)
    nextFiveWorkingDays.push(nextDay)
  }
  return formatDayArr(nextFiveWorkingDays)
}

