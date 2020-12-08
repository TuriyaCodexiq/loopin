import { Dayjs, default as dayjs } from 'dayjs'
import { expect } from 'chai'
import 'mocha'
import { findNextWorkingWeek } from '../functions'
import { getNextWorkingDay, formatDayArr, getThisSunday, isStandardHoliday, isExtraHoliday } from '../utils'

describe('getThisSunday', () => {
  it('should return the same day if it is a Sunday', () => {
    const sunday = dayjs('2020-12-13T00:00:00.000Z')
    const result = getThisSunday(sunday)
    expect(result).to.eql(sunday)
  })
  it('should return the next Sunday', () => {
    const monday = dayjs('2020-12-14T00:00:00.000Z')
    const sunday = dayjs('2020-12-20T00:00:00.000Z')
    const result = getThisSunday(monday)
    expect(result).to.eql(sunday)
  })
})

describe('findNextWorkingWeek', () => {
  it('should not exceed 5 dates', () => {
    const result = findNextWorkingWeek()
    expect(result).length.to.be.lessThan(6)
  })
  it('should return all non-holiday dates in the next working week', () => {
    const testDate = dayjs('2020-12-25T00:00:00.000Z').toDate()
    const expectedDatesStringified = '["2020-12-29T08:30:00.000Z"\,"2020-12-30T08:30:00.000Z"\,"2020-12-31T08:30:00.000Z"]'
    const result = findNextWorkingWeek(testDate)
    expect(JSON.stringify(result)).to.equal(expectedDatesStringified)
    const testDate2 = dayjs('2020-12-20T00:00:00.000Z').toDate()
    const expectedDatesStringified2 = '["2020-12-21T08:30:00.000Z"\,"2020-12-22T08:30:00.000Z"\,"2020-12-23T08:30:00.000Z"\,"2020-12-24T08:30:00.000Z"]'
    const result2 = findNextWorkingWeek(testDate2)
    expect(JSON.stringify(result2)).to.equal(expectedDatesStringified2)
  })
})