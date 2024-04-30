const weakMap = new WeakMap();

function queryAPI(endpoint) {
  // Get the number of times queryAPI has been called for this endpoint
  let count = weakMap.get(endpoint) || 0;

  // Increment the count for this endpoint
  count++;

  // Update the count in the weakMap
  weakMap.set(endpoint, count);

  // Check if the number of queries is >= 5
  if (count >= 5) {
    throw new Error('Endpoint load is high');
  }
}

export { weakMap, queryAPI };
