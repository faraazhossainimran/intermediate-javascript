// data access 
const data = [{ id: 1, name: 'abol', address: 'kochu khet'}];

console.log(data[0].name);

const products = {
    count: 5000, 
    data: [
        {id: 1, name: 'lenovo', price: 65000},
        {id: 1, name: 'hp', price: 55000},
        {id: 1, name: 'mac', price: 165000}
    ]
}
console.log(products.data[2].name);

const user = {
    id: 5001, 
    name: 'Shoriful',
    address: {
        street: {
            first: '53/4 uttor side',
            second: 'poribug',
            third: 'no dorai'
        },
        city: 'Dhaka'
    }
}

console.log(user.address.street.third);
console.log(user);

const user2 = {
    id: 5003,
    name: 'pori bibir majar',
    address: {
        city: 'chittagong',
        country: 'Bangladesh'
    }
}

console.log(user2.address.second?.city);