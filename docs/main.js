let imageDates = [];
let index = 0;

function updateImage() {
  const date = imageDates[index];
  document.getElementById("plot").src = `images/callisto_meteoswiss_${date}.png`;
}

function prevImage() {
  if (index > 0) { index--; updateImage(); }
}

function nextImage() {
  if (index < imageDates.length - 1) { index++; updateImage(); }
}

document.addEventListener("DOMContentLoaded", () => {
  fetch("images/images.json")
    .then(response => response.json())
    .then(data => {
      imageDates = data;
      index = imageDates.length - 1; // most recent
      updateImage();
    });
});

