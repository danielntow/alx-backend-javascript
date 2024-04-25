// In 4-user-promise.js file

export default function signUpUser(firstName, lastName) {
    return Promise.resolve({
      firstName: firstName,
      lastName: lastName,
    });
  }
