let Emma_mass = 64.3,
  Stan_mass = 83.1; // mass in kg

let Emma_height = 69.0,
  Stan_height = 70.0; // height in metres

// formular to calculate BMI

let Emma_bmi, Stan_bmi;

Emma_bmi = Emma_mass / (Emma_height * Emma_height);

Stan_bmi = Stan_mass / (Stan_height * Stan_height);

if (Emma_bmi > Stan_bmi) {
  console.log(
    `Emma's bmi of ${Emma_bmi} is greater than Stan's bmi of ${Stan_bmi}`
  );
} else {
  console.log(
    `Stan's bmi of ${Stan_bmi} is greater than Emma's bmi of ${Emma_bmi}`
  );
}
