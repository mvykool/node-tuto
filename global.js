//console.log(global);

const int = setInterval(() => {
    console.log("what up");

}, 1000);

setTimeout(() => {
    clearInterval(int)
}, 3000);