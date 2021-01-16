let animal;
let maleOrFemale;
let age;
let supHero;
var regAnimal = /^[a-zA-Z]{1,20}$/;
var regMaleOrFemale = /^(male|female|)$/i;
var regAge = /^[1-9]\d{0,4}$/;

function superheroNameMaker() {
    animal = prompt("What animal is the superhero most similar to?");
    if (!regAnimal.test(animal)) {
      return "Not valid value!";
    }

    maleOrFemale = prompt("Is the superhero male or female?\nLeave blank if unknown or other.");
    if (!regMaleOrFemale.test(maleOrFemale)) {
      return "Not valid value!";
    }

    age = prompt("How old is superhero?");
    if (!regAge.test(age)) {
      return "Not valid value!";
    }

    supHero = animal + "-";
    
    if (maleOrFemale == "male") {
      if (age < 18) {
        supHero += "boy";
      } else {
        supHero += "man";
      }
    } else if (maleOrFemale == "female") {
        if (age < 18) {
            supHero += "girl";
          } else {
            supHero += "woman";
        }   
    } else {
      if (age < 18) {
        supHero += "kid";
      } else {
        supHero += "hero";
      }
    }
    return "The superhero name is: " + supHero + "!";
    }
  alert(superheroNameMaker());