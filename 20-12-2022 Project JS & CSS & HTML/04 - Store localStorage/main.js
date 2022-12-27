

let products;
websiteInit();

// Initialize website
function websiteInit() {
    if (localStorage.getItem('products')) {
        const strProducts = localStorage.getItem('products');
        products = JSON.parse(strProducts);
    } else {
        products = [];
    }
    console.log("Website initialize...");
    console.log(products);
}



function clearForm() {
    document.getElementById('productTitle').value = '';
    document.getElementById('productDesc').value = '';
    document.getElementById('productPrice').value = '';
    document.getElementById('productDiscount').value = '';
    document.getElementById('productStock').value = '';
    document.getElementById('productImgUrl').value = '';
}

function getFormValues() {
    const title = document.getElementById('productTitle').value;
    const description = document.getElementById('productDesc').value;
    const price = document.getElementById('productPrice').value;
    const discount = document.getElementById('productDiscount').value;
    const stock = document.getElementById('productStock').value;
    const imgUrl = document.getElementById('productImgUrl').value;

    return {
        title,
        description,
        price,
        discount,
        stock,
        imgUrl
    }
}

function addProductToLocalStorage(product) {
    products.push(product);
    const stringifyProduct = JSON.stringify(products);
    localStorage.setItem('products', stringifyProduct);
}

function addNewProduct() {
    const newProduct = getFormValues();
    addProductToLocalStorage(newProduct)
    clearForm();
}



