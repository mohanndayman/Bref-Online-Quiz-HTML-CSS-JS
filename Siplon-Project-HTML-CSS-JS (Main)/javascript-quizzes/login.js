function validationEmail(){
    let email = document.getElementById("email_input").value;
    let emailError = document.getElementById("email_error");
    let userEmail = localStorage.getItem ("userEmail"); 
    if (email.length != 0){
         if(email.match(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/)){
          emailError.innerHTML="";
          if (email == userEmail){
          return true;
         }}
          else{ 
             emailError.textContent =" Please enter a valid email address ! ";
             return false;
          }}else{ emailError.textContent ='Email Address is required !'}
             return false};

// Password validation and storage:
function validationPass(){
    
 let userPassw = localStorage.getItem("userPass");
 let passError = document.getElementById("error_pass");
 let passWord = document.getElementById("password").value;
    if (passWord.length != 0){
        if ( passWord == userPassw ){
            passError.innerHTML= "";
            return true;
        }
        else {
            passError.textContent= "Password is not valid!"
           return false;
        }}else{ passError.textContent ='Password is required !'
            return false};
    } 

// storage :
let loginButton = document.getElementById("Login");
loginButton.addEventListener('click', function (event) {   
    if (validationEmail() && validationPass()) {
        localStorage.setItem('isloggedin','true')
        window.location.href = '/index.html';
    } else {
        localStorage.setItem('isloggedin','false')
        event.preventDefault();
    }
});
