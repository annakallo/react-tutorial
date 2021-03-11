import http from './httpService';

export function getEntries() {
    return http.get('http://localhost/api/expenses');
}
