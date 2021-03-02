

const expensesEntries = [
    {
        id: 1,
        title: "Weekly big food",
        amount: 125,
        category: "groceries",
        shop: "Mercadona",
        date: "2021-01-03T19:04:28.809Z",
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
        date: "2021-02-21T19:04:28.809Z"
    },
    {
        id: 5,
        title: "B-day gift Roser",
        amount: 29,
        category: "gift",
        shop: "Yves Rocher",
        date: "2021-02-24T19:04:28.809Z"
    },
]

export function getEntries() {
    return expensesEntries;
}

export function getEntry(id) {
    return expensesEntries.find(m => m.id === id);
}

