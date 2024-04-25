// In 2-then.js file

export default function handleResponseFromAPI(promise) {
    return promise
      .then((response) => {
        console.log('Got a response from the API');
        return { status: 200, body: 'success' };
      })
      .catch(() => {
        console.log('Got a response from the API');
        return new Error();
      })
      .finally(() => {
        console.log('Finally block executed');
      });
  }
