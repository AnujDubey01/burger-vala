// Fetch menu and display
async function getMenu() {
    try {
        const response = await fetch("menu.json"); // your JSON file
        const data = await response.json();

        const menuDiv = document.querySelector(".menu");
        menuDiv.innerHTML = "<h3> Menu</h3><div class='menu-grid'></div>";

        const grid = menuDiv.querySelector(".menu-grid");

        data.forEach(item => {
            
            const foodCard = document.createElement("div");
            foodCard.classList.add("food-card");

             foodCard.innerHTML = `
                <img src="${rger 1.png}" alt="${item.name}">
                <div class="food-info">
                    <h4>${item.name}</h4>
                    <p>$${item.price.toFixed(2)}/-</p>
                </div>
                <button class="add-btn">+</button>
            `;

            grid.appendChild(foodCard);
        });

        return data;
    } catch (error) {
        console.error("Error loading menu:", error);
    }
}

function TakeOrder(menu) {
    return new Promise(resolve => {
        setTimeout(() => {
            let order = { items: [] };
            for (let i = 0; i < 3; i++) {
                const randomIndex = Math.floor(Math.random() * menu.length);
                order.items.push(menu[randomIndex]);
            }
            console.log("Order placed:", order);
            resolve(order);
        }, 2500);
    });
}

function orderPrep() {
    return new Promise(resolve => {
        setTimeout(() => {
            let status = { order_status: true, paid: false };
            console.log("Order being prepared:", status);
            resolve(status);
        }, 1500);
    });
}

function payOrder() {
    return new Promise(resolve => {
        setTimeout(() => {
            let status = { order_status: true, paid: true };
            console.log("Order paid:", status);
            resolve(status);
        }, 1000);
    });
}

function thankyouFnc() {
    alert("Thank you for dining with us today!");
}

async function startProcess() {
    const menu = await getMenu();
    const order = await TakeOrder(menu);
    const prep = await orderPrep(order);
    const paid = await payOrder(prep);

    if (paid.paid) {
        thankyouFnc();
    }
}

startProcess();

