export function Age(birthDate) {
  this.birthDate = birthDate;
  this.earthAge = this.getEarthAge();
  this.mercuryAge = this.getMercuryAge();
  this.venusAge = this.getVenusAge();
  this.marsAge = this.getMarsAge();
  this.jupiterAge = this.getJupiterAge();
  this.lifeExpectancy = this.getLifeExpectancy();
}

Age.prototype.getEarthAge = function () {
  let earthAge;

  return earthAge
};

Age.prototype.getMercuryAge = function () {
  let mercuryAge;

  return mercuryAge;
};

Age.prototype.getVenusAge = function () {
  let venusAge;

  return venusAge;
};

Age.prototype.getMarsAge = function () {
  let marsAge;

  return marsAge;
};

Age.prototype.getJupiterAge = function () {
  let jupiterAge;

  return jupiterAge;
};

Age.prototype.getLifeExpectancy = function () {
  let lifeExpectancy;

  return lifeExpectancy;
};
