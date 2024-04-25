function signUpUser(firstName, lastName) {
    return new Promise((resolve, reject) => {
      // Create the user object
      const user = {
        firstName: firstName,
        lastName: lastName
      };

      // Resolve the promise with the user object
      resolve(user);
    });
  }

  export default signUpUser;
