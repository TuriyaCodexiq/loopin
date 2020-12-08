import { default as dayjs } from 'dayjs'
import { findNextWorkingWeek } from './functions/findNextWorkingWeek'

console.log(findNextWorkingWeek(dayjs().toDate()))
