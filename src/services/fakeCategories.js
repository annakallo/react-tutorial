

const categories = [
    {id:1, name: 'groceries'},
    {id:2, name: 'restaurant'},
    {id:3, name: 'gift'},
    {id:4, name: 'health'},
]


export function getCategories() {
    return categories.filter(c => c);
}