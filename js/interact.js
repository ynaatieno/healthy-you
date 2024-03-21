let button = document.querySelector(".plans");
let name = document.querySelector(".name");
let inputs = document.querySelectorAll(".bmiInput");
let weight = document.querySelector(".weight");
let height=document.querySelector(".height")
let paragraph = document.querySelector(".error");
// let height=document.queryselector(".height")
// console.log(input)
// console.log(height)
button.addEventListener("click", function () {
  for (let i = 0; i < inputs.length; i++) {
    if (inputs[i].value === "") {
      paragraph.textContent = "Fill in all the fields";
      inputs[i].style.border="2px solid red";
      inputs[i].previousElementSibling.style.color="red"

    }else{
        paragraph.textContent = "";
        inputs[i].style.border="1px solid black";
        inputs[i].previousElementSibling.style.color="black"
    }
  }

  if(paragraph.textContent===""){
    calculatebmi();

  }
});

// under 18.5 – This is described as underweight. 
// between 18.5 and 24.9 – This is described as the ‘healthy range’.
// between 25 and 29.9 – This is described as overweight
// between 30 and 39.9 – This is described as obesity
// 40 or over – This is described as severe obesity


function calculatebmi(){
const weightvalue=parseInt(weight.value)
const heightvalue=parseInt(height.value)
const bmi=(weightvalue/(heightvalue**2)).toFixed(2);
let category;

if(bmi >=29.9 && bmi>=25){
    category = "overweight"
    
}

else if (bmi >=24.9 && bmi>=18.5 ){
   
        category="normal"
    }

    else if(bmi>=18.5){
        
            category="underweight"
        }

    
// console.log(bmi)
}

const plans = [
  {
    "0-10": {
      underweight: { carbohydrates: "60%", proteins: "20%", vitamins: "20%" },
      normal: { carbohydrates: "30%", proteins: "30%", vitamins: "40%" },
      overweight: { carbohydrates: "20%", proteins: "40%", vitamins: "40%" },
    },
  },
  {
    "11-25": {
      underweight: { carbohydrates: "60%", proteins: "20%", vitamins: "20%" },
      normal: { carbohydrates: "30%", proteins: "30%", vitamins: "40%" },
      overweight: { carbohydrates: "20%", proteins: "40%", vitamins: "40%" },
    },
  },
  {
    "25-45": {
      underweight: { carbohydrates: "60%", proteins: "20%", vitamins: "20%" },
      normal: { carbohydrates: "30%", proteins: "30%", vitamins: "40%" },
      overweight: { carbohydrates: "20%", proteins: "40%", vitamins: "40%" },
    },
  },
  {
    "46 and above": {
      underweight: { carbohydrates: "60%", proteins: "20%", vitamins: "20%" },
      normal: { carbohydrates: "30%", proteins: "30%", vitamins: "40%" },
      overweight: { carbohydrates: "20%", proteins: "40%", vitamins: "40%" },
    },
  },
];
