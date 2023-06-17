// let data =  [
//     {
//         "id": 1,
//         "sub-category": "iPhone 14",
//         "title": "Nimbus Phone Case Cover For iPhone 14",
//         "price": 1999,
//         "discountPercentage": 12.96,
//         "description":"A minimally quilted laptop sleeve with light padding, Siesta is safe to carry by hand for short, comfortable excursions or can be slipped inside your backpacks or tote bags for longer day-outs. It features a one of a kind built with unconventional and eye-catching artworks, exhibiting a bold expression of individuality.",
//         "stock": 94,
//         "brand": "Apple",
//         "category": "phone cases",
//         "thumbnail": "https://images.dailyobjects.com/marche/product-images/1101/slick-phone-case-cover-for-iphone-14-images/Nimbus-Phone-Case-Cover-For-iPhone-14-2.png?tr=cm-pad_resize,v-2,w-352,h-434,dpr-1",
//         "images": [
//             "https://images.dailyobjects.com/marche/product-images/1101/numbus-frosted-phone-case-cover-for-samsung-galaxy-z-fold-4-images/Nimbus-Frosted-Phone-Case-Cover-For-Samsung-Galaxy-Z-Fold-4.png?tr=cm-pad_resize,v-2,w-768,h-664,dpr-1",
//             "https://images.dailyobjects.com/marche/product-images/1101/numbus-frosted-phone-case-cover-for-samsung-galaxy-z-fold-4-images/Nimbus-Frosted-Phone-Case-Cover-For-Samsung-Galaxy-Z-Fold-4-1.png?tr=cm-pad_resize,v-2,w-768,h-664,dpr-1",
//             "https://images.dailyobjects.com/marche/product-images/1101/numbus-frosted-phone-case-cover-for-samsung-galaxy-z-fold-4-images/Nimbus-Frosted-Phone-Case-Cover-For-Samsung-Galaxy-Z-Fold-4-2.png?tr=cm-pad_resize,v-2,w-768,h-664,dpr-1",
//             "https://images.dailyobjects.com/marche/product-images/1101/numbus-frosted-phone-case-cover-for-samsung-galaxy-z-fold-4-images/Nimbus-Frosted-Phone-Case-Cover-For-Samsung-Galaxy-Z-Fold-4-3.png?tr=cm-pad_resize,v-2,w-768,h-664,dpr-1",
//             "https://images.dailyobjects.com/marche/product-images/1101/numbus-frosted-phone-case-cover-for-samsung-galaxy-z-fold-4-images/Nimbus-Frosted-Phone-Case-Cover-For-Samsung-Galaxy-Z-Fold-4-4.png?tr=cm-pad_resize,v-2,w-768,h-664,dpr-1"
//         ]
//     }
// ]
  
let data = JSON.parse(localStorage.getItem("single-data"))||[];
let Data = JSON.parse(localStorage.getItem("recently-viewed"))||[];

let cartData = JSON.parse(localStorage.getItem("cartdata"))||[];

console.log(data)
  let slide = document.getElementById("slide");
  let btn1 = document.getElementById("btn1");
  let btn2 = document.getElementById("btn2");
  
//   slide.style.width = "350px";
//   slide.style.height = "250px";
  let i = 0;
  slide.src = data[0].images[i];
  
  btn2.onclick = () => {
    i++;
    if (i > data[0].images.length - 1) {
      i = 0;
    }
    slide.src = data[0].images[i];
  };
  
  btn1.onclick = () => {
    i--;
    if (i < 0) {
      i = data[0].images.length - 1;
    }
    slide.src = data[0].images[i];
  };
  
  btn1.addEventListener("click", () => {
    slide.classList.add("transition");
  });
  btn1.addEventListener("mouseup", () => {
    slide.classList.remove("transition");
  });
  btn2.addEventListener("click", () => {
    slide.classList.add("transition");
  });
  btn2.addEventListener("mouseup", () => {
    slide.classList.remove("transition");
  });
  let container = document.getElementById("detail-card");

  display(data)
  function display(data){
    data.forEach((element) => {
        let card = document.createElement("div");
        card.setAttribute("class","card")

        let name = document.createElement("p");
        name.setAttribute("class","name")

        let pricediv = document.createElement("div")
        let price = document.createElement("span");
        priceRemove = document.createElement("span");

        taxline = document.createElement("span");

        let AddCart =document.createElement("button")
        AddCart.setAttribute("class","cartBtn")

        let h3 = document.createElement("h3")

        let p = document.createElement("p");

        let pincode = document.createElement("input");
        let checkbutton = document.createElement("button");
        checkbutton.setAttribute("class","checkbutton")

        let productDetails = document.createElement("div")
        let details = document.createElement("p");

        let productSpecifications = document.createElement("div")
        let Specifications = document.createElement("p");

        let productDelivery = document.createElement("div")
        let Delivery = document.createElement("p");

        details.textContent = "Product Details";
        Specifications.textContent = "Specifications";
        Delivery.textContent = "Delivery & Returns";
        p.textContent = "*FREE DUFFLE BAG ON ORDERS ABOVE Rs.2999 / FREE KEYCHAIN SET ON ORDERS ABOVE Rs.1999";
        h3.textContent = "EXCITING OFFERS";
        name.textContent = element.name;
        priceRemove.textContent = element.price+850;
        taxline.textContent = "Inclusive of all taxes";
        price.textContent = `Rs.${element.price}`;

        taxline.setAttribute("class","span3")
        priceRemove.setAttribute("class","span1") 
        price.setAttribute("class","span2")
        pricediv.setAttribute("class","pricediv")
        AddCart.textContent = "ADD TO CART";
        pincode.setAttribute("placeholder","Enter Pincode To Check Delivery");
        checkbutton.textContent = "CHECK";

        AddCart.addEventListener("click",()=>{
          if(checkduplicate(element)){
            alert("product already added in cart");
          }
          else{
            cartData.push({...element,qty:1});
            localStorage.setItem("cartdata",JSON.stringify(cartData));
            alert("product successfully added to cart")
            window.location.reload()
          }
        })

        productDetails.append(details);
        productSpecifications.append(Specifications);
        productDelivery.append(Delivery);
        pricediv.append(price,priceRemove,taxline)
        card.append(name,pricediv,AddCart,h3,p,pincode,checkbutton,productDetails,productSpecifications,productDelivery)
        container.append(card)
    });
  }
  let cont1 = document.getElementById("products-1")
  displayRecentData(Data)

  function displayRecentData(Data){
      Data.forEach((element) => {  
      let card = document.createElement("div");
      let img = document.createElement("img");
      let name = document.createElement("p");
      name.setAttribute("class","hidden")
      let price = document.createElement("h4");
      img.src = element.img;
      name.textContent = element.name;
      price.textContent = `Rs.${element.price}`;
      card.addEventListener("click",()=>{
        let obj = {}
        obj.name = element.name;
        obj.img = element.img;
        obj.price = element.price;
        obj.images = element.images;
        obj.id = element.id;
        let arr =[];
        arr.push(obj);
        localStorage.setItem("single-data",JSON.stringify(arr))
        location.reload()
    })
      cont1.append(card);
      card.append(img,name,price)
      });
      
  }
  
  function checkduplicate(element){
    for(let i=0;i<cartData.length;i++){
      if(cartData[i].name===element.name){
        return true;
      }
    }
    return false;
  }


  let logo = document.getElementById("logo")
    logo.addEventListener("click",()=>{
        window.location.href="./index.html"
    })



    let cartcount = document.querySelector(".cartcount");
    
    let cartdata = JSON.parse(localStorage.getItem("cartdata")) || [];
    if (cartdata.length === 0) {
        cartcount.style.display = "none"
    }
    cartcount.innerText = cartdata.length;