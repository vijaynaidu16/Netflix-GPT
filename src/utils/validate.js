export const checkValidData = (email, password, name, isSignInForm) => {
    const isEmailValid = /^([a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})$/.test(email);
    const isPasswordValid = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/.test(password);
  
    if (!isEmailValid) return "Email not valid";
    if (!isPasswordValid) return "Password not valid";
  
    if (!isSignInForm) {
      const isFullNameValid = /^[A-Z][a-zA-Z]{3,}(?: [A-Z][a-zA-Z]+){0,2}$/.test(name);
      if (!isFullNameValid) return "Name not valid";
    }
  
    return null;
  };
  