import { jwtDecode } from "jwt-decode";

class User {
  static userKey = "user";
  static name;
  static username;
  static token;
  static decodedToken;

  constructor(username, name) {
    this.name = name;
    this.username = username;
    this.token = null;
    this.decodedToken = null;
    this.loadTokenFromCookie();
  }

  static login({ token, name, username }) {
    User.token = token;
    User.name = name;
    User.username = username;
    User.decodedToken = User.decodeToken();
    User.saveTokenToCookie();
    return username;
  }

  static decodeToken() {
    try {
      return jwtDecode(User.token);
    } catch (error) {
      console.error("Error decoding token:", error.message);
      return null;
    }
  }

  static saveTokenToCookie() {
    // Save token to cookie and local storage
    const userData = {
      name: User.name,
      token: User.token,
      isAuthenticated: true,
      id: User.decodedToken.user_id,
      expiry: User.decodedToken.exp,
      username: User.decodedToken.username,
    };
    localStorage.setItem(User.userKey, JSON.stringify(userData));
  }

  loadTokenFromCookie() {
    // Load token from cookie if it exists
    const cookieToken = Cookies.get("jwt_token");
    if (cookieToken) {
      this.token = cookieToken;
      this.decodedToken = this.decodeToken();
    }
  }

  static logout() {
    // Clear token from cookie and local storage on logout
    localStorage.removeItem(User.userKey);
  }

  getToken() {
    return this.token;
  }

  getUserId() {
    return this.decodedToken ? this.decodedToken.sub : null;
  }

  getUsername() {
    return this.decodedToken ? this.decodedToken.username : null;
  }

  getExpirationDate() {
    return this.decodedToken ? new Date(this.decodedToken.exp * 1000) : null;
  }

  isTokenExpired() {
    const expirationDate = this.getExpirationDate();
    return expirationDate && expirationDate < new Date();
  }

  refresh() {
    // Implement token refresh logic if needed
    // This might involve making a request to a server to get a new token
    // and updating the User instance with the new token.
    console.log("Token refresh logic here");
  }
}

export default User;
