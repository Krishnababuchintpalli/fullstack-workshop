const username=document.getElementById("username")
const email=document.getElementById("email")
const password=document.getElementById("password")
const confirmPassword=document.getElementById("confirm-password")
const userNameBox=document.getElementById("usernameBox")
const mailBox=document.getElementById("mailBox")
const passwordBox=document.getElementById("passwordBox")
const cpasswordBox=document.getElementById("cpasswordBox")
const nameError=document.querySelector(".nameError")
const mailError=document.querySelector(".mailError")
const passwordError=document.querySelector(".passwordError")
const confirmPasswordError=document.querySelector(".cpasswordError")
const submitBtn=document.querySelector(".submitBtn")


 username.addEventListener("blur", () => {
    if (username.value.length < 3) {
      nameError.textContent = "Username must be at least 3 characters";
      nameError.style.color='red'
    } else if (username.value.length > 15) {
    nameError.textContent = "Username must be maximum of 15 characters";
    nameError.style.color='red'
    }else if(! validateUsername ){
        nameError.textContent = "Username accepts alphanumerics only";
        nameError.style.color='red'
    }
     else {
      nameError.textContent = "";
      userNameBox.checked=true;
    }

  });

  email.addEventListener("blur", () => {
    if (! isValidEmail(email.value)) {
      mailError.textContent = "Enter valid mail";
      mailError.style.color='red'
    } 
     else {
     mailError.textContent = "";
     mailBox.checked=true;
    }

  });

  password.addEventListener("blur", () => {
    if (! validatePassword(password.value)) {
      passwordError.textContent = "Enter valid password.password must contain 8+characters,min . 1 Uppercase,min. 1 Lowercase,1 special character";
      passwordError.style.color='red'
    } 
     else {
      passwordError.textContent = "";
      passwordBox.checked=true
    }

  });

  confirmPassword.addEventListener("blur", () => {
    if (!(confirmPassword.value === password.value)) {
     confirmPasswordError.textContent = "passwords doesnt match";
     confirmPasswordError.style.color='red'
    } 
     else {
      confirmPasswordError.textContent = "";
      cpasswordBox.checked=true;
    }

  });
  

  function isValidEmail(email) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}



  function validateUsername(username){
     for(let c of username){
        if (!(c>='A' && c<='Z' || c>='a' && c<='z'|| c>='0' && c<='9' )){
            return false;
        }
    }
    return true;

   
  }

  function validatePassword(password) {
    let validating=true

    if(password.length<8) {
        validating=false;
       
    }
     let count=0;
    for(let c of password){
        if(c>='A' && c<='Z'){
            count++;
        }
    }
    if(count==0){
         validating=false;
    }
    count=0;
    for(let c of password){
        if(c>='a' && c<='z'){
            count++;
        }
    }
    if(count==0){
         validating=false;
    }

    const specials = "!@#$%^&*";
    count=0;

    for (let char of password) {
        if (specials.includes(char)) {
          count++;
        }
    }
return validating;
}


submitBtn.addEventListener("click", function (e) {

  let isValid = true;

  if (!userNameBox.checked) {
    nameError.textContent = "Please enter a valid username";
    nameError.style.color = "red";
    isValid = false;
  }

  if (!mailBox.checked) {
    mailError.textContent = "Please enter a valid email";
    mailError.style.color = "red";
    isValid = false;
  }

  if (!passwordBox.checked) {
    passwordError.textContent =
      "Password must be valid before submitting";
    passwordError.style.color = "red";
    isValid = false;
  }

  if (!cpasswordBox.checked) {
    confirmPasswordError.textContent =
      "Passwords must match";
    confirmPasswordError.style.color = "red";
    isValid = false;
  }

  if (!isValid) {
    e.preventDefault();
    alert("Please fix all errors before submitting");
  }
});
