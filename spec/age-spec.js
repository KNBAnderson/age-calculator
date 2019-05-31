import { Age } from './../src/age-calc';

describe('Age', function() {
  let reusableAge = new Age(new Date(1990, 11, 13), 1, 1);


  it('should find age in Earth years based on inputted birth date', function() {

    expect(reusableAge.earthAge).toEqual(28);
  });

  it('should find age in Mercury years based on inputted birth date', function() {

    expect(reusableAge.mercuryAge).toEqual(118);
  });

  it('should find age in Venus years based on inputted birth date', function() {

    expect(reusableAge.venusAge).toEqual(45);
  });

  it('should find age in Mars years based on inputted birth date', function() {

    expect(reusableAge.marsAge).toEqual(15);
  });

  it('should find age in Jupiter years based on inputted birth date', function() {

    expect(reusableAge.jupiterAge).toEqual(2);
  });

  it('should determine user\'s life expectancy', function() {

    expect(reusableAge.lifeExpectancy).toEqual(105);
  });

  it('should determine user\'s years left to live based on life expectancy', function() {

    expect(reusableAge.lifeExpectancy - reusableAge.earthAge).toEqual(77);
  });

  it('should determine user\'s years lived over life expectancy if their age is higher than expectancy', function() {
    let age = new Age(new Date(1900, 0, 1), 0, -1);
    expect(age.lifeExpectancy - age.earthAge).toEqual(100);
  });
});
