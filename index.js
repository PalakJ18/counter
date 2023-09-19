// // USING ONCLICK ATTRIBUTE
// const currVal = document.querySelector('#counter');
// //const currVal = document.getElementById('counter');
// const increment = () => {
//     // get value from ui
//     let value = parseInt(currVal.innerText);
//     // update value
//     value = value + 1;
//     //  set value back to ui 
//     currVal.innerText = value;
// }
// const decrement = () => {
//     // get value from ui
//     let value = parseInt(currVal.innerText);
//     // update value
//     value = value - 1;
//     //  set value back to ui 
//     currVal.innerText = value;
// }

// USING EVENT LISTENER

function decrement() {
    let currVal = document.querySelector('#counter');
    // get value from ui
    let value = parseInt(currVal.innerText);
    // update value
    value = value - 1;
    //  set value back to ui 
    currVal.innerText = value;
}
function increment() {
    let currVal = document.querySelector('#counter');
    // get value from ui
    let value = parseInt(currVal.innerText);
    // update value
    value = value + 1;
    //  set value back to ui 
    currVal.innerText = value;
}

let minus = document.querySelector('.negative');
minus.addEventListener('click', decrement);
let plus = document.querySelector('.positive');
plus.addEventListener('click', increment);
