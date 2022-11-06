const API_KEY = "AIzaSyAhGTh4Id2leJT15VUgB6sEuCIbL0FO0QI";
export const Auth_API = {
  signup: `https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=${API_KEY}`,
  signin: `https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${API_KEY}`,
  change_password: `https://identitytoolkit.googleapis.com/v1/accounts:sendOobCode?key=${API_KEY}`,
};
