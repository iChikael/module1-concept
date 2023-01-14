function click_btn() {
	alert("Hello");
}

let curDate = new Date();
let time = curDate.getHours();

function example1() {
	if (time < 10) {
		greeting = "Good morning";
	} else if (time < 20) {
		greeting = "Good day";
	} else {
		greeting = "Good evening";
	}
	alert(greeting);
}

function example2() {
	switch (new Date().getDay()) {
		case 0:
			day = "Chủ Nhật";
			break;
		case 1:
			day = "Thứ hai";
			break;
		case 2:
			day = "Thứ ba";
			break;
		case 3:
			day = "Thứ tư";
			break;
		case 4:
			day = "Thứ năm";
			break;
		case 5:
			day = "Thứ sáu";
			break;
		case 6:
			day = "Thứ bảy";
			break;
	}
	alert(day);
}

function example5() {
	for (let i = 1; i <= 3; i++)
		alert(i);
}


function example6() {
	let arr = [4, 5, 6];
	arr.forEach(function (element) {
		alert(element);
	});
}


function example7() {
	let i = 1;
	while (i <= 3) {
		alert(i);
		i++;
	}
}

function example8() {
	let i = 1;
	do {
		alert(i);
		i++;
	}
	while (i <= 3);
}


function example9() {
	let A = +prompt('Nhập diểm Hóa');
	let B = +prompt('Nhập điểm Lý');
	let C = +prompt('Nhập điểm Sinh');
	let R = (A + B + C) / 3;
	alert("Điểm trung bình là: " + R);
}


function example10() {
	let number = +prompt('Nhập số cần kiểm tra');
	{
		if (number < 2) {
			return alert("Số nhập vào không phải số nguyên tố");
		}
		for (let i = 2; i < number; i++) {
			if (number % i === 0) {
				return alert("Số nhập vào không phải số nguyên tố");
			}
		}
		return alert("Số nhập vào là số nguyên tố");
	}
}


class Item {
    constructor(name, price, quantity) {
        this.name = name;
        this.price = price;
        this.quantity = quantity;
    }
}
let bill = [
    new Item("Sony Xperia", 5000000, 100),
    new Item("Samsung Galaxy", 7000000, 200),
    new Item("Nokia 6", 4500000, 50),
    new Item("Apple iPhone 6s", 5000000, 15),
    new Item("Xiaomi Mi 5s Plus", 2500000, 10),
    new Item("Apple iPhone 8 Plus", 12000000, 20),
    new Item("HTC One", 12500000, 50)
]

function renderBill() {
    let tbBill = document.getElementById("tbBill");
    tbBill.innerHTML = "";
    for (let i = 0; i < bill.length; i++) {
        tbBill.innerHTML += `
        <tr>
            <td>${bill[i].name}</td>
            <td style='text-align:right;'>${bill[i].price}</td>
            <td style='text-align:right;'>${bill[i].quantity}</td>
            <td><button type="button" onclick="delProduct(${i})">Del</button></td>
        </tr>`
    }
	renderBill();
}



function addProduct() {
    let productName = document.getElementById("productNameInput").value;
    let productPri = document.getElementById("productPri").value;
    let producInv = document.getElementById("productInv").value;

    bill.push(new Item(productName, productPri, producInv));
    tbBill = document.getElementById("tbBill");
    tbBill.innerHTML = ""
    for (let i = 0; i < bill.length; i++) {
        tbBill.innerHTML += `
        <tr>
            <td>${bill[i].name}</td>
            <td style='text-align:right;'>${bill[i].price}</td>
            <td style='text-align:right;'>${bill[i].quantity}</td>
            <td><button type="button" onclick="delProduct(${i}11)">Del</button></td>
        </tr>`
    }
    document.getElementById("productNameInput").value = "";
    document.getElementById("productPri").value ="";
    document.getElementById("productInv").value ="";

}


function delProduct(index) {
    bill.splice(index, 1);
    renderBill();
}
renderBill()