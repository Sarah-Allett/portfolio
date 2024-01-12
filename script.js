let photo = document.getElementById('photo');

function changePhoto(event) {
    event.target.src = "./images/worse.jpg";

}

function changePhotoBack(event) {
    event.target.src = "./images/bad.jpg";

}

photo.addEventListener('mouseover', changePhoto);
photo.addEventListener('mouseout', changePhotoBack);
