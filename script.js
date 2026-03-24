const termsCheckbox = document.getElementById('terms');
const submitBtn = document.getElementById('submitBtn');

termsCheckbox.addEventListener('change', function() {
    
    // Check if the checkbox is ticked
    if (termsCheckbox.checked === true) {
        // Enable the button
        submitBtn.disabled = false;
		submitBtn.click();
    } 
    // If the checkbox is unticked
    else {
        // Disable the button
        submitBtn.disabled = true;
    }
    
});