// Promise.all() 批量执行
//切菜
function cutUp() {
    console.log('开始切菜。');
    var p = new Promise(function(resolve, reject) { //做一些异步操作
        setTimeout(function() {
            console.log('切菜完毕！');
            resolve('切好的菜');
        }, 1000);
    });
    return p;
}

//烧水
function boil() {
    console.log('开始烧水。');
    var p = new Promise(function(resolve, reject) { //做一些异步操作
        setTimeout(function() {
            console.log('烧水完毕！');
            resolve('烧好的水');
        }, 1000);
    });
    return p;
}

Promise.all([cutUp(), boil()])
    .then((result) => {
        console.log('准备工作完毕');
        console.log(result);
    })

//Promise.race() 类似于Promise.all() ，区别在于它有任意一个完成就算完成
let p1 = new Promise(resolve => {
    setTimeout(() => {
        resolve('I\`m p1 ')
    }, 1000)
});
let p2 = new Promise(resolve => {
    setTimeout(() => {
        resolve('I\`m p2 ')
    }, 2000)
});
Promise.race([p1, p2])
    .then(value => {
        console.log(value)
    })



////////////////////////////////////////////////////////////////////////
function timeout(ms) {
    return new Promise((resolve, reject) => {
        setTimeout(resolve, ms, 'done');
    });
}

timeout(100).then((value) => {
    console.log(value);
});
////////////////////////////////////////////////////////////////////////

let promise = new Promise(function(resolve, reject) {
    console.log('Promise');
    resolve();
});

promise.then(function() {
    console.log('resolved.');
});

console.log('Hi!');
////////////////////////////////////////////////////////////////////////

function loadImageAsync(url) {
    return new Promise(function(resolve, reject) {
        const image = new Image();

        image.onload = function() {
            resolve(image);

        };

        image.onerror = function() {
            reject(new Error('Could not load image at ' + url));

        };

        image.src = url;
    });
}
////////////////////////////////////////////////////////////////////////