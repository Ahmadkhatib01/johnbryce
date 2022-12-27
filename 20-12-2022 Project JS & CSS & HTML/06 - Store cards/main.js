

const cardsContainer = document.getElementById('cardsContainer');
let products;
websiteInit();

const title = document.getElementById('productTitle');
console.log(title.value)
const titleError = document.getElementById('titleError');

const description = document.getElementById('productDesc');
const descError = document.getElementById('descError');

const price = document.getElementById('productPrice');
const priceError = document.getElementById('priceError');

const discount = document.getElementById('productDiscount');
const discountError = document.getElementById('discountError');

const stock = document.getElementById('productStock');
const stockError = document.getElementById('stockError');

const imgUrl = document.getElementById('productImgUrl');
const imgUrlError = document.getElementById('imgUrlError');

// Initialize website
function websiteInit() {
    if (localStorage.getItem('products')) {
        const strProducts = localStorage.getItem('products');
        products = JSON.parse(strProducts);
    } else {
        products = [];
    }

    drawCards();
    console.log("Website initialize...");
    console.log(products);
}

function validationErrors(obj) {
    // check for error
    titleError.innerHTML = obj.title ? '' : 'Please fill the title';
    descError.innerHTML = obj.description ? '' : 'Please fill the description';
    priceError.innerHTML = obj.price ? '' : 'Please fill the price';
    stockError.innerHTML = obj.stock ? '' : 'Please fill the stock';
    discountError.innerHTML = obj.discount ? '' : 'Please fill the discount';
    imgUrlError.innerHTML = obj.imgUrl ? '' : 'Please fill the image url';
    if (!obj.title || !obj.description || !obj.price || !obj.stock || !obj.discount || !obj.imgUrl) {
        return false;
    } else {
        return true;
    }
}

function clearForm() {
    // clean form
    title.value = '';
    description.value = '';
    price.value = '';
    discount.value = '';
    stock.value = '';
    imgUrl.value = '';

    // clean errors
    titleError.innerHTML = '';
    descError.innerHTML = '';
    priceError.innerHTML = '';
    stockError.innerHTML = '';
    discountError.innerHTML = '';
    imgUrlError.innerHTML = '';

    cardsContainer.innerHTML = '';
}

function getFormValues() {
    return {
        title: title.value,
        description: description.value,
        price: price.value,
        discount: discount.value,
        stock: stock.value,
        imgUrl: imgUrl.value
    }
}

function addProductToLocalStorage(product) {
    products.push(product);
    const stringifyProduct = JSON.stringify(products);
    localStorage.setItem('products', stringifyProduct);
}

function addNewProduct() {
    const newProduct = getFormValues();
    const validation = validationErrors(newProduct);
    if (validation) {
        addProductToLocalStorage(newProduct)
        clearForm();
        websiteInit();
    }
}


function drawCards() {
    for (const item of products) {
        const cardBox = document.createElement('div');

        const cardTitle = document.createElement('h2');
        const cardDesc = document.createElement('p');
        const cardPrice = document.createElement('p');
        const cardDiscount = document.createElement('p');
        const cardStock = document.createElement('p');
        const cardImg = document.createElement('img');

        cardTitle.innerHTML = item.title;
        cardDesc.innerHTML = item.description;
        cardPrice.innerHTML = item.price;
        cardDiscount.innerHTML = item.discount;
        cardStock.innerHTML = item.stock;
        cardImg.src = item.imgUrl;

        cardBox.appendChild(cardImg);
        cardBox.appendChild(cardTitle);
        cardBox.appendChild(cardDesc);
        cardBox.appendChild(cardPrice);
        cardBox.appendChild(cardDiscount);
        cardBox.appendChild(cardStock);

        cardsContainer.appendChild(cardBox);
    }
}


