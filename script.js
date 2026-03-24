//your JS code here. If required.
const termsCheckBox = document.getElementById("terms");
const submitBtn = document.getElementById("submitBtn");

termsCheckBox.addEventListener("change", function () {
	submitBtn.disabled = !this.checked;
});
