let button = document.querySelector(".plans");
let name = document.querySelector(".name");
let inputs = document.querySelectorAll(".bmiInput");
let weight = document.querySelector(".weight");
let height = document.querySelector(".height");
let paragraph = document.querySelector(".error");
let ranges = document.querySelectorAll(".nav h2");
let planitems = document.querySelector(".planitems");
let meals = [];

// let height=document.queryselector(".height")
// console.log(input)
// console.log(height)
let yearRange;
let category;
let bmi;
let mealPlan;

ranges.forEach((range) => {
  range.addEventListener("click", (e) => {
    ranges.forEach((range) => {
      if (range.classList.contains("active")) {
        range.classList.remove("active");
      }
    });

    yearRange = e.target.textContent;
    e.target.classList.add("active");
    console.log(range);
  });
});
button.addEventListener("click", function () {
  for (let i = 0; i < inputs.length; i++) {
    if (inputs[i].value === "") {
      paragraph.textContent = "Fill in all the fields";
      inputs[i].style.border = "2px solid red";
      inputs[i].previousElementSibling.style.color = "red";
    } else {
      paragraph.textContent = "";
      inputs[i].style.border = "1px solid black";
      inputs[i].previousElementSibling.style.color = "black";
      console.log("all good");
    }
  }

  if (paragraph.textContent === "") {
    calculatebmi();
    generatePlan();
    updateitems();
    console.log(mealPlan);
  }
});

function calculatebmi() {
  const weightvalue = parseInt(weight.value);
  const heightvalue = parseInt(height.value);
  bmi = parseInt((weightvalue / heightvalue ** 2).toFixed(2));

  if (bmi <= 29.9 && bmi >= 25) {
    category = "overweight";
  } else if (bmi <= 24.9 && bmi >= 18.5) {
    category = "normal";
  } else if (bmi <= 18.5) {
    category = "underweight";
  }

  // console.log(bmi)
}

const generatePlan = () => {
  plans.map((plan) => {
    if (plan[yearRange]) {
      mealPlan = plan[yearRange][category];
    }
  });
  console.log(category);
  console.log(bmi);
  console.log(mealPlan);
};

const plans = [
  {
    "0-10": {
      underweight: { carbohydrates: "60%", proteins: "20%", vitamins: "20%" },
      normal: { carbohydrates: "20%", proteins: "40%", vitamins: "40%" },
      overweight: { carbohydrates: "20%", proteins: "40%", vitamins: "40%" },
    },
  },
  {
    "11-25": {
      underweight: { carbohydrates: "40%", proteins: "40%", vitamins: "20%" },
      normal: { carbohydrates: "20%", proteins: "30%", vitamins: "50%" },
      overweight: { carbohydrates: "20%", proteins: "20%", vitamins: "60%" },
    },
  },
  {
    "26-45": {
      underweight: { carbohydrates: "20%", proteins: "30%", vitamins: "50%" },
      normal: { carbohydrates: "20%", proteins: "30%", vitamins: "40%" },
      overweight: { carbohydrates: "10%", proteins: "40%", vitamins: "50%" },
    },
  },
  {
    "46 and above": {
      underweight: { carbohydrates: "70%", proteins: "10%", vitamins: "20%" },
      normal: { carbohydrates: "30%", proteins: "40%", vitamins: "30%" },
      overweight: { carbohydrates: "40%", proteins: "30%", vitamins: "30%" },
    },
  },
];
function updateitems() {
  planitems.innerHTML = "";
  const planContainer = document.createElement("div");

  planContainer.innerHTML = `
    <p>Hey, ${name.value} your BMI is ${bmi} and we've customized the below meal plan just for you</p>
    
    <p class="meals" >Carbohydrates: ${mealPlan.carbohydrates}</p>
    <p class="meals" >Carbohydrates: ${mealPlan.proteins}</p>
    <p class="meals" >Carbohydrates: ${mealPlan.vitamins}</p>
    
    `;
  planitems.append(planContainer);
}
// planitems.addEventListener("click",function(e){
//     if (e.target.classList.contains("plans")) {
//     e.target.style="display"

//         // console.log("adding items");

//       } else if (e.target.classList.contains("")) {
//         // console.log("removing items");

//         e.target.display="none"

//         }
// })
