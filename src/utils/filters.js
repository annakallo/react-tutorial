import {getCategories} from '../services/fakeCategories';

export function filterByTime(items, filter) {
    let today = new Date();
    switch(filter) {
        case 'Last week':
            let oneWeekAgo = new Date(today.getTime() - 7*24*60*60*1000);
            return  items.filter(entry => oneWeekAgo < new Date(entry.date));
        case 'This month':
            return  items.filter(entry => today.getMonth() === new Date(entry.date).getMonth());
        case 'Last month':
            return  items.filter(entry => today.getMonth() - 1 === new Date(entry.date).getMonth());
        default:
            return items;
    }
}

export function filterByCategory(items, filter) {
    if (filter === "Get all entries") return items;
    return items.filter(entry => entry.category === filter);
}