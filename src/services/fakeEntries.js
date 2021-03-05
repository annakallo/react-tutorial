import * as categoriesAPI from "./fakeCategories";

const expensesEntries = [
    {
        id: 1,
        title: "Weekly big food",
        amount: 125,
        category: {id:1, name: 'groceries'},
        shop: "Mercadona",
        date: "2021-03-01T19:04:28.809Z",
        liked: true
    },
    {
        id: 2,
        title: "Weekly big food",
        amount: 89,
        category: {id:1, name: 'groceries'},
        shop: "Lidl",
        date: "2021-01-12T19:04:28.809Z"
    },
    {
        id: 3,
        title: "Sushi Wednesday",
        amount: 10.25,
        category: {id:2, name: 'restaurant'},
        shop: "Koyo",
        date: "2021-02-25T19:04:28.809Z"
    },
    {
        id: 4,
        title: "Lunch",
        amount: 9.64,
        category: {id:2, name: 'restaurant'},
        shop: "KFC",
        date: "2021-02-17T19:04:28.809Z"
    },
    {
        id: 5,
        title: "B-day gift Roser",
        amount: 29,
        category: {id:3, name: 'gift'},
        shop: "Yves Rocher",
        date: "2021-02-16T19:04:28.809Z"
    },
    {
        id: 6,
        title: "Weekly big food",
        amount: 78,
        category: {id:1, name: 'groceries'},
        shop: "Corte Ingles",
        date: "2021-02-03T19:04:28.809Z",
        liked: true
    },
    {
        id: 7,
        title: "Weekly big food",
        amount: 66,
        category: {id:1, name: 'groceries'},
        shop: "Lidl",
        date: "2021-02-12T19:04:28.809Z"
    },
    {
        id: 8,
        title: "Burger Wednesday",
        amount: 45,
        category: {id:2, name: 'restaurant'},
        shop: "Goiko",
        date: "2021-03-01T19:04:28.809Z"
    },
    {
        id: 9,
        title: "Lunch",
        amount: 15,
        category: {id:2, name: 'restaurant'},
        shop: "Burger King",
        date: "2021-01-24T19:04:28.809Z"
    },
    {
        id: 10,
        title: "B-day gift Gabri",
        amount: 29,
        category: {id:3, name: 'gift'},
        shop: "Artisanal beers",
        date: "2021-02-25T19:04:28.809Z"
    }
]

export function getEntries() {
    return expensesEntries;
}

export function getEntry(id) {
    // console.log(id);
    // console.log(expensesEntries);
    // let entryInDb = expensesEntries.find(m => m.id === parseInt(id)) || {};
    // console.log(entryInDb);
    return expensesEntries.find(m => m.id === parseInt(id)) || {};
}

export function saveEntry(entry) {
    let entryInDb = expensesEntries.find(m => m.id === parseInt(entry.id)) || {};
    entryInDb.title = entry.title;
    entryInDb.amount = entry.amount;
    entryInDb.category = categoriesAPI.categories.find(c => c.id === parseInt(entry.categoryId));
    entryInDb.shop = entry.shop;

    if (!entryInDb.id) {
        entryInDb.id = expensesEntries.length + 1;
        entryInDb.date = new Date().toLocaleString();
        expensesEntries.push(entryInDb);
    }
    return entryInDb;
}

