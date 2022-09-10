import timecon from '../index'

describe('timecon test', () => {
  describe('milliseconds', () => {
    it('milliseconds to seconds', () => {
      expect(timecon({ from: 'milliseconds', to: 'seconds', time: 1000 })).toBe(
        1,
      )
    })
    it('milliseconds to minutes', () => {
      expect(
        timecon({ from: 'milliseconds', to: 'minutes', time: 60000 }),
      ).toBe(1)
    })
    it('milliseconds to hours', () => {
      expect(
        timecon({ from: 'milliseconds', to: 'hours', time: 3600000 }),
      ).toBe(1)
    })
    it('milliseconds to days', () => {
      expect(
        timecon({ from: 'milliseconds', to: 'days', time: 86400000 }),
      ).toBe(1)
    })
    it('milliseconds to weeks', () => {
      expect(
        timecon({ from: 'milliseconds', to: 'weeks', time: 604800000 }),
      ).toBe(1)
    })
    it('milliseconds to months', () => {
      expect(
        timecon({ from: 'milliseconds', to: 'months', time: 2628000000 }),
      ).toBe(1)
    })
    it('milliseconds to years', () => {
      expect(
        timecon({ from: 'milliseconds', to: 'years', time: 31536000000 }),
      ).toBe(1)
    })
  })

  describe('seconds', () => {
    it('seconds to milliseconds', () => {
      expect(timecon({ from: 'seconds', to: 'milliseconds', time: 1 })).toBe(
        1000,
      )
    })
    it('seconds to minutes', () => {
      expect(timecon({ from: 'seconds', to: 'minutes', time: 60 })).toBe(1)
    })
    it('seconds to hours', () => {
      expect(timecon({ from: 'seconds', to: 'hours', time: 3600 })).toBe(1)
    })
    it('seconds to days', () => {
      expect(timecon({ from: 'seconds', to: 'days', time: 86400 })).toBe(1)
    })
    it('seconds to weeks', () => {
      expect(timecon({ from: 'seconds', to: 'weeks', time: 604800 })).toBe(1)
    })
    it('seconds to months', () => {
      expect(timecon({ from: 'seconds', to: 'months', time: 2628000 })).toBe(1)
    })
    it('seconds to years', () => {
      expect(timecon({ from: 'seconds', to: 'years', time: 31536000 })).toBe(1)
    })
  })

  describe('minutes', () => {
    it('minutes to milliseconds', () => {
      expect(timecon({ from: 'minutes', to: 'milliseconds', time: 1 })).toBe(
        60000,
      )
    })
    it('minutes to seconds', () => {
      expect(timecon({ from: 'minutes', to: 'seconds', time: 1 })).toBe(60)
    })
    it('minutes to hours', () => {
      expect(timecon({ from: 'minutes', to: 'hours', time: 60 })).toBe(1)
    })
    it('minutes to days', () => {
      expect(timecon({ from: 'minutes', to: 'days', time: 1440 })).toBe(1)
    })
    it('minutes to weeks', () => {
      expect(timecon({ from: 'minutes', to: 'weeks', time: 10080 })).toBe(1)
    })
    it('minutes to months', () => {
      expect(timecon({ from: 'minutes', to: 'months', time: 43800 })).toBe(1)
    })
    it('minutes to years', () => {
      expect(timecon({ from: 'minutes', to: 'years', time: 525600 })).toBe(1)
    })
  })

  describe('hours', () => {
    it('hours to milliseconds', () => {
      expect(timecon({ from: 'hours', to: 'milliseconds', time: 1 })).toBe(
        3600000,
      )
    })
    it('hours to seconds', () => {
      expect(timecon({ from: 'hours', to: 'seconds', time: 1 })).toBe(3600)
    })
    it('hours to minutes', () => {
      expect(timecon({ from: 'hours', to: 'minutes', time: 1 })).toBe(60)
    })
    it('hours to days', () => {
      expect(timecon({ from: 'hours', to: 'days', time: 24 })).toBe(1)
    })
    it('hours to weeks', () => {
      expect(timecon({ from: 'hours', to: 'weeks', time: 168 })).toBe(1)
    })
    it('hours to months', () => {
      expect(timecon({ from: 'hours', to: 'months', time: 730 })).toBe(1)
    })
    it('hours to years', () => {
      expect(timecon({ from: 'hours', to: 'years', time: 8760 })).toBe(1)
    })
  })

  describe('days', () => {
    it('days to milliseconds', () => {
      expect(timecon({ from: 'days', to: 'milliseconds', time: 1 })).toBe(
        86400000,
      )
    })
    it('days to seconds', () => {
      expect(timecon({ from: 'days', to: 'seconds', time: 1 })).toBe(86400)
    })
    it('days to minutes', () => {
      expect(timecon({ from: 'days', to: 'minutes', time: 1 })).toBe(1440)
    })
    it('days to hours', () => {
      expect(timecon({ from: 'days', to: 'hours', time: 1 })).toBe(24)
    })
    it('days to weeks', () => {
      expect(timecon({ from: 'days', to: 'weeks', time: 7 })).toBe(1)
    })
    it('days to months', () => {
      expect(timecon({ from: 'days', to: 'months', time: 30 })).toBe(1)
    })
    it('days to years', () => {
      expect(timecon({ from: 'days', to: 'years', time: 365 })).toBe(1)
    })
  })

  describe('weeks', () => {
    it('weeks to milliseconds', () => {
      expect(timecon({ from: 'weeks', to: 'milliseconds', time: 1 })).toBe(
        604800000,
      )
    })
    it('weeks to seconds', () => {
      expect(timecon({ from: 'weeks', to: 'seconds', time: 1 })).toBe(604800)
    })
    it('weeks to minutes', () => {
      expect(timecon({ from: 'weeks', to: 'minutes', time: 1 })).toBe(10080)
    })
    it('weeks to hours', () => {
      expect(timecon({ from: 'weeks', to: 'hours', time: 1 })).toBe(168)
    })
    it('weeks to days', () => {
      expect(timecon({ from: 'weeks', to: 'days', time: 1 })).toBe(7)
    })
    it('weeks to months', () => {
      expect(timecon({ from: 'weeks', to: 'months', time: 4 })).toBe(1)
    })
    it('weeks to years', () => {
      expect(timecon({ from: 'weeks', to: 'years', time: 52 })).toBe(1)
    })
  })

  describe('months', () => {
    it('months to milliseconds', () => {
      expect(timecon({ from: 'months', to: 'milliseconds', time: 1 })).toBe(
        2628000000,
      )
    })
    it('months to seconds', () => {
      expect(timecon({ from: 'months', to: 'seconds', time: 1 })).toBe(2628000)
    })
    it('months to minutes', () => {
      expect(timecon({ from: 'months', to: 'minutes', time: 1 })).toBe(43800)
    })
    it('months to hours', () => {
      expect(timecon({ from: 'months', to: 'hours', time: 1 })).toBe(730)
    })
    it('months to days', () => {
      expect(timecon({ from: 'months', to: 'days', time: 1 })).toBe(30)
    })
    it('months to weeks', () => {
      expect(timecon({ from: 'months', to: 'weeks', time: 1 })).toBe(4)
    })
    it('months to years', () => {
      expect(timecon({ from: 'months', to: 'years', time: 12 })).toBe(1)
    })
  })

  describe('years', () => {
    it('years to milliseconds', () => {
      expect(timecon({ from: 'years', to: 'milliseconds', time: 1 })).toBe(
        31536000000,
      )
    })
    it('years to seconds', () => {
      expect(timecon({ from: 'years', to: 'seconds', time: 1 })).toBe(31536000)
    })
    it('years to minutes', () => {
      expect(timecon({ from: 'years', to: 'minutes', time: 1 })).toBe(525600)
    })
    it('years to hours', () => {
      expect(timecon({ from: 'years', to: 'hours', time: 1 })).toBe(8760)
    })
    it('years to days', () => {
      expect(timecon({ from: 'years', to: 'days', time: 1 })).toBe(365)
    })
    it('years to weeks', () => {
      expect(timecon({ from: 'years', to: 'weeks', time: 1 })).toBe(52)
    })
    it('years to months', () => {
      expect(timecon({ from: 'years', to: 'months', time: 1 })).toBe(12)
    })
  })
})
