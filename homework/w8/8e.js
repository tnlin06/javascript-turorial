let product1 = {
    'name' : 'cheese',
    'price' : 8.50
}

let product2 = {
    'name' : 'cheese',
    'price' : 8.50
}

function isSameProduct(p1, p2) {
    if (p1.name === p2.name && p1.price === p2.price) {
        return true;
    }
    return false;
}

console.log(isSameProduct(product1, product2));