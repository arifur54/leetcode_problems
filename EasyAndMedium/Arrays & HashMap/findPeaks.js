
// LeetCode Question #: 2951

const mountain = [1,4, 4]
function findPeaks(mountain) {
    // Time Complexity: O(n)
    // space Complexit: O(1)
    let peaks = [];
    for(let i = 0; i < mountain.length; i++){
        if(mountain[i] > mountain[i + 1] && mountain[i] > mountain[i - 1]){
            peaks.push(i)
        }
    }
    return peaks;
}

function findPeaks2(mountain){
    // Devide and conqure Approch
    // Time Complexity: O(logn)
    // Space Complexity: O(1)

    const peaks = [];
    const findPeak = (start, end) => {
        if(start > end) return;

        const mid = Math.floor((start + end) / 2);

        // check if the mid is peak
        if(mid > 0 && mid < mountain.length - 1 && mountain[mid] > mountain[mid + 1] && mountain[mid] > mountain[mid - 1]){
            peaks.push(mid);
        }

        // Recursively check the left and right halves
        findPeak(start, mid - 1)
        findPeak(mid + 1, end);
      
    
    };

    findPeak(1, mountain.length - 2);
    return peaks;
}

console.log(findPeaks2(mountain));

