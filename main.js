const { URL } = require('url');

const DATE = '202202';
const url = new URL('https://bank.gov.ua/NBUStatService/v1/statdirectory/res');

url.searchParams.append('date', DATE);
url.searchParams.append('json', '');

console.log('https://bank.gov.ua/NBUStatService/v1/statdirectory/res?date=202202&json');