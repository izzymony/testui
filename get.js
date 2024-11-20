

function validateForm(){
const  email = document.getElementById('email').value;
const  Password = document.getElementById('password').value;

let isValid = true;

if (!isValidEmail(email)){
 isValidEmail = false;
    displayError('email', 'please enter a valid email');
}else{
    clearError('email');
}

if(Password.length < 6){
    isValid = false;
    displayError('password', 'Password must be at least 6 characters long');
}
else{
    clearError('password');
}

return(isValid);

}

function isValidEmail(email){
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailPattern.test(email);
}

function displayError (fieldId, message){
    const  errorElement = document.getElementById(fieldId  + 'Error');

    if(!errorElement){
        let errorElement = document.getElementById(fieldId + 'Error'); // Fixed case
        const field = document.getElementById(fieldId);
         errorElement = document.createElement('div');
         errorElement = fieldId + 'Error';
         errorElement.className = ('error');
         field.parentNode.insertBefore(errorElement, field.nextSibling);
    }

    errorElement.textContent = message;

}

function clearError(fieldId){
    let errorElement = document.getElementById(fieldId + 'Error');
    if (errorElement){
        errorElement.textContent='';
    }
}
function checkout() {
    // Check if the cart has items
    const messageElement = document.getElementById("checkout-message");
    messageElement.style.display = "block";
    
    // Hide the message after 5 seconds
    setTimeout(() => {
        messageElement.style.display = "none";
    }, 5000); 
  }
document.getElementById('myForm').addEventListener('submit', function(event) {
    if (validateForm()) {
        event.preventDefault(); // Prevent form submission if validation fails
        window.location.href = 'success.html';
    }
   /*  else{
        window.location.href = 'success.html';
    } */
});