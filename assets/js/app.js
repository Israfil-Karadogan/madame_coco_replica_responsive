
const icon = document.querySelectorAll(".fa-heart");
const searchButton = document.querySelector(".search_btn");
const searchBox = document.querySelector(".input_search");
const cardTitle = document.querySelectorAll(".card_body");
const navBar = document.querySelectorAll(".navbar-nav");
const navLink = document.querySelectorAll(".nav-link");
const productWrapper = document.querySelector(".product-wrapper");

const productData = [
  {
    id: 1,
    title: "deneme 1",
    description: "desc",
    price: 1300,
    discountedPrice: 1200,
    imageSet: [
      "https://hips.hearstapps.com/hmg-prod/images/2023-ford-gt-mk-iv-02-1670543667.jpg",
    ],
  },
  {
    id: 2,
    title: "deneme 2",
    description: "desc",
    price: 1300,
    discountedPrice: 1200,
    imageSet: [
      "https://hips.hearstapps.com/hmg-prod/images/2023-ford-gt-mk-iv-02-1670543667.jpg",
    ],
  },
  {
    id: 3,
    title: "deneme 3",
    description: "desc",
    price: 1300,
    discountedPrice: 1200,
    imageSet: [
      "https://hips.hearstapps.com/hmg-prod/images/2023-ford-gt-mk-iv-02-1670543667.jpg",
    ],
  },
  {
    id: 4,
    title: "deneme 4",
    description: "desc",
    price: 1300,
    discountedPrice: 1200,
    imageSet: [
      "https://hips.hearstapps.com/hmg-prod/images/2023-ford-gt-mk-iv-02-1670543667.jpg",
    ],
  },
];

productData.forEach((item) => {
  productWrapper.innerHTML += `<div class="col-md-4 ">
    <div class="card_img">
      <a href="" class="icon_btn"><i class="fa-regular fa-heart"></i></a>
      <img
        src="${item.imageSet[0]}"
        alt=""
      />
    </div>
    <div class="card_body"><span>${item.title}</span></div>
    <div class="card_pricing">${item.discountedPrice} <span>/</span> Sepette ${item.price} TL</div>
    <div class="card_add_button text-center">
      <button type="button">Sepete ekle</button>
    </div>
  </div>`;
});
cardiconButton = document.querySelectorAll(".icon_btn");

cardiconButton.forEach((element) => {
  element.addEventListener("click", (event) => {
    event.preventDefault();
    const isActive = element.classList.contains("active");
    if (isActive) {
      element.classList.remove("active")
    }else {
      element.classList.add("active");
    }
  });
});



searchButton.addEventListener("click", (e) => {
  inputData = searchBox.value;
  productData.forEach((event) => {
    if (event.title.includes(inputData)) {
      productWrapper.innerHTML = "bulundu";
      console.log("bulundu");
    } else {
      productWrapper.innerHTML = "bulunamadı";
      console.log("bulunamadı");
    }
  });
});
