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
        img: "https://images.dailyobjects.com/marche/corporate-page/corporate-gifting.jpg?tr=cm-pad_crop,v-2",
        category: " GIFT CARDS "
    },
    {
        img: "https://images.dailyobjects.com/marche/assets/images/other/gifting-page_mobile-thumbnail.png?tr=cm-pad_resize,v-2",
        category: "BEST SELLERS"
    },
    {
        img: "https://images.dailyobjects.com/marche/corporate-page/gifts-by-personas-2.jpg?tr=cm-pad_crop,v-2",
        category: "GIFTS BY BUDGET "
    },
    {
        img: "https://images.dailyobjects.com/marche/corporate-page/gifts-by-budget-2.jpg?tr=cm-pad_crop,v-2",
        category: "GIFTS BY PERSONA"
    },
    {
        img: "https://images.dailyobjects.com/marche/corporate-page/best-sellers-2.jpg?tr=cm-pad_crop,v-2",
        category: "HOLIDAY GIFTING BUNDLES"
    },
    {
        img: "https://images.dailyobjects.com/marche/assets/images/other/gift-cards-thumbnail.jpg?tr=cm-pad_crop,v-2",
        category: "CORPORATE GIFTING"
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