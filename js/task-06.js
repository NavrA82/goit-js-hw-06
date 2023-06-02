const userName = document.querySelector("#validation-input");
userName.addEventListener("blur", event => {
	console.dir(event.currentTarget.value.trim().length);
	if (Number(event.currentTarget.value.trim().length) === Number(userName.dataset.length)) {
		userName.classList.remove("invalid");
		return userName.classList.add("valid");
	}
	userName.classList.add("invalid");
});

// Варіант 2 щоб був сірий коли ми стерли всі символи (тобто відкотився у 0 становище) і бачимо текст плесхолдера
// const userName = document.querySelector("#validation-input");
// userName.addEventListener("blur", event => {
// 	console.dir(event.currentTarget.value.trim().length);
// 	if (Number(event.currentTarget.value.trim().length) === Number(userName.dataset.length)) {
// 		userName.classList.remove("invalid");
// 		return userName.classList.add("valid");
// 	} else if (Number(event.currentTarget.value.trim().length) === 0) {
// 		return userName.classList.remove("invalid", "valid");
// 	}
// 	userName.classList.add("invalid");
// });
