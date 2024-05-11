
function measureExecutionTime(func, ...args) {
    const startTime = performance.now();
    const result = func(...args)
    console.log(result)
    const endTime = performance.now();
    return endTime - startTime; // Return elapsed time in milliseconds
}

module.exports = measureExecutionTime