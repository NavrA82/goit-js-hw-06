const userName = document.querySelector("#validation-input");
	userName.addEventListener("blur",(event) => {
    console.dir(event.currentTarget.value.trim().length);
		if (Number(event.currentTarget.value.trim().length) === Number(userName.dataset.length)) {
			userName.classList.remove("invalid");
			return userName.classList.add("valid");
		} else if (Number(event.currentTarget.value.trim().length) === 0) {
			return userName.classList.remove("invalid", "valid");
		}
		userName.classList.add("invalid");
	});





















// const userName = document.querySelector("#validation-input");
// 	userName.addEventListener("blur", inputUserName);
// function inputUserName(event) {
//   if (Number(event.currentTarget.value.trim().length) === Number(userName.dataset.length)) {
//   userName.classList.remove("invalid");
//   return userName.classList.add("valid");
//   }else if (Number(event.currentTarget.value.trim().length) === 0) {
// 		return userName.classList.remove("invalid", "valid");
// 	};
//   userName.classList.add("invalid");
// };