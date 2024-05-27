const form = document.getElementById('form');
const button = document.getElementById('button');
const firstName = document.querySelector('.firstName');
const lastName = document.querySelector('.lastName');
const email = document.querySelector('.email');
const password = document.querySelector('.password');

// This is for the error message
// const eMsg1 = document.getElementById('e-message1');

// The function
// function msg1() {
//   eMsg1.innerHTML="First Name cannot be empty";
// }

console.log(firstName);

// console.log(firstName, lastName, email, password);

form.addEventListener('submit', (e) => {
  e.preventDefault();
  const fName = firstName.value;
  const lName = lastName.value;
  const emailVal = email.value;
  const passwordVal = password.value;
  console.log(fName, lName, emailVal, passwordVal);
  const eMsg1 = document.getElementById('e-message1');
  const eMsg2 = document.getElementById('e-message2');
  const eMsg3 = document.getElementById('e-message3');
  const eMsg4 = document.getElementById('e-message4');

  // Check first name
  if (fName === '') {
    firstName.classList.add('error');
    eMsg1.innerHTML="First Name cannot be empty";
  } else {
    firstName.classList.remove('error');
    eMsg1.innerHTML="";
  }
  // Check last name

  if (lName === '') {
    lastName.classList.add('error');
    eMsg2.innerHTML="Last Name cannot be empty";
  } else {
    lastName.classList.remove('error');
    eMsg2.innerHTML="";
  }
  // Check email

  if (!validateEmail(emailVal) || emailVal === '') {
    email.classList.add('error');
    eMsg3.innerHTML="Looks likes this is not an email";
  } else {
    email.classList.remove('error');
    eMsg3.innerHTML="";
  }

  // Check password

  if (passwordVal === '') {
    password.classList.add('error');
    eMsg4.innerHTML="Password cannot be empty";
  } else {
    password.classList.remove('error');
    eMsg4.innerHTML="";
  }
});

// if (passwordVal === '') {
//   password.classList.add('error');
// } else {
//   password.classList.remove('error');
// }

//Validate email
function validateEmail(email) {
  var re =
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
}
