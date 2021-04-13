// ----------Variables----------//

// Form
const form = document.getElementById('trial-form');

// Inputs

const inputs = document.querySelectorAll('.trial-form__input')

const firstName = document.getElementById('first-name');
const lastName = document.getElementById('last-name');
const email = document.getElementById('email');
const password = document.getElementById('password');

// Submit Button
const submitButton = document.querySelector('.trial-button');

// Expressions
const expressions = {
	name: /^[a-zA-ZÀ-ÿ\s]{1,40}$/, // Letras y espacios, pueden llevar acentos.
	password: /^.{4,12}$/, // 4 a 12 digitos.
	email: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
}

// --------------------------------------------------


const validarFormulario = (e) => {
	switch(e.target.name) {
		case "first-name":
			if(e.target.value != 0 && expressions.name.test(e.target.value)) {
				firstName.classList.remove('input-error');
				document.querySelector('.error-icon-fn').classList.remove('show-error');
				document.querySelector('.error-mess-fn').classList.remove('show-error')
				document.getElementById('first-name').classList.remove('hide-ph');


			} else {
				firstName.classList.add('input-error');
				document.querySelector('.error-icon-fn').classList.add('show-error');
				document.querySelector('.error-mess-fn').classList.add('show-error');
				document.getElementById('first-name').classList.add('hide-ph');
			}	
		break;

		case "last-name":
			if(e.target.value != 0 && expressions.name.test(e.target.value)) {
				lastName.classList.remove('input-error');
				document.querySelector('.error-icon-ln').classList.remove('show-error');
				document.querySelector('.error-mess-ln').classList.remove('show-error')
				document.getElementById('last-name').classList.remove('hide-ph');


			} else {
				lastName.classList.add('input-error');
				document.querySelector('.error-icon-ln').classList.add('show-error');
				document.querySelector('.error-mess-ln').classList.add('show-error');
				document.getElementById('last-name').classList.add('hide-ph');

			}
		break;

		case "email":
			if(e.target.value != 0 && expressions.email.test(e.target.value)) {
				email.classList.remove('input-error');
				document.querySelector('.error-icon-em').classList.remove('show-error');
				document.querySelector('.error-mess-em').classList.remove('show-error')
				document.getElementById('email').placeholder = 'Email Address';
				document.getElementById('email').classList.remove('error-ph');


			} else {
				email.classList.add('input-error');
				document.querySelector('.error-icon-em').classList.add('show-error');
				document.querySelector('.error-mess-em').classList.add('show-error');
				document.getElementById('email').placeholder = 'email@example/com';
				document.getElementById('email').classList.add('error-ph');

			}
		break;

		case "password":
			if(e.target.value != 0 && expressions.password.test(e.target.value)) {
				password.classList.remove('input-error');
				document.querySelector('.error-icon-pass').classList.remove('show-error');
				document.querySelector('.error-mess-pass').classList.remove('show-error')
				document.getElementById('password').classList.remove('hide-ph');


			} else {
				password.classList.add('input-error');
				document.querySelector('.error-icon-pass').classList.add('show-error');
				document.querySelector('.error-mess-pass').classList.add('show-error');
				document.getElementById('password').classList.add('hide-ph');

			}
		break;
	}
}

inputs.forEach((input) => {
	input.addEventListener('keyup', validarFormulario)
	input.addEventListener('blur', validarFormulario)
})

form.addEventListener('submit', (e) => {
	e.preventDefault();
	
	if(validarFormulario) {
		form.reset();
	}
})