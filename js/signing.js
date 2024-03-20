let btn = document.querySelector(".butt");
let inputs = document.querySelectorAll(".form input");
let message=document.querySelector('#message')
btn.addEventListener("click", function (e){
  e.preventDefault();
  validateInputs();
});
const validateInputs = () => {
    let messages=[]
  inputs.forEach(function (input) {
    console.log(input);
    if (input.value === "" || input.value == null) {
      input.style.border = "2px solid red";
      message.textContent='please fill all details'
      message.style.color='red'
    }
    else{
        input.style.border = "2px solid black";
        message.textContent=''
        message.style.color=''
        
        window.location.href='http://127.0.0.1:5500/interact.html'
        
    }
  });

};
