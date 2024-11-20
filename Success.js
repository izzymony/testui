document.getElementById('contactForm').addEventListener('submit', (event) => {
    event.preventDefault();
   
    popupForm.style.display = 'none'
    window.location.href = 'Upload.html'; // Redirect only i

  
});

const popupForm = document.getElementById('popupForm');
const openFormButton = document.getElementById('openFormButton');
const closeButton = document.getElementById('closeButton');

openFormButton.addEventListener('click', () =>{
    popupForm.style.display = 'block';
});

 closeButton.addEventListener('click', () => {
    popupForm.style.display = 'none';
 });

 window.addEventListener('click', () =>{
    if(event.target == popupForm){
        popupForm.style.display = 'none';
    }


 
    
 });

