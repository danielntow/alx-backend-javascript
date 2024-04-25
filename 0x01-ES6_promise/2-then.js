// In 2-then.js file

export default function handleResponseFromAPI(promise) {
    return promise
      .then((response) => {
        return { status: 200, body: 'success' };
      })
      .catch(() => {
        return new Error();
      })
      .finally(() => {
        console.log('Finally block executed');
      });
  }
