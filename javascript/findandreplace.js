const array1 = ['John', 'Luke', 'Scott', 'stiles', 'Peter', 'liam', 'Mason'];
console.log(array1);
const searchTerm = 'Peter';
const replaceTerm = 'Derek';
for (let i = 0; i < array1.length; i++){
    if (searchTerm == array1[i]){
        array1[i] = replaceTerm;
    }
}
console.log('Array after replacing');
console.log(array1);
