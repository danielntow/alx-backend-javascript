function updateUniqueItems(map) {
    // Check if the argument is a Map
    if (!(map instanceof Map)) {
      throw new Error('Cannot process');
    }

    // Iterate over each entry in the map
    map.forEach((quantity, item) => {
      // Update the quantity to 100 if it's initially 1
      if (quantity === 1) {
        map.set(item, 100);
      }
    });
  }

  export default updateUniqueItems;
