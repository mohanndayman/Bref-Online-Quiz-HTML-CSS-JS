document.addEventListener('DOMContentLoaded', function () {
    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('.nav__link');
  
    // Toggle the 'hide' class on click
    hamburger.addEventListener('click', function () {
      navLinks.classList.toggle('hide');
    });
  });
  
 let signinAtag =document.getElementById('signinAtag')
var signupAtag = document.getElementById('signupAtag');
  signinAtag.addEventListener('click',(e)=>{
    window.location.href = './javascript-quizzes/login.html'
})
  let isloggedin = localStorage.getItem('isloggedin');
  if(isloggedin == 'true'){
    signinAtag.textContent="log out"
    signupAtag.style.display='none'
    signinAtag.addEventListener('click',(e)=>{
      
      localStorage.setItem('isloggedin' ,'false');
      window.location.href='/index.html';
    })
  }else{

  }
