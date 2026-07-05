const arr = [1, 2, 3, 4,4, 4, 5, 2]

function frequencyCounter(arr){
    const counter = {};

    let right = 0;
    while(right < arr.length){
        counter[arr[right]] = (counter[arr[right]] | 0) + 1;
        right++
    }
    let mostFrequent;
    let maxCount = 0
    for(const key in  counter){
        if(counter[key] > maxCount){
            maxCount = counter[key];
            mostFrequent = Number(key)
        }
    }
    return {mostFrequent, maxCount}
}

console.log(frequencyCounter(arr))
