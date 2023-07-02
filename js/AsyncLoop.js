function add(a, b) {
    return Promise.resolve(a + b);
}

async function sum(array = []) {
    let res = 0
    for(let item of array) {
        res = await add(res, item)
    }
    return res
}

sum([1, 2, 3, 4, 5]).then(res => {
    console.log(res)
})
