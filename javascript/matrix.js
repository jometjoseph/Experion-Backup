// matrix addition
const m1 = [               // first matrix-formed as multidimensional array   
    [1,2],
    [3,5]
];
console.log('First matrix :');
m1.forEach(row => {
    console.log(row);
});
const m2 = [             // second array 
    [6,8],
    [9,12]
];
console.log('second matrix');
m2.forEach(row1 => {
    console.log(row1);
});
const m3 = [[], []];
for(let i = 0; i < m1.length; i++){               // using two for loops to add matrices
     for(let j = 0; j < m1[i].length; j++){
        m3[i][j] = m1[i][j] + m2[i][j];
     }
}
console.log('matrix after addition');
m3.forEach(row2 => {
    console.log(row2);
});
