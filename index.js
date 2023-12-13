const container = document.querySelector('.container');
const signUpLink = document.querySelector('.signup-link');
const signInLnk = document.querySelector('.signin-link');


signUpLink.addEventListener('click', () => {

  container.classList.add('navigate')

})


signInLnk.addEventListener('click', () => {

  container.classList.remove('navigate')

})