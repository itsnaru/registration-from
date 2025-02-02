

/* OTP Input - START */
const inputs = document.querySelectorAll(".otp-field input");
if(inputs){
    inputs.forEach((input, index) => {
        input.dataset.index = index;
        input.addEventListener("keyup", handleOtp);
        input.addEventListener("paste", handleOnPasteOtp);
    });
}
function handleOtp(e) {
	const input = e.target;
	let value = input.value;
	let isValidInput = value.match(/[0-9a-z]/gi);
	input.value = "";
	input.value = isValidInput ? value[0] : "";
	let fieldIndex = input.dataset.index;
	if(fieldIndex < inputs.length - 1 && isValidInput) {
		input.nextElementSibling.focus();
	}
	if(e.key === "Backspace" && fieldIndex > 0) {
		input.previousElementSibling.focus();
	}
	if(fieldIndex == inputs.length - 1 && isValidInput) {
		submit();
	}
}
function handleOnPasteOtp(e) {
	const data = e.clipboardData.getData("text");
	const value = data.split("");
	if(value.length === inputs.length) {
		inputs.forEach((input, index) => (input.value = value[index]));
		submit();
	}
}
function submit() {
	console.log("Submitting...");
	let otp = "";
	inputs.forEach((input) => {
		otp += input.value;
		input.disabled = true;
		input.classList.add("disabled");
	});
	console.log(otp);
	$('.otp-loaders').addClass('show-loader')
}
/* OTP Input - END */




function loginOTP() {
	$('.login-otp-popup').addClass('d-flex').removeClass('d-none');
}


/* Form Validation - START */
(function () {
'use strict'
var forms = document.querySelectorAll('.needs-validation')
Array.prototype.slice.call(forms)
    .forEach(function (form) {
    form.addEventListener('submit', function (event) {
        if (!form.checkValidity()) {
        event.preventDefault()
        event.stopPropagation()
        }

        form.classList.add('was-validated')
    }, false)
    })
})()
/* Form Validation - END */


// $(document).ready(function(){
//     $( "#dob" ).datepicker({
//         inline: true
//     });
// })