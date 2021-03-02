

const expensesEntries = [
    {
        id: 1,
        title: "Weekly big food",
        amount: 125,
        category: "groceries",
        shop: "Mercadona",
        date: "2021-03-01T19:04:28.809Z",
        liked: true
    },
    {
        id: 2,
        title: "Weekly big food",
        amount: 89,
        category: "groceries",
        shop: "Lidl",
        date: "2021-01-12T19:04:28.809Z"
    },
    {
        id: 3,
        title: "Sushi Wednesday",
        amount: 10.25,
        category: "restaurant",
        shop: "Koyo",
        date: "2021-02-25T19:04:28.809Z"
    },
    {
        id: 4,
        title: "Lunch",
        amount: 9.64,
        category: "restaurant",
        shop: "KFC",
        date: "2021-02-17T19:04:28.809Z"
    },
    {
        id: 5,
        title: "B-day gift Roser",
        amount: 29,
        category: "gift",
        shop: "Yves Rocher",
        date: "2021-02-16T19:04:28.809Z"
    },
    {
        id: 6,
        title: "Weekly big food",
        amount: 78,
        category: "groceries",
        shop: "Corte Ingles",
        date: "2021-02-03T19:04:28.809Z",
        liked: true
    },
    {
        id: 7,
        title: "Weekly big food",
        amount: 66,
        category: "groceries",
        shop: "Lidl",
        date: "2021-02-12T19:04:28.809Z"
    },
    {
        id: 8,
        title: "Burger Wednesday",
        amount: 45,
        category: "restaurant",
        shop: "Goiko",
        date: "2021-03-01T19:04:28.809Z"
    },
    {
        id: 9,
        title: "Lunch",
        amount: 15,
        category: "restaurant",
        shop: "Burger King",
        date: "2021-01-24T19:04:28.809Z"
    },
    {
        id: 10,
        title: "B-day gift Gabri",
        amount: 29,
        category: "gift",
        shop: "Artisanal beers",
        date: "2021-02-25T19:04:28.809Z"
    },
]

export function getEntries() {
    return expensesEntries;
}

export function getEntry(id) {
    return expensesEntries.find(m => m.id === id);
}

