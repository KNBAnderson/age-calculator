export function Age(birthDate, healthValue, intelligenceValue) {
  this.birthDate = birthDate;
  this.earthAge = this.getEarthAge();
  this.mercuryAge = this.getMercuryAge();
  this.venusAge = this.getVenusAge();
  this.marsAge = this.getMarsAge();
  this.jupiterAge = this.getJupiterAge();
  this.lifeExpectancy = this.getLifeExpectancy(healthValue, intelligenceValue);
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
  let venusAge = this.exactAge / 0.62;
  return Math.floor(venusAge);
};

Age.prototype.getMarsAge = function () {
  let marsAge = this.exactAge / 1.88;
  return Math.floor(marsAge);
};

Age.prototype.getJupiterAge = function () {
  let jupiterAge = this.exactAge / 11.86;
  return Math.floor(jupiterAge);
};

Age.prototype.getLifeExpectancy = function (input1, input2) {
  let lifeExpectancy;
  if (input1 + input2 > 0) {
    lifeExpectancy = 105;
  } else if (input1 + input2 === 0) {
    lifeExpectancy = 80;
  } else if (input1 + input2 < 0) {
    lifeExpectancy = 19;
  }
  console.log(lifeExpectancy);
  return lifeExpectancy;
};
