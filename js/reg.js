const form = document.getElementById('form');
const Modalform = document.getElementById('Modalform');

const username = document.getElementById('username');
const username2 = document.getElementById('username2');
const username3 = document.getElementById('username3');
const email = document.getElementById('email');
const phoneNumber = document.getElementById('phoneNumber');
const password = document.getElementById('password');
const password2 = document.getElementById('password2');

const Memail = document.getElementById('Memail');
const Mpassword = document.getElementById('Mpassword');

form.addEventListener('submit', e => {
	e.preventDefault();
	
	checkInputs();
});

Modalform.addEventListener('click', e => {
	e.preventDefault();
	
	checkInputs();
});

function checkInputs() {
	// trim to remove the whitespaces
	const usernameValue = username.value.trim();
    const usernameValue2 = username2.value.trim();
    const usernameValue3 = username3.value.trim();
	const emailValue = email.value.trim();
    const phoneValue = phoneNumber.value.trim();
	const passwordValue = password.value.trim();
	const password2Value = password2.value.trim();

	const MemailValue = Memail.value.trim();
	const MpasswordValue = Mpassword.value.trim()
	
	if(usernameValue === '') {
		setErrorFor(username, 'Фамилия не введена!');
	} else {
		setSuccessFor(username);
	}

    if(usernameValue2 === '') {
		setErrorFor(username2, 'Имя не введено!');
	} else {
		setSuccessFor(username2);
	}

    if(usernameValue3 === '') {
		setErrorFor(username3, 'Отчество не введено!');
	} else {
		setSuccessFor(username3);
	}
	
	if(emailValue === '') {
		setErrorFor(email, 'пустое поле!');
	} else if (!isEmail(emailValue)) {
		setErrorFor(email, 'имейл не введен');
	} else {
		setSuccessFor(email);
	}

    if(phoneValue === '') {
		setErrorFor(phoneNumber, 'пустое поле!');
	} else if (!isPhone(phoneValue)) {
		setErrorFor(phoneNumber, 'номер телефона не введен');
	} else {
		setSuccessFor(phoneNumber);
	}
	
	if(passwordValue === '') {
		setErrorFor(password, 'поле пароль пустое!');
	} else {
		setSuccessFor(password);
	}
	
	if(password2Value === '') {
		setErrorFor(password2, 'поле пароль пустое!');
	} else if(passwordValue !== password2Value) {
		setErrorFor(password2, 'Пароли не совпадают');
	} else{
		setSuccessFor(password2);
	}

	if(MpasswordValue === '') {
		setErrorFor(Mpassword, 'поле пароль пустое!');
	} else {
		setSuccessFor(Mpassword);
	}

	if(MemailValue === '') {
		setErrorFor(Memail, 'пустое поле!');
	} else if (!isEmail(MemailValue)) {
		setErrorFor(Memail, 'имейл не введен');
	} else {
		setSuccessFor(Memail);
	}
}

function setErrorFor(input, message) {
	const formControl = input.parentElement;
	const small = formControl.querySelector('small');
	formControl.className = 'form-control error';
	small.innerText = message
	console.log("Error");
}

function setSuccessFor(input) {
	const formControl = input.parentElement;
	formControl.className = 'form-control success';
	
}

	
function isEmail(email) {
	return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);
}

function isPhone(phoneNumber) {
	return /^(\([0-9]{3}\)\s*|[0-9]{3}\-)[0-9]{3}-[0-9]{4}$/.test(phoneNumber);
}

(function ($) {

    /*------------------
        Preloader
    --------------------*/
    $(window).on('load', function () {
        $(".loader").fadeOut();
        $("#preloder").delay(200).fadeOut("slow");
    });
})(jQuery);