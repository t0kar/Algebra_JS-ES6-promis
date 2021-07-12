function counter(end) {
    for (let i = 0; i < end; i++) {
        console.log(i);
    }
}

function promiseCounter() {
    return new Promise((resolve, reject) => {
        const count = counter(50000);
        resolve(count);
    });
}

const t0 = performance.now();

counter(50000);

promiseCounter()
    .then((count) => {
        console.log("Promise je izvršen!");
    });

const t1 = performance.now();

console.log(`Izvršavanje for petlji je trajalo ${(t1 - t0) / 1000} sekundi.`);