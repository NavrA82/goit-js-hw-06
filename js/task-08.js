const formElement = document.querySelector('.login-form');
formElement.addEventListener('submit', onFormSubmit);
function onFormSubmit(event) {
  event.preventDefault();
  const message = 'My dear friend, you need to enter all your data';
  const { email, password } = event.currentTarget.elements;
  if (email.value === '' || password.value === '') {
    alert(message);
    return;
  }
  const data = {
    email: email.value,
    password: password.value,
  };
  console.dir(data);
  formElement.reset();
}
