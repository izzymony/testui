const images1 = [
    'img/571b822c-1035-48ad-a808-4f7bb4a53115.jpeg',
    'img/photo-1494236581341-7d38b2e7d824.jpeg',
    'img/photo-1577359443010-6ad00b4998a5.jpeg',
    'img/photo-1485546784815-e380f3297414.jpeg'
];
 const heightsSet1 = [
    '100px', // Height for img1
    '150px', // Height for img2
    '200px', // Height for img3
    '250px'  // Height for img4
];

// Widths for images in set 1
 const widthsSet1 = [
    '10px', // Width for img1
    '150px', // Width for img2
    '200px', // Width for img3
    '250px'  // Width for img4
];  

//Array of images 2
const images2 = [
    'img/4b8d0cd9-f831-4b1c-8536-efc3f1e21bdd.jpeg',
    'img/photo-1632046771977-4c57ca795e18.jpeg',
    'img/photo-1642088923715-8b90f8616cc3.jpeg',
    'img/photo-1553981421-75988941e364.jpeg'
];
  const heightsSet2 = [
    '10px', // Height for img1
    '150px', // Height for img2
    '200px', // Height for img3
    '250px'  // Height for img4
]; 

// Widths for images in set 1
const widthsSet2 = [
    '10px', // Width for img1
    '150px', // Width for img2
    '200px', // Width for img3
    '250px'  // Width for img4
]; 




const imageContainer = document.getElementById('imageContainer');

function displayImages (images){
    imageContainer.innerHTML = '';

    images.forEach((imagesSrc , index) => {
        const img = document.createElement('img');
        img.src = imagesSrc;
        img.alt = Image;
      
        imageContainer.appendChild(img);
    });
}

document.getElementById('button1').addEventListener('click', function() {
    displayImages(images1, heightsSet1, widthsSet1); // Show the first set of images
});

// Event listener for button 2
document.getElementById('button2').addEventListener('click', function() {
    displayImages(images2,heightsSet2, widthsSet2); // Show the second set of images
});

 const items = document.querySelectorAll(".accordion-item");

 const resetItems = () => {
    items.forEach(
        items => items.classList.remove("active"));
    
 };

 const handleClick = (element, index) => {
    resetItems();
    element.classList.add("active");

    localStorage.setItem("accordionIndex", index);
 };
 resetItems();

 
 const activeItem = items[localStorage.getItem("accordionIndex")

 ];

 if (activeItem){
    activeItem.classList.add("active");

 }else{
    items[0].classList.add("active")
 }

 const overlay = document.getElementById('overlay');
const overlayImg = document.getElementById('overlay-img');
const closeBtn = document.getElementById('close');

// Get all images in the gallery
const images = document.querySelectorAll('.imgs');

// Add click event to each image
images.forEach(image => {
    image.addEventListener('click', function() {
        overlay.style.display = 'flex'; // Show the overlay
        overlayImg.src = this.src; // Set the overlay image source to the clicked image
    });
});

// Close the overlay when the close button is clicked
closeBtn.addEventListener('click', function() {
    overlay.style.display = 'none'; // Hide the overlay
});

// Close the overlay when clicking outside the image
overlay.addEventListener('click', function(event) {
    if (event.target === overlay) {
        overlay.style.display = 'none'; // Hide the overlay
    }
});