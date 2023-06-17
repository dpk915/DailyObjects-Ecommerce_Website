//const { data } = require("cypress/types/jquery");

//const { data } = require("cypress/types/jquery")

let cartdata = JSON.parse(localStorage.getItem("cartdata")) || [];

let checkoutData = JSON.parse(localStorage.getItem("checkoutdata"))||[];
const baseurl = `http://127.0.0.1:9090/`
var x = "CHARGING-SOLUTIONS";
let lowstocks = 0;
let pending = document.getElementById("pending");
let checkout = document.getElementById("checkout")
pending.innerText = cartdata.length;

checkout.innerText = checkoutData.length;

var items = document.getElementById("items")
let totalstock = document.getElementById("zero stocks");
let lowstockcount = document.getElementById("low-stocks")
var category = document.getElementById("category")
let pcat = document.getElementById("pcat");
let productlist = document.getElementsByClassName("product-list");
let update = document.getElementById("update-product");

/////////////////////////////////////////////////
let id = document.getElementById("productu-id");
let pname1 = document.getElementById("productu-name");
let pdesc1 = document.getElementById("productu-description");
let price1 = document.getElementById("productu-price");
let quantity1 = document.getElementById("productu-quantity")
let image11 = document.getElementById("productu-image1")
let image21 = document.getElementById("productu-image2")
let image31 = document.getElementById("productu-image3")
let image41 = document.getElementById("productu-image4")
let cat1 = document.getElementById("category1")

/////////////////////////////////////////////////////////////



let pname = document.getElementById("product-name");
let pdesc = document.getElementById("product-description");
let price = document.getElementById("product-price");
let quantity = document.getElementById("product-quantity")
let image1 = document.getElementById("product-image1")
let image2 = document.getElementById("product-image2")
let image3 = document.getElementById("product-image3")
let image4 = document.getElementById("product-image4")
let form1 = document.querySelector("form")


category.addEventListener("change", () => {
        x = category.value;

        lowstockcount.innerText = lowstocks.length;
        pcat.innerText = `:-${x}`
        fetchdata(x)

    })
    //console.log(x)
fetchdata(x)





function fetchdata() {

    fetch(`${baseurl}${category.value}`)
        .then((res) => res.json())
        .then((data) => {
            // console.log(data)
            lowstocks = data.filter((el) => el.stock <= 50)
            lowstockcount.innerText = lowstocks.length;
            console.log(lowstocks)
            totalstock.innerText = data.length;
            append(data)

        })
        .catch((er) => {
            console.log(er)
        })
}




function append(data) {
    items.innerHTML = ""


    console.log(data)
    data.forEach(element => {



        var li = document.createElement("li");
        var div = document.createElement("div");
        var image = document.createElement("img");
        var div2 = document.createElement("div");
        var name = document.createElement("h3");
        var p1 = document.createElement("p")
        var p2 = document.createElement("p")
        var p3 = document.createElement("p")
        var edit = document.createElement("button");
        var del = document.createElement("button");
        div.setAttribute("class", "product")
        image.src = element.images[0];
        div2.setAttribute("class", "product-details");
        name.innerText = element.title;
        p1.innerText = `stock available :- ${element.stock}`;
        p2.innerText = `price:${element.price}`
        p3.innerText = element.category;
        edit.innerText = "EDIT";
        del.innerText = "DELETE"
        edit.addEventListener("click", () => {
            editdata(element)


        })
        del.addEventListener("click", () => {

            deleteProduct(element.id)
            fetchdata();
        })
        if (element.stock <= 50) {
            div.style.backgroundColor = "lightpink";
        } else if (element.stock > 50 && element.stock < 100) {
            div.style.backgroundColor = "#eced93";
        } else {
            div.style.backgroundColor = "lightgreen";
        }






        div2.append(name, p1, p2, p3, edit, del)
        div.append(image, div2);
        li.append(div)
        items.append(li)

    });
}

form1.addEventListener("submit", (e) => {
    e.preventDefault();
    let obj = {
        title: pname.value,
        description: pdesc.value,
        stock: Number(quantity.value),
        price: price.value,
        images: [image1.value, image2.value, image3.value, image4.value],
        category: category.value

    }
    console.log(obj)
    addProduct(obj)
    fetchdata()




})

async function addProduct(obj) {
    try {
        let productDetails = await fetch(`${baseurl}${category.value}`, {
            method: "POST",
            body: JSON.stringify(obj),
            headers: {
                "Content-Type": "application/json",
            },
        });
        if (productDetails.ok) {
            alert("Data Appended");
        }
    } catch (error) {
        alert("Bad Request");
    }
}

function editdata(obj1) {
    id.value = obj1.id;
    pname1.value = obj1.title;
    pdesc1.value = obj1.description;
    price1.value = obj1.price;
    quantity1.value = obj1.stock;
    image11.value = obj1.images[0];
    image21.value = obj1.images[1];
    image31.value = obj1.images[2];
    image41.value = obj1.images[3];
    // cat1.value = obj1.category;
}


update.addEventListener("submit", (e) => {
    e.preventDefault();
    let obj = {
        title: pname1.value,
        description: pdesc.value,
        stock: quantity1.value,
        price: price1.value,
        images: [image11.value, image21.value, image31.value, image41.value],
        category: cat1.value

    }
    console.log(obj)
        //append(x)

    editProduct(id.value, obj)
    fetchdata()
})


async function editProduct(id, data) {
    try {
        let x = await fetch(
            `${baseurl}${cat1.value}/${id}`, {
                method: "PUT",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(data),
            }
        );
        model.style.display = "none";
        window.location.reload();
        //displayTable();
    } catch (error) {
        console.log("Bad request");
    }
}

async function deleteProduct(id) {
    try {
        let x = await fetch(`${baseurl}${category.value}/${id}`, {
            method: "DELETE",
            headers: {
                "Content-Type": "application/json",
            },
        });

        window.location.reload();

    } catch (error) {
        console.log("Bad request for deleting");
    }
}