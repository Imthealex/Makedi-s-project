let cart = document.querySelector('.cart');
let closecart = document.querySelector('.close')
let body = document.querySelector('body');
let listproductHTML = document.querySelector('.listproduct');
let listcartHTML = document.querySelector('.listCart');
let cartspan = document.querySelector('.cart span');
let listproduct = [];
let carts = [];

function myFunction() {
  document.getElementById("myDropdown").classList.toggle("show");
}

// Close the dropdown menu if the user clicks outside of it
window.onclick = function(event) {
  if (!event.target.matches('.dropbtn')) {
    var dropdowns = document.getElementsByClassName("dropdown-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
}

cart.addEventListener('click', ()=> {
   body.classList.toggle('showCart')
});
closecart.addEventListener('click', ()=> {
   body.classList.toggle('showCart')
});

const adddataToHTML = () =>{
  listproductHTML.innerHTML = '';
  if(listproduct.length > 0){
    listproduct.forEach(product=>{
      let newProduct = document.createElement('div');
      newProduct.classList.add('eat');
      newProduct.dataset.id = product.id;
      newProduct.innerHTML = 
      `
       <img src="${product.image}" alt="">
       <h3>${product.name}</h3>
       <div class="description">${product.decription}</div>
       <div class="Cprice">
       sh.${product.price}
       </div>
       <button class="addCart">Add Cart</button>
      `
      listproductHTML.appendChild(newProduct);
    })
  }
}
listproductHTML.addEventListener('click',(event) => {
let positionClick = event.target;
if(positionClick.classList.contains('addCart')){
  let product_id = positionClick.parentElement.dataset.id;
  addToCart(product_id);
}
})
const addToCart = (product_id) => {
  let positionProductincart = carts.findIndex((value) => value.product_id == product_id);
  if(carts.length <= 0){
    carts =[{
     product_id:product_id,
     quantity:1
    }]
  }else if(positionProductincart < 0){
    carts.push({
      product_id:product_id,
      quantity:1
    });
  }else{
    carts[positionProductincart].quantity = carts[positionProductincart].quantity + 1;
  }
  addcartToHTML();
  addcartTomemory();
  }
  const addcartTomemory = () =>{
    localStorage.setItem('cart',JSON.stringify(carts));
  }
  const addcartToHTML = () =>{
    listcartHTML.innerHTML = '';
    let totalQuantity = 0;
    if(carts.length > 0){
      carts.forEach(cart => {
        totalQuantity = totalQuantity + cart.quantity;
        let newCart = document.createElement('div');
        newCart.classList.add('eat');
        newCart.dataset.id = cart.product_id;
        let positionProduct = listproduct.findIndex((value) => value.id == cart.product_id);
        let info = listproduct[positionProduct];
        newCart.innerHTML = 
        `
        <img src="https://cdn-icons-png.flaticon.com/512/2541/2541030.png" alt="">
     </div>
     <div class="name">
      ${info.name}
     </div>
     <div class="TPrice">
      sh.${info.price * cart.quantity}
     </div>
     <div class="quantity">
       <span class="minus"> < </span>
       <span> ${cart.quantity} </span>
       <span class="plus"> > </span>
        `
        listcartHTML.appendChild(newCart);
      })
    }
    cartspan.innerText = totalQuantity;
  }
  listcartHTML.addEventListener('click',(event) => {
    let positionClick = event.target;
    if(positionClick.classList.contains('minus') || positionClick.classList.contains('plus')){
      let product_id = positionClick.parentElement.parentElement.dataset.id;
      let type = 'minus';
      if(positionClick.classList.contains('plus')){
        type = 'plus';
      }
      ChangeQuantity(product_id, type);
    }
    })
    const ChangeQuantity = (product_id, type) => {
      let positioniteminCart = carts.findIndex((value) => value.product_id == product_id);
      if(positioniteminCart >= 0){
        switch(type){
          case 'plus':
            carts[positioniteminCart].quantity = carts[positioniteminCart].quantity + 1;
            break;

          default:
            let valueChange = carts[positioniteminCart].quantity - 1;
            if(valueChange > 0){
              carts[positioniteminCart].quantity = valueChange;
            }else{
              carts.splice(positioniteminCart, 1);
            }
            break;
        }
      }
      addcartTomemory();
      addcartToHTML();
    }
 
const initApp = () => {
  fetch('prodig.json')
  .then(Response => Response.json()) 
  .then(data => {
    listproduct = data;
    adddataToHTML();

    if(localStorage.getItem('cart')){
      carts = JSON.parse(localStorage.getItem('cart'));
      addcartToHTML();
    }
  })
}
initApp();
