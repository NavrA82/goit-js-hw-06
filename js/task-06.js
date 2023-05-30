const userName = document.querySelector("#validation-input");
const validationInput = document.getElementById("validation-input");
	userName.addEventListener("blur", inputUserName);
function inputUserName(event) {
 if (Number(event.currentTarget.value.trim().split('').length) === Number(userName.dataset.length)) {
  validationInput.classList.remove("invalid");
  return validationInput.classList.add("valid");
 }
 return validationInput.classList.add("invalid");
};