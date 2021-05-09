function setBannerImages() {
  const bannerSource = [
    "images/banner2.webp",
    "images/banner3.webp",
    "images/banner4.webp",
  ];
  var html = "";
  html += "<div class='row'>";
  for (var i = 0; i < bannerSource.length; ++i) {
    html += `<div class='col-lg-4 col-md-6 col-sm-12 text-center'><img src='${bannerSource[i]}' alt='banner' class='img-fluid'/></div>`;
  }
  html += "</div>";
  document.getElementById("bannerImages").innerHTML = html;
}

function setHotDeals() {
  var html = "";
  html += "<h2>Hot Deals</h2><div class='row'>";
  const hotDealsSource = [
    "images/product1.jpg",
    "images/product2.jpg",
    "images/product3.jpg",
    "images/product4.jpg",
    "images/product5.png",
  ];
  const hotDealsCategory = [
    "Beauty & Health",
    "Beauty & Health",
    "Beauty & Health",
    "Beauty & Health",
    "Beauty & Health",
  ];
  const hotDealsTitle = [
    "13, Product Media",
    "Demo Product Title",
    "Demo Product Title",
    "Demo Product Title",
    "Demo Product Title",
  ];
  const hotDealsOldPrice = ["", "", "", "", "$21.00"];
  const hotDealsCurrentPrice = [
    "$80.00",
    "$29.00",
    "$50.00",
    "$80.00",
    "$19.00",
  ];
  if (
    hotDealsSource.length == hotDealsCategory.length &&
    hotDealsCategory.length == hotDealsTitle.length &&
    hotDealsTitle.length == hotDealsOldPrice.length &&
    hotDealsOldPrice.length == hotDealsCurrentPrice.length
  ) {
    for (var i = 0; i < hotDealsSource.length; ++i) {
      html += `<div class='col'><div class='hdDiv'>
          <img src='${hotDealsSource[i]}' alt='hot deals'/>
          <p class='text-muted'>${hotDealsCategory[i]}</p>
          <h6>${hotDealsTitle[i]}</h6>`;
      if (hotDealsOldPrice[i] !== "") {
        html += `<p class='categoryPrice'><del>${hotDealsOldPrice[i]}</del></p>&nbsp;&nbsp;&nbsp;`;
      }
      html += `<p class='categoryPrice text-danger'>${hotDealsCurrentPrice[i]}</p>
          </div></div>`;
    }
  }
  html += "</div>";
  document.getElementById("hotDeals").innerHTML = html;
}

function setNewArrivals() {
  var html = "";
  html += `<h2>New Arrivals</h2>
            <div class='buttons'>
                <button type='button' class='btn'>Automobiles</button>
                <button type='button' class='btn'>Beauty & Health</button>
                <button type='button' class='btn'>Games & Consoles</button>
            </div>`;
  const newArrivalsSource = [
    "images/product1.jpg",
    "images/product2.jpg",
    "images/product3.jpg",
    "images/product4.jpg",
    "images/product5.png",
  ];
  const newArrivalsCategory = [
    "Beauty & Health",
    "Beauty & Health",
    "Beauty & Health",
    "Beauty & Health",
    "Beauty & Health",
  ];
  const newArrivalsTitle = [
    "13, Product Media",
    "Demo Product Title",
    "Demo Product Title",
    "Demo Product Title",
    "Demo Product Title",
  ];
  const newArrivalsOldPrice = ["", "", "", "", "$21.00"];
  const newArrivalsCurrentPrice = [
    "$80.00",
    "$29.00",
    "$50.00",
    "$80.00",
    "$19.00",
  ];
  html += `<div class='row'>`;
  if (
    newArrivalsSource.length == newArrivalsCategory.length &&
    newArrivalsCategory.length == newArrivalsTitle.length &&
    newArrivalsTitle.length == newArrivalsOldPrice.length &&
    newArrivalsOldPrice.length == newArrivalsCurrentPrice.length
  ) {
    for (var i = 0; i < newArrivalsSource.length; ++i) {
      html += `<div class='col'><div class='naDiv'>
                      <img src='${newArrivalsSource[i]}' alt='hot deals'/>
                      <p class='text-muted'>${newArrivalsCategory[i]}</p>
                      <h6>${newArrivalsTitle[i]}</h6>`;
      if (newArrivalsOldPrice[i] !== "") {
        html += `<p class='categoryPrice'><del>${newArrivalsOldPrice[i]}</del></p>&nbsp;&nbsp;&nbsp;`;
      }
      html += `<p class='categoryPrice text-danger'>${newArrivalsCurrentPrice[i]}</p>
                      </div></div>`;
    }
  }
  html += "</div>";
  document.getElementById("newArrivals").innerHTML = html;
}

function setPopularCategories() {
  var html = "";
  const popularCategoriesSource = [
    "images/featured1.jpg",
    "images/featured2.jpg",
    "images/featured3.jpg",
    "images/featured4.jpg",
    "images/featured5.jpg",
    "images/featured6.jpg",
  ];
  const popularCategoriesTitle = [
    "Tops & Sets",
    "Electronics",
    "Hot Categories",
    "Accessories",
    "Accessories & Parts",
    "Bottoms",
  ];
  html += `<h2>Popular Categories</h2><div class='row'>`;
  if (popularCategoriesSource.length == popularCategoriesTitle.length) {
    for (var i = 0; i < popularCategoriesSource.length; ++i) {
      html += `<div class='col-lg-4 col-md-6 col-12'>
                <table class='table'>
                    <tr>
                        <td><img src='${popularCategoriesSource[i]}' alt='${popularCategoriesTitle[i]}'/></td>
                        <th>${popularCategoriesTitle[i]}</th>
                    </tr>
                </table>
                </div>`;
    }
    html += `</div>`;
    document.getElementById("popularCategories").innerHTML = html;
  }
}

function setAccessoriesAndParts() {
  var html = "";
  html += `<h2>Accessories & Parts</h2>
            <div class='buttons'>
                <button type='button' class='btn'>Games & Consoles</button>
                <button type='button' class='btn'>Beauty & Health</button>
                <button type='button' class='btn'>Automobiles</button>
            </div>
            <div class='row'>
                <div class='col-4'>
                    <div>
                        <img src='images/product5.png' class='img-fluid bigImage'/>
                        <p class='text-muted'>Automobiles</p>
                        <h6>Dummy Product Name</h6>
                        <p class='price'>$79.00</p>
                    </div>
                </div>
                <div class='col-8'>
                    <div class='row'>`;
  const partsSource = [
    "images/featured1.jpg",
    "images/featured2.jpg",
    "images/featured3.jpg",
    "images/featured4.jpg",
    "images/featured5.jpg",
    "images/featured6.jpg",
  ];
  const partsCategory = [
    "Beauty & Health",
    "Beauty & Health",
    "Beauty & Health",
    "Beauty & Health",
    "Automobiles",
    "Automobiles",
  ];
  const partsTitle = [
    "11. Product with Video",
    "5. Simple Product",
    "Demo Product Title",
    "6. Variable with Soldout Product",
    "Dummy Product Name",
    "Dummy Product Name",
  ];
  const partsOldPrice = ["", "", "", "$75.00", "", ""];
  const partsCurrentPrice = [
    "$39.00",
    "$50.00",
    "$29.00",
    "$55.00",
    "$79.00",
    "$29.00",
  ];
  if (
    partsSource.length == partsCategory.length &&
    partsCategory.length == partsTitle.length &&
    partsTitle.length == partsOldPrice.length &&
    partsOldPrice.length == partsCurrentPrice.length
  ) {
    for (var i = 0; i < partsSource.length; ++i) {
      html += `<div class='col-lg-4 col-md-4 col-12'>
                    <div class='card'>
                        <div class='card-body'>
                            <img src='${partsSource[i]}' alt='${partsTitle[i]}' class='img-fluid'/>
                            <hr/>
                            <p class='text-muted'>${partsCategory[i]}</p>
                            <h6>${partsTitle[i]}</h6>`;
      if (partsOldPrice[i] !== "") {
        html += `<p class='categoryPrice'><del>${partsOldPrice[i]}</del></p>&nbsp;&nbsp;&nbsp;`;
      }
      html += `<p class='categoryPrice text-danger'>${partsCurrentPrice[i]}</p>
                        </div>
                    </div>
                </div>`;
    }
    html += `</div></div></div>`;
  }
  document.getElementById("parts").innerHTML = html;
}

window.onload = function () {
  setBannerImages();
  setHotDeals();
  setNewArrivals();
  setPopularCategories();
  setAccessoriesAndParts();
};
