const navbar = document.querySelector(".navbar");

document.querySelector("#bars").onclick = (e) => {
  navbar.classList.toggle("active");
  e.preventDefault();
};
//ini toogle remove active//
const bars = document.querySelector("#bars");
const sb = document.querySelector("#search-button");
const sc = document.querySelector("#cart-button");
const kt = document.querySelector("#kat-button");

document.addEventListener("click", function (e) {
  if (!bars.contains(e.target) && !navbar.contains(e.target)) {
    navbar.classList.remove("active");
  }

  if (!sb.contains(e.target) && !searchForm.contains(e.target)) {
    searchForm.classList.remove("active");
  }

  if (!sc.contains(e.target) && !shoppingCart.contains(e.target)) {
    shoppingCart.classList.remove("active");
  }

  if (!kt.contains(e.target) && !kategori.contains(e.target)) {
    kategori.classList.remove("active");
  }
});
//ini toogle active//

const searchForm = document.querySelector(".search-form");
const searchBox = document.querySelector("#search-box");

document.querySelector("#search-button").onclick = (e) => {
  searchForm.classList.toggle("active");
  searchBox.focus();
  e.preventDefault();
};

const shoppingCart = document.querySelector(".shopping-cart");

document.querySelector("#cart-button").onclick = (e) => {
  shoppingCart.classList.toggle("active");
  e.preventDefault();
};

const kategori = document.querySelector(".kategori");

document.querySelector("#kat-button").onclick = (e) => {
  kategori.classList.toggle("active");
  e.preventDefault();
};

//ini detail produk// msi
const detailModal = document.querySelector("#detail-modal");
const msiDetail = document.querySelector("#msi-detail");

msiDetail.onclick = (e) => {
  detailModal.style.display = "flex";
  e.preventDefault();
};

//close button//
document.querySelector(".modal #close-icon").onclick = (e) => {
  detailModal.style.display = "none";
  e.preventDefault();
};

//ini detail produk// acer
const detailModal2 = document.querySelector("#detail-modal2");
const acerDetail = document.querySelector("#acer-detail");

acerDetail.onclick = (e) => {
  detailModal2.style.display = "flex";
  e.preventDefault();
};

document.querySelector(".modal #close-icon2").onclick = (e) => {
  detailModal2.style.display = "none";
  e.preventDefault();
};
//ini detail produk// asus
const detailModal3 = document.querySelector("#detail-modal3");
const asusDetail = document.querySelector("#asus-detail");

asusDetail.onclick = (e) => {
  detailModal3.style.display = "flex";
  e.preventDefault();
};

document.querySelector(".modal #close-icon3").onclick = (e) => {
  detailModal3.style.display = "none";
  e.preventDefault();
};
//ini detail produk// hp
const detailModal4 = document.querySelector("#detail-modal4");
const hpDetail = document.querySelector("#hp-detail");

hpDetail.onclick = (e) => {
  detailModal4.style.display = "flex";
  e.preventDefault();
};

document.querySelector(".modal #close-icon4").onclick = (e) => {
  detailModal4.style.display = "none";
  e.preventDefault();
};

//ini detail produk// pc1
const detailpc1 = document.querySelector("#detailpc1");
const pc1Detail = document.querySelector("#detail-pc1");

pc1Detail.onclick = (e) => {
  detailpc1.style.display = "flex";
  e.preventDefault();
};

document.querySelector(".modal #close-icon5").onclick = (e) => {
  detailpc1.style.display = "none";
  e.preventDefault();
};

//ini detail produk// pc2
const detailpc2 = document.querySelector("#detailpc2");
const pc2Detail = document.querySelector("#detail-pc2");

pc2Detail.onclick = (e) => {
  detailpc2.style.display = "flex";
  e.preventDefault();
};

document.querySelector(".modal #close-icon6").onclick = (e) => {
  detailpc2.style.display = "none";
  e.preventDefault();
};

//ini detail produk// pc3
const detailpc3 = document.querySelector("#detailpc3");
const pc3Detail = document.querySelector("#detail-pc3");

pc3Detail.onclick = (e) => {
  detailpc3.style.display = "flex";
  e.preventDefault();
};

document.querySelector(".modal #close-icon7").onclick = (e) => {
  detailpc3.style.display = "none";
  e.preventDefault();
};

//ini detail produk// pc4
const detailpc4 = document.querySelector("#detailpc4");
const pc4Detail = document.querySelector("#detail-pc4");

pc4Detail.onclick = (e) => {
  detailpc4.style.display = "flex";
  e.preventDefault();
};

document.querySelector(".modal #close-icon8").onclick = (e) => {
  detailpc4.style.display = "none";
  e.preventDefault();
};

//ini detail produk// pc5
const detailpc5 = document.querySelector("#detailpc5");
const pc5Detail = document.querySelector("#detail-pc5");

pc5Detail.onclick = (e) => {
  detailpc5.style.display = "flex";
  e.preventDefault();
};

document.querySelector(".modal #close-icon9").onclick = (e) => {
  detailpc5.style.display = "none";
  e.preventDefault();
};
