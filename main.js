let $ = document.querySelector.bind(document);
let $$ = document.querySelectorAll.bind(document);
const listItemLink = $$(".header-item__link");
const line = $(".header-list .line");
const tabActive = $(".header-item__link.active");
const slides = $$(".slide-img-box");
const slidesImage = $$(".slide-img");
const listProduct = $(".list-product");
const loadMore = $(".load-more");
const optionPrice = $(".option-price");
// const loadMoreBox = $("load-more__box");
const cartProduct = $(".cart-product");
//data
var products = [
    {
        id: 1,
        name: "Nguyễn Thị Mai Hương",
        sex: "female",
        age: 18,
        details: "Nước da trắng, xinh gái, biết nấu ăn, có bằng đại học trường Đại học Bách Khoa Hà Nội",
        price: 102000,
        homeTown: "Nghệ An",
        img: "./img/products/1.jpg"
    },
    {
        id: 2,
        name: "Nguyễn Thảo Linh",
        sex: "female",
        age: 20,
        details: "Cô gái Cần Thơ có chiều cao lên tới 1m75, từng đạt giải Á Quân hoa hậu hoàn vũ năm 2020",
        price: 1000000,
        homeTown: "Cần Thơ",
        img: "./img/products/2.jpg"
    },
    {
        id: 3,
        name: "Diệu Linh",
        sex: "female",
        age: 19,
        details: "Diệu Linh là một cô gái Hà Thành, giọng nói dễ thương, rất quan tâm đến mọi người!",
        price: 179000,
        homeTown: "Hà Nội",
        img: "./img/products/3.jpg"
    },
    {
        id: 4,
        name: "Lã Thi Thu Trang",
        sex: "female",
        age: 21,
        details: "Sỡ hữu 3 vòng cực khủng, nước da ngăm chắc khỏe, nụ cười tỏa nắng khiến nhiều anh mê mẩn",
        price: 201000,
        homeTown: "Nghệ An",
        img: "./img/products/4.jpg"
    },
    {
        id: 5,
        name: "Nguyễn Thị Thu Hương",
        sex: "female",
        age: 23,
        details: "Với giọng hát trời phú cộng thêm vẻ đẹp như hoa hậu, Hương là một trong những idol của giới trẻ hiện nay với lượt follow lên đến 200.000 người",
        price: 351000,
        homeTown: "Quảng Bình",
        img: "./img/products/5.jpg"
    },
    {
        id: 6,
        name: "Huyền Trang",
        sex: "female",
        age: 17,
        details: "Dù khá còn trẻ, mới chỉ có 17 tuổi, thế nhưng Huyền Trang đã 2 lần đăng quang hoa hậu Châu Á và đạt được kết quả rất tốt",
        price: 2000000,
        homeTown: "Cần Thơ",
        img: "./img/products/6.jpg"
    },
    {
        id: 7,
        name: "Nguyễn Hương Mai",
        sex: "female",
        age: 25,
        details: "Dù không còn ở tuổi 18 đôi mươi, nhưng Hương Ly vẫn có một nét gì đó khiến anh em chúng ta xao xuyến, hơn nữa cô còn là một tiktoker với số lượng fllow khủng bằng 1/5 dân số Việt Nam ",
        price: 179000,
        homeTown: "Bắc Ninh",
        img: "./img/products/7.jpg"
    },
    {
        id: 8,
        name: "Dương Thị Cẩm Ly",
        sex: "female",
        age: 19,
        details: "Cô gái đại học năm nhất với thành tích học tập cực khủng, cô thường xuyên tham gia các hoạt động tích cực của trường, nhiều lần đạt học bổng và có số điển đứng đầu khoa",
        price: 95000,
        homeTown: "Yên Bái",
        img: "./img/products/8.jpg"
    },
    {
        id: 9,
        name: "Triệu Lệ Giang",
        sex: "female",
        age: 16,
        details: "Cô bé tuy còn khá trẻ nhưng có thân hình của phụ huynh, gương mặt cực kì xinh xắn cộng thêm số đo 3 vòng khủng",
        price: 99500,
        homeTown: "Nam Định",
        img: "./img/products/9.jpg"
    },
    {
        id: 10,
        name: "Nguyễn Thị Vân",
        sex: "female",
        age: 18,
        details: "Vừa tròn tuổi 18, Vân có vẻ đẹp Nghiêng nước nghiêng thành, thật đúng với câu nói: Chè Thái gái Tuyên",
        price: 505000,
        homeTown: "Tuyên Quang",
        img: "./img/products/10.jpg"
    },
    {
        id: 11,
        name: "Chu Khang Cho",
        sex: "male",
        age: 19,
        details: "Nam sinh bụng 6 múi, gương mặt điển trai thu hút mọi ánh nhìn từ các chị em",
        price: 2000000,
        homeTown: "Trung Quốc",
        img: "./img/products/11.jpg"
    },
    {
        id: 12,
        name: "Kim Yi Zang",
        sex: "male",
        age: 25,
        details: "Chàng trai Hàn Quốc điển trai, cao 1m8 nặng 79kg cơ bắp cuồn cuộn",
        price: 999000,
        homeTown: "Korean",
        img: "./img/products/12.jpg"
    },
    {
        id: 13,
        name: "Park Hyn Sung",
        sex: "male",
        age: 21,
        details: "Từng là diễn viên chính của 5 bộ phim lớn, người mẫu quảng cáo của 12 hãng hàng lớn nhất Hàn Quốc",
        price: 795000,
        homeTown: "Korean",
        img: "./img/products/13.jpg"
    },
    {
        id: 14,
        name: "Quang Hưng",
        sex: "male",
        age: 22,
        details: "là hot boy khi mới còn ở độ tuổi đi học, Quang Hưng là cái tên khiến nhiều bạn bè cùng trang lứa ghen tị vì độ đẹp trai, ga lăng",
        price: 101900,
        homeTown: "Nam Định",
        img: "./img/products/14.jpg"
    },
    {
        id: 15,
        name: "Thái Dương",
        sex: "male",
        age: 18,
        details: "được mệnh danh là thiên sứ sơ mi, Thái Dương là mẫu quảng cáo cho thương hiệu sơ mi lớn ở Việt Nam. Đặc biệt biết hát, chơi đàn.",
        price: 207000,
        homeTown: "Tuyên Quang",
        img: "./img/products/15.jpg"
    },
    {
        id: 16,
        name: "Crish Bown",
        sex: "child",
        age: 7,
        details: "Cậu bé cực kì dễ thương khiến ai nhìn cũng phải yêu <3",
        price: 830500,
        homeTown: "Russia",
        img: "./img/products/16.jpg"
    },
    {
        id: 17,
        name: "HiDon",
        sex: "child",
        age: 8,
        details: "Dù còn bé nhưng vẻ cute cộng thêm nét đẹp trai, dự đoán khi lớn lên cậu sẽ là một nam thần",
        price: 105000,
        homeTown: "America",
        img: "./img/products/17.jpg"
    },
];
document.addEventListener("DOMContentLoaded", function() {
    changeTab();
    setTimeout(function() {
        loadMore.style.display = "none";
    }, 5000);
})
//tab menu
var flagType = "female";
const search = $(".search");
function changeTab() {
    //set line original 
    line.style.left = tabActive.offsetLeft + "px";
    line.style.width = tabActive.offsetWidth + "px";
    //when click then tab is changed
    renderProducts(products, 'female');
    listItemLink.forEach((item, index) => {
        item.onclick = (e) => {
            //when click cart btn then cart is showed
            if (item.type !== "cart") {
                cartProduct.style.display = "none";
                optionPrice.style.display = "block"
            }else {
                cartProduct.style.display = "block";
                optionPrice.style.display = "none";
            }
            if (item.getAttribute("cate") === "search") {
                search.style.display = "block";
            }else {
                search.style.display = "none";
            }
            $(".header-item__link.active").classList.remove("active");
            e.preventDefault();
            line.style.left = listItemLink[index].offsetLeft + "px";
            line.style.width = listItemLink[index].offsetWidth + "px";
            listItemLink[index].classList.add("active");
            //output the appropriate data
            let typeProduct = item.getAttribute("type");
            flagType = typeProduct;
            renderProducts(products, typeProduct);
        }
    })
}
//render Product

function renderProducts(products, typeProduct) {
    var htmls = "";
    products.forEach((product, index) => {
        if (typeProduct === product.sex || typeProduct === "all") {
            htmls += `
                <div class="col-xs-12 col-sm-6 col-md-6 col-lg-3">
                    <div class="product">
                        <div class="img-product">
                            <img class="product-img" src=${product.img} alt="${product.name}">
                        </div>
                        <div class="info-product">
                            <h3 class="name-product">${product.name}</h3>
                            <span class="age">Tuổi: ${product.age}</span>
                            <span class="home-town">Quê Quán: ${product.homeTown}</span>
                            <div class="option">
                                <button type="button" class="btn buy-btn btn-sm" onclick="clickBuyBtn(${product.id})">Buy</button>
                                <button type="button" class="btn details-btn btn-sm" onclick="clickDetailsBtn(${product.id})">Details</button>
                            </div>
                            <span class="price">
                                Giá: ${product.price}$
                            </span>
                        </div>
                    </div>
                </div>
            `
        }
    })
    listProduct.innerHTML = htmls;
    var detailsBtn = $$(".details-btn");
}
const quantityProduct = $(".quantity-product");
let convertQuantity = Number(quantityProduct.innerHTML);
const toastMessage = $("#toat-mess");
const listCartProduct = $(".list-product__cart");
let totalPay;
//when click Buy btn
var cartListArray = [];
function clickBuyBtn(id) {
    //Tìm kiếm sản phẩm trùng id với sản phẩm đã click
    let cartItem = products.find(product => {
        return product.id === id;
    })
    //kiểm tra sản phẩm đã xuất hiện chưa
    let shownProduct = cartListArray.find(cartProduct => {
        return cartProduct.id === id;
    })
    //show toast message
    toastMessage.style.display = "block";
    //Nếu sản phẩm đã xuất hiện trong giỏ mà khách hàng vẫn click thì thông báo fail
    //nếu không tìm thấy thì mới render view
    if (shownProduct) {
        toastMessage.innerHTML = `
            <div class="toat-mess">
                <i class="fas fa-exclamation-circle fail-notify"></i>
                <div class="content-box">
                    <div class="">
                        <h3 class="toast-title">Product is Unique, You can't buy add</h3>
                        <p>Sản phẩm chỉ có duy nhất</p>
                    </div>
                    <div class="remove-icon" onclick="removeToast()">
                        <span>X</span>
                    </div>
                </div>
            </div>
        `
    }else {
        //when click btn cart then index is increased
        convertQuantity++;
        quantityProduct.innerHTML = convertQuantity;
        cartListArray.push(cartItem);
        
        renderCartList();
        toastMessage.innerHTML = `
            <div class="toat-mess">
                <i class="fas fa-check-circle success-notify"></i>
                <div class="content-box">
                    <div class="">
                        <h3 class="toast-title">Success, Product was added to cart</h3>
                        <p>Vui lòng vào giỏ hàng để kiểm tra</p>
                    </div>
                    <div class="remove-icon" onclick="removeToast()">
                        <span>X</span>
                    </div>
                </div>
            </div>
        `
    }
    setTimeout(() => {
        toastMessage.style.display = "none";
    }, 6000);
}

function totalMoney(productCart) {
    let total = 0;
    for (let i = 0; i < productCart.length; i++) {
        total += productCart[i].price;
    }
    return total;
}

//khi click vào nút remove toast thì xóa nó đi
function removeToast() {
    toastMessage.style.display = "none";
}
//render

function renderCartList() {
    var htmlsCart = '';
    cartListArray.forEach(function(item, index) {
        htmlsCart += `
            <div class="cart-product__item">
                <span class="remove-cart__product" onclick="removeCartProduct(${index})">X</span>
                <div class="cart-img">
                    <img src="${item.img}" alt="" class="cart-img__link">
                </div>
                <div class="cart-product__info">
                    <span class="cart-product__name">
                    ${item.name}
                    </span>
                    <span class="cart-product__age">
                    ${item.age} Tuổi
                    </span>
                    <span class="cart-product__homeTown">
                        Quê quán: ${item.homeTown}
                    </span>
                    <span class="cart-product__relationship">
                        Mối quan hệ: Độc thân   
                    </span>
                    <span class="cart-product__price">
                        Giá: ${item.price}   
                    </span>
                </div>
            </div>
        `
        listCartProduct.innerHTML = htmlsCart +
         `<button type="button" class="btn btn-info buy-all" onclick="buyAll()">Buy All</button>`;
    })
}


//click remove of cart product
listCartProduct.innerHTML = `
            <div class="cart-empty">
                <img src="./img/cartEmpty/cart-empty.png" alt="">
            </div>
        `
function removeCartProduct(index) {
    cartListArray.splice(index, 1);
    --convertQuantity;
    quantityProduct.innerHTML = convertQuantity;
    if (convertQuantity > 0) {
        renderCartList();
    }else {
        listCartProduct.innerHTML = `
            <div class="cart-empty">
                <img src="./img/cartEmpty/cart-empty.png" alt="">
            </div>
        `
    }
}

//slide
var slideIndex = 1;
showSlides(slideIndex);
function plusSlide(n) {
    showSlides(slideIndex += n);
}
function currentSilde(n) {
    showSlides(slideIndex = n);
}

setInterval(function() {
    slideIndex++;
    showSlides(slideIndex);
}, 3000)

function showSlides(n) {
    if (n > slides.length) {
        slideIndex = 1;
    }
    if (n < 1) {
        slideIndex = slides.length;
    }
    for (let slide of slides) {
        slide.style.display = "none";
    }

    for (let slideImage of slidesImage) {
        slideImage.classList.remove("active");
    }
    slides[slideIndex - 1].style.display = "block"; 
    slidesImage[slideIndex - 1].classList.add("active");
}



//Sort price when user click

let sortInsBtn = $(".sort-inc");
let sortDesBtn = $(".sort-des");

function sortIncClick() {
    sortInsBtn.classList.add("active");
    sortDesBtn.classList.remove("active");
    sortInc();
    renderProducts(products, flagType);
}

function sortDesClick() {
    sortInsBtn.classList.remove("active");
    sortDesBtn.classList.add("active");
    sortDes();
    renderProducts(products, flagType);
}

function sortInc() {
    for(let i = 0; i < products.length; i++) {
        for (let j = 0; j < products.length; j++) {
            if (products[i].price < products[j].price) {
                var tmp = products[i];
                products[i] = products[j];
                products[j] = tmp;
            }
        }
    }
}
function sortDes() {
    for(let i = 0; i < products.length; i++) {
        for (let j = 0; j < products.length; j++) {
            if (products[i].price > products[j].price) {
                var tmp = products[i];
                products[i] = products[j];
                products[j] = tmp;
            }
        }
    }
}

//When click to Buy button
const detailProduct = $(".detail-product__box");

var outer = $(".outer");

function clickDetailsBtn(id) {
    outer.style.display = "block";
    detailProduct.style.display = "block";
    renderDetailsProduct(id);
}

function clickDetailsOut() {
    outer.style.display = "none";
    detailProduct.style.display = "none";
}

function renderDetailsProduct(id) {
    //tìm sản phẩm đúng id để render ra màn hình
    let correctProduct = products.find((product, index) => {
        return product.id === id;
    })
    htmlsDetails = `
        <h3 class="detail-product__title">
            Thông tin Sản phẩm :
            <div class="details-out" onclick="clickDetailsOut()">X</div> 
        </h3>
        <div class="info-product__details">
            <div class="box-img__details">
                <img src="./img/products/${id}.jpg" alt="" class="img-detail">
            </div>
            <div class="info-product__box">
                <div class="info-product__name"><span>Name :</span> ${correctProduct.name}</div>
                <div class="info-product__name"><span>Age :</span> ${correctProduct.age}</div>
                <div class="info-product__name"><span>Home Town :</span> ${correctProduct.homeTown}</div>
                <div class="info-product__name"><span>Price :</span> ${correctProduct.price}$</div>
                <div class="info-product__name"><span>quantity :</span> 1</div>
                <div class="info-product__name"><span>Sex :</span> ${correctProduct.sex}</div>
                <div class="info-product__name"><span>Code :</span> ${id}</div>
                <div class="info-product__name"><span>Details :</span> ${correctProduct.details}</div>
            </div>
        </div>
    `
    detailProduct.innerHTML = htmlsDetails;
}

//option buy
let imgNotifyBuy;
let notifyText;
function buyFail() {
    imgNotifyBuy.src = "./img/cute-notify/cute-bye.gif";
    notifyText.innerHTML = "Buồn quá, bạn ghé shop chọn lại sản phẩm nha!";
    setTimeout(function () {
        buyAllBtn.style.display = "none";
    }, 3000)
}

function buySuccess() {
    imgNotifyBuy.src = "./img/cute-notify/say-thank.gif";
    notifyText.innerHTML = "Shop cảm ơn bạn nhiều nha <3, Vui lòng thanh toán sản phẩm đã mua";
    setTimeout(function () {
        buyAllBtn.style.display = "none";
    }, 2000)
}
let buyAllBtn = $(".buy-all__notify");
function buyAll() {
    totalPay = totalMoney(cartListArray);
    buyAllBtn.style.display = "block";
    $(".buy-all__notify").innerHTML = `
        <div class="notify-buy">
            <img src="./img/cute-notify/hinh-anh-dong-cute-vay-duoi_105546189.gif" alt="">
            <div class="notify-text">
                <p>bạn có chắc chắn sẽ mua không ?</br>
                Số tiền bạn phải trả là: ${totalPay}
                </p>
                <div class="option-buy">
                    <button type="button" class="btn btn-secondary" onclick="buyFail()">No</button>
                    <button type="button" class="btn btn-danger" onclick="buySuccess()">Course, I Buy</button>
                </div>
            </div>
        </div>
    `
    imgNotifyBuy = $(".notify-buy img");
    notifyText = $(".notify-text");
}

//click seach btn

function seachBtn() {
    const seachInputValue = $(".search-input").value;
    const productElement = $$(".product");
    let filter = seachInputValue.toUpperCase();
    var htmlsSearch = "";
    products.forEach((product) => {
        if (product.name.toUpperCase().indexOf(filter) > -1) {
            htmlsSearch += `
                <div class="col-xs-12 col-sm-6 col-md-6 col-lg-3">
                    <div class="product">
                        <div class="img-product">
                            <img class="product-img" src=${product.img} alt="${product.name}">
                        </div>
                        <div class="info-product">
                            <h3 class="name-product">${product.name}</h3>
                            <span class="age">Tuổi: ${product.age}</span>
                            <span class="home-town">Quê Quán: ${product.homeTown}</span>
                            <div class="option">
                                <button type="button" class="btn buy-btn btn-sm" onclick="clickBuyBtn(${product.id})">Buy</button>
                                <button type="button" class="btn details-btn btn-sm" onclick="clickDetailsBtn(${product.id})">Details</button>
                            </div>
                            <span class="price">
                                Giá: ${product.price}$
                            </span>
                        </div>
                    </div>
                </div>
            `
        }  
        if (htmlsSearch) {
            listProduct.innerHTML  = htmlsSearch;     
        }else {
            listProduct.innerHTML  = `
                <h2>No product found</h2>
            `
        }
    })
}

