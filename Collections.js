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
        img: "https://images.dailyobjects.com/marche/icons/blog-logo-14.png?tr=cm-pad_resize,v-2,w-160,h-160,dpr-1",
        category: " STUDIO "
    },
    {
        img: "https://images.dailyobjects.com/marche/icons/filter/filtericon-love.jpg?tr=cm-pad_crop,v-2,w-160,h-160,dpr-1",
        category: "LOVE PACK COLLECTION"
    },
    {
        img: "https://images.dailyobjects.com/marche/colllectionPage/zootopia/smartster-collection-icon.png?tr=cm-pad_resize,v-2,w-160,h-160,dpr-1",
        category: "DO X SMARTSTERS "
    },
    {
        img: "https://images.dailyobjects.com/marche/icons/recess-collection-icon.jpg?tr=cm-pad_crop,v-2,w-160,h-160,dpr-1",
        category: "RECESS COLLECTION"
    },
    {
        img: "https://images.dailyobjects.com/marche/icons/filter/collection-icon.jpg?tr=cm-pad_crop,v-2,w-160,h-160,dpr-1",
        category: "08:01 COLLECTION"
    },
    {
        img: "https://images.dailyobjects.com/marche/icons/category/platrorm-desk-collection.png?tr=cm-pad_resize,v-2,w-160,h-160,dpr-1",
        category: "PLATFORM COLLECTION"
    },
    {
        img: "https://images.dailyobjects.com/marche/icons/category/fleetcollection-collection-menu-icon.png?tr=cm-pad_resize,v-2,w-160,h-160,dpr-1",
        category: "TARP COLLECTION"
    },
    {
        img: "https://images.dailyobjects.com/marche/icons/filter/tarp-collection-filter-icon.jpg?tr=cm-pad_crop,v-2,w-160,h-160,dpr-1",
        category: "FLEET COLLECTION"
    },
    {
        img: "https://images.dailyobjects.com/marche/colllectionPage/claymen/clayman-collection-page-icon.jpg?tr=cm-pad_crop,v-2,w-160,h-160,dpr-1",
        category: "CLAYMEN COLLECTION"
    }
]
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
            localStorage.setItem("products", JSON.stringify(data))
            window.location.href = "./productlist.html"
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