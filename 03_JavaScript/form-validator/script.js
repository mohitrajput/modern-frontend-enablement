form.addEventListener("input", function (e) {
    var username = document.querySelector("#username");
    usernameChild = username.nextElementSibling;
    if(username.value.length<=15 && username.value.length>=3){
        usernameChild.style.visibility="hidden";
    }
    else{
        usernameChild.style.visibility='visible';
        usernameChild.innerHTML = "Length Should be Between 3 to 15"
    }

    var email = document.querySelector("#email");
    emailChild = email.nextElementSibling;
    var  emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    var isValid = emailRegex.test(email.value.trim());
    if(isValid)
    {
        emailChild.style.visibility="hidden";
    }isValid

    var password = document.querySelector("#password");
    passwordChild = password.nextElementSibling;
    if(password.value.length<=20 && password.value.length>=6){
        passwordChild.style.visibility="hidden";
        
    }
    else{
        passwordChild.style.visibility='visible';
        passwordChild.innerHTML = "Length Should be Between 6 to 20"
    }

    var password2 = document.querySelector("#password2");
    passwordChild2 = password2.nextElementSibling;
    if(password.value === password2.value){
        passwordChild2.style.visibility="hidden";
        
    }
    else{
        passwordChild2.style.visibility='visible';
        passwordChild2.innerHTML = "Password Should be Same"
    }
})
form.addEventListener("submit", function (e) {
    var  emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    var isValid = emailRegex.test(email.value.trim());
    if(username.value.length<=15 && username.value.length>=3 && password.value.length<=20 && password.value.length>=6 && password.value === password2.value && isValid)
    alert("Submitted Successfully");
    else
    {
        e.preventDefault();
        alert("Fill Correctly")
    }
    
  });