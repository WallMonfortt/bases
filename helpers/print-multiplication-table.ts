

export function tableMultiplication(n: number, limit: number = 10 ): void {
    (limit <= 0) ? limit = 10 : limit;
    for (let i = 1; i <= limit; i++) {
        console.log(`${n} * ${i} = ${n * i}`);
    }
}