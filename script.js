function mincost(arr)
{ 
//write your code here
	let cost = 0;
    // Create a min-heap (priority queue) from the array
    arr.sort((a, b) => a - b);
    
    while (arr.length > 1) {
        // Remove the two shortest ropes
        let first = arr.shift(); // Remove and get the first element
        let second = arr.shift(); // Remove and get the second element
        let sum = first + second; // Calculate the cost of connecting them
        cost += sum; // Add to the total cost
        
        // Add the new rope back into the array
        arr.push(sum);
        // Re-sort the array to maintain the order
        arr.sort((a, b) => a - b);
    }
    
    // Return the minimum cost
    return cost;
}

module.exports=mincost;
