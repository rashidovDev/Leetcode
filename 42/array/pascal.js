function generatePascalsTriangle(numRows) {
    const triangle = [];

    // Return empty array if no rows requested
    if (numRows === 0) return triangle;

    for (let i = 0; i < numRows; i++) {
        const row = [];

        for (let j = 0; j <= i; j++) {
            // First and last elements of every row are always 1
            if (j === 0 || j === i) {
                row.push(1);
            } else {
                // Interior elements are the sum of the two elements directly above
                const leftAbove = triangle[i - 1][j - 1];
                const rightAbove = triangle[i - 1][j];
                row.push(leftAbove + rightAbove);
            }
        }

        triangle.push(row);
    }

    return triangle;
}

// Example usage:
console.log(generatePascalsTriangle(5));