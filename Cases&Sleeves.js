let container = document.getElementById("category-container");

// fetch("https://dbioz2ek0e.execute-api.ap-south-1.amazonaws.com/mockapi/get-tech-products")
// .then((res)=>{
//     return res.json();
// })
// .then((res)=>{
//     console.log(res)
//     display(res.data)
// })
let data = [
    {
        img: "https://images.dailyobjects.com/marche/tmp/phone-cases.png?tr=cm-pad_resize,v-2,w-160,h-160,dpr-1",
        category: "PHONE CASES"
    },
    {
        img: "https://images.dailyobjects.com/marche/icons/category/cases-sleeves-intermediate-image.jpg?tr=cm-pad_crop,v-2,w-160,h-160,dpr-1",
        category: "LAPTOP MACBOOK SLEEVES"
    },
    {
        img: "https://images.dailyobjects.com/marche/icons/category/airpod-case-cover-updated.jpg?tr=cm-pad_crop,v-2,w-160,h-160,dpr-1",
        category: "AIRPODS CASE COVER"
    },
    {
        img: "https://images.dailyobjects.com/marche/icons/category/ipad-new.png?tr=cm-pad_resize,v-2,w-160,h-160,dpr-1",
        category: "IPAD COVERS & SLEEVES New"
    },
    {
        img: "https://images.dailyobjects.com/marche/icons/category/passport.png?tr=cm-pad_resize,v-2,w-160,h-160,dpr-1",
        category: "PASSPORT WALLETS"
    },
    {
        img: "https://images.dailyobjects.com/marche/icons/category/eyewear-cases.png?tr=cm-pad_resize,v-2,w-160,h-160,dpr-1",
        category: "EYEWEAR CASES"
    },
    {
        img: "https://images.dailyobjects.com/marche/icons/category/airtag-category-icon.png?tr=cm-pad_resize,v-2,w-160,h-160,dpr-1",
        category: "AIRTAG CASES"
    }
]

let arr = JSON.parse(localStorage.getItem("products"))||[]
display(data)
function display(data) {
    container.innerHTML = "";
    data.forEach((element) => {
        let card = document.createElement("div");
        card.setAttribute = ("class", "card")
        let img = document.createElement("img");
        let h3 = document.createElement("h3");
        img.src = element.img;
        h3.textContent = element.category;
        container.append(card);
        card.append(img, h3)
        card.addEventListener("click", () => {
            arr.shift()
            arr.push(element.category)
            localStorage.setItem("products",JSON.stringify(arr))
            localStorage.removeItem("storedata")
            window.location.href = "./Cases&Sleevespproducts.html"
        })
    });
}
let logo = document.getElementById("logo")
logo.addEventListener("click", () => {
    window.location.href = "./index.html"
})


let cartcount = document.querySelector(".cartcount");

let cartdata = JSON.parse(localStorage.getItem("cartdata")) || [];
if (cartdata.length === 0) {
    cartcount.style.display = "none"
}
cartcount.innerText = cartdata.length;