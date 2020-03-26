import convertMilitaryToStandardTime from '../convertMilitaryToStandardTime';

describe('convertMilitaryToStandardTime', () => {
  it('returns 12:00 AM when the military time is 0000', () => {
    expect(convertMilitaryToStandardTime('0000')).toBe('12:00 AM');
  });

  it('returns 12:00 AM when the military time is 0', () => {
    expect(convertMilitaryToStandardTime('0')).toBe('12:00 AM');
  });

  it('returns 12:00 AM when the military time is 2400', () => {
    expect(convertMilitaryToStandardTime('2400')).toBe('12:00 AM');
  });

  it('returns 12:00 PM when the military time is 1200', () => {
    expect(convertMilitaryToStandardTime('1200')).toBe('12:00 PM');
  });

  it('returns 11:59 AM when the military time is 1159', () => {
    expect(convertMilitaryToStandardTime('1159')).toBe('11:59 AM');
  });

  it('returns 1:30 PM when the military time is 1330', () => {
    expect(convertMilitaryToStandardTime('1330')).toBe('1:30 PM');
  });

  it('returns 12:01 PM when the military time is 1201', () => {
    expect(convertMilitaryToStandardTime('1201')).toBe('12:01 PM');
  });
});
