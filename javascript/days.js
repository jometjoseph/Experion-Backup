const array1 = [1,2,3,4,5,6,7];
const week = ['sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
const dayno = 5;
for (let i = 0; i < array1.length; i++) {
    if (dayno == array1[i]){
        console.log(dayno, 'th day of the week is', week[i]);
    }
}