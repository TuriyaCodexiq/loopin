import { default as dayjs } from 'dayjs'
import { findNextWorkingWeek } from './functions/findNextWorkingWeek'

let testDate1 = dayjs('2020-12-21T00:00:00.000Z').toDate()
let testDate2 = dayjs('2020-12-30T00:00:00.000Z').toDate()

console.log(findNextWorkingWeek(testDate1)) // 22nd, 23rd, 24th, 29th and 30th Dec
console.log(findNextWorkingWeek(testDate2)) // 31st Dec, 4th, 5th, 6th, 7th Jan
console.log(findNextWorkingWeek(testDate2, [dayjs('2021-01-07T00:00:00.000Z').toDate()])) // 31st Dec, 4th, 5th, 6th, 8th Jan