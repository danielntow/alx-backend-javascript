function cleanSet(set, startString) {
    let result = '';

    // Iterate over each value in the set
    set.forEach(value => {
      // Check if the value starts with the specified startString
      if (value.startsWith(startString)) {
        // Append the substring after the startString to the result string
        result += value.substring(startString.length) + '-';
      }
    });

    // Remove the trailing '-' if any
    if (result.endsWith('-')) {
      result = result.slice(0, -1);
    }

    return result;
  }

  export default cleanSet;
