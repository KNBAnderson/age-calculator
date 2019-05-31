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
  let currentDate = new Date();
  let earthAge = currentDate - this.birthDate;
  earthAge = earthAge/(1000 * 60 * 60 * 24 * 365);
  this.exactAge = earthAge;
  return Math.floor(earthAge);
};

Age.prototype.getMercuryAge = function () {
  let mercuryAge = this.exactAge / 0.24;
  return Math.floor(mercuryAge);
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
