import http from './httpService';

const categoryColor = [ "#701111", "#ef2d61", "#dfc6c6", "#a4a4a4", "#b0a368", "#998362",
    "#817171", "#786262", "#aeaeea", "#ffc000", "#dcedc1", "#ffc0cb", "#c39797", "#ffc3a0",
    "#abcbae", "#ecefae", "#accaee", "#eceefb", "#feecee"
]

const categoryIcon = ["mdi-cat", "mdi-castle", "mdi-airplane", "mdi-table-furniture",
    "mdi-glass-mug-variant", "mdi-google-downasaur", "mdi-credit-card-check", "mdi-palette",
    "mdi-hammer-wrench", "mdi-piano", "mdi-home-plus","mdi-earth", "mdi-school", "mdi-car-hatchback",
    ""
]

export function getCategoryColor() {
    return categoryColor;
}

export function getCategoryIcon() {
    return categoryIcon;
}

export function getCategories() {
    return http.get('/categories');
}

