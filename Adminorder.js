let cartdata = JSON.parse(localStorage.getItem("cartdata")) || [];

let checkoutData = JSON.parse(localStorage.getItem("checkoutdata"))||[];

console.log(cartdata)
console.log(checkoutData)

let tbody = document.querySelector("#t1")

let tbody2 = document.querySelector("#t2")


dataappend(cartdata)

checkoutappend(checkoutData)

function dataappend(array) {
    tbody.innerHTML = "";
    array.forEach(element => {
        let row = document.createElement("tr");
        row.style.backgroundColor = "lightyellow";
        row.style.color = "darkblack"
        let c1 = document.createElement("td");
        let c2 = document.createElement("td");
        let c3 = document.createElement("td");
        let c4 = document.createElement("td");
        c1.innerText = element.id;
        c2.innerText = element.name
        c3.innerText = element.qty;
        c4.innerText = "pending for payment"
        row.append(c1, c2, c3, c4)
        tbody.append(row)

    });
}

function checkoutappend(array) {
    tbody2.innerHTML = "";
    array.forEach(element => {
        let row = document.createElement("tr");
        row.style.backgroundColor = "lightgreen"
        row.style.color = "darkblack"
        let c1 = document.createElement("td");
        let c2 = document.createElement("td");
        let c3 = document.createElement("td");
        let c4 = document.createElement("td");
        c1.innerText = element.id;
        c2.innerText = element.name
        c3.innerText = element.qty;
        c4.innerText = "pending for delivery"
        row.append(c1, c2, c3, c4)
        tbody2.append(row)

    });
}