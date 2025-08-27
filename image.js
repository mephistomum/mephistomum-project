// Image filenames only (no full path needed)
const images = [
  { filename: "36.jpg" },
  { filename: "35.jpg" },
  { filename: "34.jpg" },
  { filename: "33.jpg" },
  { filename: "14.jpg" },
  { filename: "5.jpg" },
  { filename: "3.jpg" },
  { filename: "9.jpg" },
  { filename: "10.jpg" },
  { filename: "4.jpg" },
  { filename: "7.jpg" },
  { filename: "8.jpg" },
  { filename: "6.jpg" },
  { filename: "2.jpg" },
  { filename: "19.jpg" },
  { filename: "20.jpg" },
  { filename: "15.jpg" },
  { filename: "18.jpg" },
  { filename: "16.jpg" },
  { filename: "26.jpg" },
  { filename: "12.jpg" },
  { filename: "29.jpg" },
  { filename: "17.jpg" },
  { filename: "28.jpg" },
  { filename: "13.jpg" },
  { filename: "11.jpg" },
  { filename: "21.jpg" },
  { filename: "1.jpg" },
  { filename: "22.jpg" },
  { filename: "32.jpg" },
  { filename: "23.jpg" },
  { filename: "30.jpg" },
  { filename: "24.jpg" },
  { filename: "25.jpg" },
  { filename: "31.jpg" }
];

const gallery = document.getElementById("gallery");

// Base URL for GitHub Pages
const baseURL = "https://mephistomum.github.io/mephistomum-project/assets/images/";

// Create gallery items and append to gallery container
images.forEach(({ filename }) => {
  const div = document.createElement("div");
  div.classList.add("gallery-item");

  const img = document.createElement("img");
  img.src = `${baseURL}${filename}`;
  img.alt = filename; // or you can make a prettier alt
  img.loading = "lazy";

  div.appendChild(img);
  gallery.appendChild(div);
});

// Modal elements
const modalBackdrop = document.getElementById("modalBackdrop");
const modalImage = document.getElementById("modalImage");
const modalCloseBtn = document.getElementById("modalCloseBtn");

// Open modal on image click
gallery.addEventListener("click", e => {
  if (e.target.tagName === "IMG") {
    modalImage.src = e.target.src;
    modalImage.alt = e.target.alt;
    modalBackdrop.classList.add("show");
    modalBackdrop.focus();
  }
});

// Close modal function
function closeModal() {
  modalBackdrop.classList.remove("show");
  modalImage.src = "";
  modalImage.alt = "";
}

// Close modal on close button click
modalCloseBtn.addEventListener("click", closeModal);

// Close modal on clicking outside the image area
modalBackdrop.addEventListener("click", (e) => {
  if (e.target === modalBackdrop) {
    closeModal();
  }
});

// Close modal on pressing Escape key
window.addEventListener("keydown", (e) => {
  if (e.key === "Escape" && modalBackdrop.classList.contains("show")) {
    closeModal();
  }
});
