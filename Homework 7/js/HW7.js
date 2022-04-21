'use strict';
function price (obj, from, to) {
    let newObj = {};
    obj.price = (Math.random() * to) + from;
    newObj.push(obj);
    return newObj;
}

let items = {
    piano: {
        title: "Пианино",
        price: 3000,
        count: 25
    },
    guitar: {
        title: "Гитара",
        price: 1200,
        count: 40
    },
    drum: {
        title: "Барабаны",
        price: 2700,
        count: 12
    },
    flute: {
        title: "Флейта",
        price: 900,
        count: 50
    },
    harp: {
        title: "Арфа",
        price: 3400,
        count: 5
    }
};

function buy (obj, itemTitle, countToCart) {
    for (let item in obj) {
        for (itemTitle in item) {
            if (obj[item].count >= countToCart) {
                obj[item].count -= countToCart;
                return true;
            } else {
                console.log("There isn't enough items");
                return false;
            }
        }
    }
}
buy(items, "Арфа", 4);