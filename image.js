const images = [
  { filename: "92.jpg",link: "https://x.com/mephistomum/status/1968665203874156806" },
  { filename: "91.jpg",link: "https://x.com/xiamerqi/status/1971941058411221429" },
  { filename: "90.jpg",link: "https://x.com/xiamerqi/status/1971922492227985463" },
  { filename: "89.jpg"},
  { filename: "88.jpg"},
  { filename: "87.jpg" ,link: "https://x.com/mephistomum/status/1968920828361232729"},
  { filename: "86.jpg"},
  { filename: "85.jpg"},
  { filename: "84.jpg"},
  { filename: "83.jpg"},
  { filename: "82.jpg", link: "https://x.com/mephistomum/status/1967069951195562369"},
  { filename: "81.jpg"},
  { filename: "80.jpg"},
  { filename: "79.jpg"},
  { filename: "78.jpg"},
  { filename: "76.jpg"},
  { filename: "75.jpg"},
  { filename: "74.jpg"},
  { filename: "71.jpg" ,link: "https://x.com/mephistomum/status/1968615544614953076"},
  { filename: "70.jpg"},
  { filename: "69.jpg"},
  { filename: "68.jpg",link: "https://x.com/mephistomum/status/1967969218386915563"},
  { filename: "66.jpg"},
    { filename: "73.jpg" ,link: "https://x.com/mephistomum/status/1968250750615863301"},
  { filename: "72.jpg"},
  { filename: "65.jpg"},
  { filename: "64.jpg"},
  { filename: "63.jpg", link: "https://x.com/mephistomum/status/1969821189058306151"},
  { filename: "62.jpg", link: "https://x.com/mephistomum/status/1969768982816424198"},
{ filename: "61.jpg"},
{ filename: "60.jpg"},
{ filename: "59.jpg"},
{ filename: "58.jpg"},
{ filename: "57.jpg"},
{ filename: "56.jpg"},
{ filename: "55.jpg"},
{ filename: "54.jpg"},
{ filename: "53.jpg"},
  { filename: "52.jpg"},
    { filename: "51.jpg"},
  { filename: "50.jpg",link: "https://x.com/_hanameline/status/1962551668803019104" },
  { filename: "49.jpg",link: "https://x.com/LenaCatniPurrer/status/1961006377360298445" },
  { filename: "41.jpg",link: "https://x.com/mephistomum/status/1916713413679743447" },
  { filename: "42.jpg",link: "https://x.com/mephistomum/status/1916713413679743447" },
  { filename: "36.jpg",link: "https://x.com/miwaluvsy/status/1959997554760056999" },
  { filename: "35.jpg",link: "https://x.com/DearLoveLily/status/1959628604477972592" },
  { filename: "77.JPG"},
  { filename: "67.JPG"},
  { filename: "34.jpg",link: "https://x.com/miwaluvsy/status/1959582593797759406" },
  { filename: "33.jpg",link: "https://x.com/sylustale/status/1959323344807051349" },
  { filename: "14.jpg",link: "https://x.com/mephistomum/status/1922306850797617546"  },
  { filename: "5.jpg",link: "https://x.com/mephistomum/status/1955381268130259364"  },
  { filename: "3.jpg",link: "https://x.com/mephistomum/status/1951997741892018210"  },
  { filename: "9.jpg",link: "https://x.com/farahsylove/status/1953195697928585476" },
  { filename: "10.jpg",link: "https://x.com/mephistomum/status/1956399321815097402"  },
  { filename: "4.jpg",link: "https://x.com/mephistomum/status/1955263840184053768"  },
  { filename: "7.jpg",link: "https://x.com/mephistomum/status/1955948109894402149"  },
   { filename: "40.jpg",link: "https://x.com/mephistomum/status/1916713413679743447" },
  { filename: "8.jpg",link: "https://x.com/mephistomum/status/1955547526205149502"  },
  { filename: "6.jpg",link: "https://x.com/mephistomum/status/1956484897083916518"  },
  { filename: "2.jpg",link: "https://x.com/DearLoveLily/status/1954517816457019424"  },
  { filename: "19.jpg",link: "https://x.com/mephistomum/status/1922161834842361988"  },
  { filename: "20.jpg",link: "https://x.com/mephistomum/status/1921022928344252456" },
  { filename: "39.jpg",link: "https://x.com/mephistomum/status/1957611355290423787" },
  { filename: "15.jpg",link: "https://x.com/mephistomum/status/1922470078462795889"  },
  { filename: "48.jpg",link: "https://x.com/mephistomum/status/1916713413679743447" },
  { filename: "18.jpg",link: "https://x.com/mephistomum/status/1924418408608841950"  },
  { filename: "16.jpg",link: "https://x.com/mephistomum/status/1921505254689948033"  },
  { filename: "26.jpg",link: "https://x.com/mephistomum/status/1901325996881805781"  },
  { filename: "43.jpg",link: "https://x.com/mephistomum/status/1916713413679743447" },
  { filename: "44.jpg",link: "https://x.com/mephistomum/status/1916713413679743447" },
  { filename: "45.jpg",link: "https://x.com/mephistomum/status/1916713413679743447" },
  { filename: "12.jpg",link: "https://x.com/mephistomum/status/1923907852231639401"  },
  { filename: "29.jpg",link: "https://x.com/miffybloop/status/1890438794765086983" },
  { filename: "17.jpg",link: "https://x.com/mephistomum/status/1921884952880144871"  },
  { filename: "28.jpg",link: "https://x.com/mephistomum/status/1905252708149604673"  },
  { filename: "13.jpg",link: "https://x.com/mephistomum/status/1922835347240603831"  },
  { filename: "11.jpg",link: "https://x.com/mephistomum/status/1923340796536750492"  },
  { filename: "21.jpg",link: "https://x.com/mephistomum/status/1917493551337988153"  },
  { filename: "37.jpg",link: "https://x.com/miwaluvsy/status/1949062997680529709" },
  { filename: "38.jpg",link: "https://x.com/mephistomum/status/1900591021425389620" },
  { filename: "1.jpg",link: "https://x.com/taeohbeng/status/1954469917232943523"  },
  { filename: "22.jpg",link: "https://x.com/mephistomum/status/1917493551337988153"  },
  { filename: "32.jpg",link: "https://x.com/mephistomum/status/1958704535876378629"  },
  { filename: "23.jpg",link: "https://x.com/mephistomum/status/1917493551337988153"  },
  { filename: "30.jpg",link: "https://x.com/touko_black/status/1909390172879286279"  },
  { filename: "46.jpg",link: "https://x.com/mephistomum/status/1916713413679743447" },
  { filename: "47.jpg",link: "https://x.com/mephistomum/status/1916713413679743447" },
  { filename: "24.jpg",link: "https://x.com/mephistomum/status/1917493551337988153"  },
  { filename: "25.jpg",link: "https://x.com/mephistomum/status/1917493551337988153"  },
  { filename: "31.jpg",link: "https://x.com/miwaluvsy/status/1924783585091059738"  }
];

const gallery = document.getElementById("gallery");
const modalLinkBtn = document.getElementById("modalLinkBtn");

// Base URL for GitHub Pages
const baseURL = "https://mephistomum.github.io/mephistomum-project/assets/images/";

// Create gallery items and append to gallery container
images.forEach(({ filename }) => {
  const div = document.createElement("div");
  div.classList.add("gallery-item");

  const img = document.createElement("img");
  img.src = `${baseURL}${filename}`;
  img.alt = filename; 
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
    const clickedFile = e.target.alt; // same as filename
    const clickedImage = images.find(img => img.filename === clickedFile);

    modalImage.src = e.target.src;
    modalImage.alt = e.target.alt;

    // Update button link
    if (clickedImage && clickedImage.link) {
      modalLinkBtn.href = clickedImage.link;
      modalLinkBtn.style.display = "inline-block"; 
    } else {
      modalLinkBtn.style.display = "none"; // hide if no link
    }

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
