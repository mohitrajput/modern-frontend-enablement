document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("form");
    const username = document.getElementById("username");
    const email = document.getElementById("email");
    const password = document.getElementById("password");
    const password2 = document.getElementById("password2");
  
    
    //To show success
    function showSuccess(input) {
      const formControl = input.parentElement;
      formControl.classList.remove("error");
    }
  
    //To show error message
    function showError(input, message) {
      const formControl = input.parentElement;
      const small = formControl.querySelector("small");
      small.innerText = message;
      formControl.classList.add("error");
    }
  
     //To check if field is required or not 
     function checkRequired(inputs) {
      let isValid = true;
      inputs.forEach(function (input) {
        if (input.value.trim() === "") {
          showError(input, `${getFieldName(input)} is required`);
          isValid = false;
        } else {
          showSuccess(input);
        }
      });
      return isValid;
    }
  
    //To get name of input field
    function getFieldName(input) {
      return input.id.charAt(0).toUpperCase() + input.id.slice(1);
    }
  
    //To get the length of input
    function checkLength(input, min, max) {
      const length = input.value.trim().length;
      if (length < min || length > max) {
        showError(input, `${getFieldName(input)} must be between ${min} and ${max} characters`);
        return false;
      }
      showSuccess(input);
      return true;
    }
    
    //To check Email is valid
    function checkEmail(input) {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      const isValid = emailRegex.test(input.value.trim());
    
      if (!isValid) {
        showError(input, "Enter a valid email address");
      } else {
        showSuccess(input);
      }
    
      return isValid;
    }
  
    //To check if password2 is matched with password1
    function checkPasswordsMatch(input1, input2) {
      const password2 = document.getElementById("password2");
  
    if (input1.value !== input2.value) {
      showError(password2, "Passwords do not match");
      return false;
    } else {
      showSuccess(password2);
    }
  
    return true;
    }
  
    // Validate inputs
    form.addEventListener("input", function (e) {
      if (e.target.tagName === "INPUT") {
        if (e.target.type === "password" && e.target.id === "password2") {
          checkPasswordsMatch(password, password2);
        } else {
          checkRequired([e.target]);
          if (e.target.id === "username") {
            checkLength(e.target, 3, 15);
          } else if (e.target.id === "password") {
            checkLength(e.target, 6, 20);
            checkPasswordsMatch(e.target, password2);
          } else if (e.target.id === "email") {
            checkEmail(e.target);
          }else if (e.target.id === "password2") {
            checkPasswordsMatch(password, e.target);
          }
        }
      }
    });
  
    //Form submission
    form.addEventListener("submit", function (e) {
      if (
        !checkRequired([username, email, password, password2]) ||
        !checkLength(username, 3, 15) ||
        !checkLength(password, 6, 20) ||
        !checkEmail(email) ||
        !checkPasswordsMatch(password, password2)
      ) {
        e.preventDefault();
      }else{
        alert("form submitted successfully!!");
      }
    });
  
  });