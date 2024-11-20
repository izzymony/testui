document.getElementById('itemsPop').addEventListener('submit', (event) => {
    event.preventDefault();
   
    itemsBox.style.display = 'none'
    window.location.href = 'Upload.html'; // Redirect only i

  
});

const openBox = document.getElementById('openBox');

openBox.addEventListener('click', () => {

   if (itemsBox.style.display === 'none') {
    itemsBox.style.display = 'block';
   } else{
    itemsBox.style.display = 'none';
   }
3});

