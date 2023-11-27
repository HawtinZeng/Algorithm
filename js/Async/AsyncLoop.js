function add(a, b) {
    return Promise.resolve(a + b);
}
debugger;

async function sum(array = []) {
    let res = 0
    // use of in an array, use for in in an object
    for(let item of array) {
        res = await add(res, item)
    }
    return res
}

sum([1, 2, 3, 4, 5]).then(res => {
    console.log(res)
})
debugger;
debugger;
debugger;
debugger;
debugger;
