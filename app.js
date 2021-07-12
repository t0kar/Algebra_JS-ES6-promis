function counter(end) {
    for (let i = 0; i < end; i++) {
        console.log(i);
    }
}

const t0 = performance.now();

counter(50000);
counter(50000);

const t1 = performance.now();

console.log(`Izvršavanje for petlji je trajalo ${(t1 - t0) / 1000} sekundi.`);