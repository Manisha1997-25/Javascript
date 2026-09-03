const NameInputElmt = document.querySelector("#NameInput")
const descriptionInputElmt = document.querySelector("#descriptionInput")
const priceInputElmt = document.querySelector("#priceInput")
const imagePathInputElmt = document.querySelector("#imagePathInput")
const addNewbtnElmt = document.querySelector("#addNewbtn")
const renderProductsElmt = document.querySelector("#renderProducts")
const renderCartElmt = document.querySelector("#renderCart")
const amtDetailsElmt = document.querySelector("#amtDetails")

const Products = []
const Cart = []

function getProductsFromLocal() {
    return JSON.parse(localStorage.getItem("Products"))
}

function getCartFromLocal() {
    return JSON.parse(localStorage.getItem("Cart"))
}

function saveTOLocalProducts(p = Products) {
    localStorage.setItem("Products", JSON.stringify(p))
}

function saveTOLocalCart(c) {
    localStorage.setItem("Cart", JSON.stringify(c))
}

function addNewProducts() {
    const newProduct = {
        id: Date.now(),
        name: NameInputElmt.value,
        description: descriptionInputElmt.value,
        price: Number(priceInputElmt.value),
        imgPath: imagePathInputElmt.value
    }
    const prodFromLocal = getProductsFromLocal()
    prodFromLocal.push(newProduct)
    saveTOLocalProducts(prodFromLocal)
    
    NameInputElmt.value = ''
    descriptionInputElmt.value = ''
    priceInputElmt.value = ''
    imagePathInputElmt.value = ''

    renderProducts()

}

if(addNewbtnElmt){
addNewbtnElmt.addEventListener("click", addNewProducts)
}

function renderProducts() {
    if(!renderProductsElmt){
        return
    }
    const prodFromLocal = getProductsFromLocal()

    renderProductsElmt.innerHTML = prodFromLocal.map((prod) => `
                                <div class="col-12 col-md-6 col-lg-3">
                                    <div class="card" style="width: 18rem;">
                                        <img src=${prod.imgPath} class="card-img-top" alt="...">
                                        <div class="card-body">
                                            <h5 class="card-title">${prod.name}</h5>
                                            <p class="card-text">${prod.description}</p>
                                            <button id="like-${prod.id}" class="btn btn-danger me-4" onclick="toggleLike(${prod.id})">
                                            <i class="fa-regular fa-heart"></i> Like <button>
                                            <button class="btn btn-primary ms-4" onclick="addToCart(${prod.id})">Add to Cart</button>
                                        </div>
                                    </div>
                                </div>
    `).join("")
}

function addToCart(ID){
    const prodFromLocal = getProductsFromLocal()
    const cartFromLocal = getCartFromLocal()

    index = prodFromLocal.findIndex((p)=> p.id == ID)
    if(index == -1){
        alert("Product not available")
        return
    }

    const existingProdCartIndex = cartFromLocal.findIndex((p)=>p.prodID == ID)
    if(existingProdCartIndex != -1){
        cartFromLocal[existingProdCartIndex].quantity += 1
        saveTOLocalCart(cartFromLocal)
        renderCart()
        return
    }
    
    const prodForCart = prodFromLocal.find(p=> p.id == ID)
    const prod = {
        id : Date.now(),
        prodID : prodForCart.id,
        name : prodForCart.name,
        price : prodForCart.price,
        quantity : 1
    }
    cartFromLocal.push(prod)
    saveTOLocalCart(cartFromLocal)
    
    renderCart()


}

function toggleLike(productId) {

            let likeBtn = document.querySelector("#like-" + productId);

            if (likeBtn.classList.contains("btn-danger")) {

                // Unlike
                likeBtn.classList.remove("btn-danger");
                likeBtn.classList.add("btn-outline-danger");

                likeBtn.innerHTML = "♡ Like";

            } else {

                // Like
                likeBtn.classList.remove("btn-outline-danger");
                likeBtn.classList.add("btn-danger");

                likeBtn.innerHTML = "♥ Liked";

            }
        }

function renderCart(){
    let cartFromLocal = getCartFromLocal()
    const isAllAvailProducts = cartFromLocal.every((p)=>p.quantity > 0)
    if(!isAllAvailProducts){
        cartFromLocal = cartFromLocal.filter((p)=>p.quantity > 0)
        
    }
    document.querySelector("#cartLength").textContent = cartFromLocal.length
    renderCartElmt.innerHTML =cartFromLocal.map((p, i)=>`
                            <tr>
                                <th scope="row">${i+1}</th>
                                <td>${p.name}</td>
                                <td>${p.price}</td>
                                <td>
                                    <button class="btn btn-secondary" onclick="decrementProdQuantity(${p.id})">-</button>
                                    <span>${p.quantity}</span>
                                    <button class="btn btn-secondary" onclick="incrementProdQuantity(${p.id})">+</button>
                                </td>
                            </tr> 
    `).join("")

    let TotalAmount = cartFromLocal.reduce((tAmt, p, i)=>{
       return tAmt += (p.price * p.quantity)
    },0)
    let delCharges = 30
    let handCharges = 50
    let cartAmt = 0
    if(cartFromLocal.length>0){
    cartAmt = TotalAmount + delCharges + handCharges
    }
    if(amtDetailsElmt)
    amtDetailsElmt.innerHTML = `
                            <p>Total Amount &#8377 <i>${TotalAmount}</i></p>
                            <p>Delievery Charges &#8377 <i>${delCharges}</i></p>
                            <p>Delievery Charges &#8377 <i>${handCharges}</i></p>
                            <p>Cart Amount &#8377 <i>${cartAmt}</i></p>
    ` 
    else{
        amtDetailsElmt.innerHTML = `
                                <div>
                                    <h1 class="text-center">Your Cart is Empty</h1>
                                </div>
        `
    } 
            
}

function decrementProdQuantity(ID){
    const cartFromLocal = getCartFromLocal()
    const index = cartFromLocal.findIndex(p=>p.id == ID)
    
    // if (index == -1) {
    //     return;
    // }

    // // Don't allow quantity below 1
    if (cartFromLocal[index].quantity > 1) {
    //      cartFromLocal[index].quantity -= 1
    cartFromLocal[index].quantity--
    saveTOLocalCart(cartFromLocal)
    renderCart()

    }else {// Optional: remove product when quantity reaches 0
        cartFromLocal.splice(index, 1)
    // // }
    saveTOLocalCart(cartFromLocal)
    renderCart()
    }
}

function incrementProdQuantity(ID){
    const cartFromLocal = getCartFromLocal()
    const index = cartFromLocal.findIndex(p=>p.id == ID)
    if (index == -1) {
        return;
    }

    cartFromLocal[index].quantity += 1;

    
    saveTOLocalCart(cartFromLocal)
    renderCart()
}
window.addEventListener("load", () => {
    prodFromLocal = getProductsFromLocal()
    cartFromLocal = getCartFromLocal()
    if (!prodFromLocal){
        saveTOLocalProducts(Products)
        prodFromLocal = Products
    }
     if(!cartFromLocal){
        saveTOLocalCart(Cart)
        cartFromLocal = Cart
     } 
    
     document.querySelector("#cartLength").textContent = cartFromLocal.length
    
    if(renderProductsElmt){
     renderProducts()
     }

     if(renderCartElmt){
        renderCart()
     }
})


