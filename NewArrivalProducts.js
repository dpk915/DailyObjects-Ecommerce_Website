let container = document.getElementById("Products-container");
let h2 = document.querySelector("h2");
let y = JSON.parse(localStorage.getItem("products"))||[]
let x = y[y.length-1]

h2.innerText = x;
let bag = "";
for(let i=0;i<x.length;i++){
    if(x[i]==" "){
        bag+="-";
    }
    else{
        bag+=x[i];
    }
}
console.log(bag)
fetch(`http://127.0.0.1:9090/${bag}`)
.then((res)=>{
    return res.json();
})
.then((res)=>{
    display(res);

    localStorage.setItem("storedata",JSON.stringify(res))
})
function display(data){
    data.forEach((element) => {  
    let card = document.createElement("div");
    let img = document.createElement("img");
    let name = document.createElement("p");
    let pricediv = document.createElement("div")
    let price = document.createElement("span");
    priceRemove = document.createElement("span");
    priceRemove.textContent = element.price+850;
    price.textContent = `Rs.${element.price}`;
    priceRemove.setAttribute("class","span1") 
    price.setAttribute("class","span2")
    pricediv.setAttribute("class","pricediv")
    img.src = element.thumbnail;
    name.textContent = element.title;
    price.textContent = `Rs.${element.price}`;
    pricediv.append(price,priceRemove)
    container.append(card);
    card.append(img,name,pricediv)
    card.addEventListener("click",()=>{
        let obj = {}
        obj.name = element.title;
        obj.img = element.thumbnail;
        obj.price = element.price;
        obj.images = element.images;
        obj.id = element.id;
        let arr =[];
        let recentArr = JSON.parse(localStorage.getItem("recently-viewed"))||[];
        if(recentArr.length===12){
            recentArr.shift();
        }
        recentArr.push(obj);
        arr.push(obj);
        localStorage.setItem("single-data",JSON.stringify(arr))
        localStorage.setItem("recently-viewed",JSON.stringify(recentArr))
        window.location.href = "./single-product-page.html"
    })
    });
    
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



    fetch(`http://127.0.0.1:9090/CHARGING-SOLUTIONS-CATEGORY`)
    .then((res) => {
        return res.json();
    })
    .then((res) => {

        let filterdata=res[`${bag}`];

        console.log(filterdata)
        displaycategory(filterdata)
    })



let filterEl = document.querySelector("#filter-div");
function displaycategory(data){
    data.forEach((element)=>{
    let filterCard = document.createElement("div");
    let image = document.createElement("img");
    image.src = element.image;

    let name = document.createElement("p");
    name.textContent = element.name;

    filterCard.append(image,name)

    filterEl.append(filterCard)

    filterCard.addEventListener("click",()=>{
    
        console.log(element.name);

        filterproduct(element.name)

        
    //     if(filterCard.value==="ALL"){
    //         display(storedata)
    //     }
    //     else{
    
    //         let filteredData = storedata.filter((element) => {
    //             if (element.sub-category === filterCard.value) {
    //                 return true;
    //             }
    //             else{
        
    //                 return false;
    //             }
    //         })
    
    //         display(filteredData);
    //     }
        
    
        
    })

    })
    
}


function filterproduct(cardvalue){

    
    let storedata = JSON.parse(localStorage.getItem("storedata"))||[];

    console.log(storedata)
        if(cardvalue==="ALL"){
            display(storedata)
        }
        else{

            let filteredData = storedata.filter((element) => {

                console.log(element.type)
                
                if (element.type === cardvalue) {
                    return true;
                }
                else{
        
                    return false;
                }
            })
    
            display(filteredData);
        } 
        
        
    

}