import { action, makeObservable,observable} from 'mobx';
import User from '../Server/user'

class Login {
    token = '';

    constructor() {
        makeObservable(this, {
            login: action,
            token: observable,
            setToken: action,
            requestPasswordReset: action,
            decodeJwtToken: action,
           
        })
        this.startTokenRefresh();

    }
    setToken(newToken) {
        this.token = newToken;
        localStorage.setItem("authToken", newToken);
    }

    async login(username, password) {
        try {
            const response = await fetch('https://kostiner-tenders-back.onrender.com/auth/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ username, password }),
            });

            if (response.ok) {
                const data = await response.json();
                console.log('Login successful:', data);
                const { access_token, refresh_token, user } = data;
                this.setToken(access_token);
                localStorage.setItem("user", JSON.stringify(user));
                localStorage.setItem('authToken', access_token);
                localStorage.setItem('refreshToken', refresh_token);
                

                // const res = User.setUser({...user})
                // console.warn("res =", res);
                
                return { status: 200, message: 'Login successful', data };
            } else {
                const errorData = await response.json();
                console.error('Login failed:', errorData);
                return { status: response.status, message: 'Login failed', error: errorData };
            }
        } catch (error) {
            console.error('Error:', error);
            return { status: 400, message: 'Login failed', error };
        }
    }

    async refreshToken() {
        console.log("refreshToken");
        try {
            const response = await fetch('http://kostiner-tenders-back.onrender.com/auth/refresh-token', {
                method: 'POST',
                headers: {
                    'Authorization': `Bearer ${localStorage.getItem('refreshToken')}`,
                },
            });

            if (response.ok) {
                const data = await response.json();
                const { newToken, newRefreshToken } = data;
                localStorage.setItem('authToken', newToken);
                localStorage.setItem('refreshToken', newRefreshToken);
            } else {
                console.error('Token refresh failed');
                localStorage.removeItem('authToken');
                localStorage.removeItem('refreshToken');
            }
        } catch (error) {
            console.error('Error refreshing token:', error);
            localStorage.removeItem('authToken');
            localStorage.removeItem('refreshToken');
        }
    }

    startTokenRefresh() {
        const interval = (2 * 60 * 60 + 55 * 60) * 1000; // 2 שעות ו-55 דקות במילישניות
        setInterval(() => {
          this.refreshToken();
        }, interval); 
      }

    async requestPasswordReset(email, username) {
        try {
            const response = await fetch('https://kostiner-tenders-back.onrender.com/auth/reset-password/request', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ email, username })
            });
            const responseData = await response.json();
            if (!response.ok) {
                console.log("status", response.status);
                throw new Error(responseData.status || 'Failed to reset password');
            }
            console.log(responseData);
            localStorage.setItem('resetToken', responseData);
            return { success: true, responseData }
        } catch (error) {
            console.error('Error resetting password:', error);
            return { success: false, message: error.message };
        }
    }
    
    async fetchAndSetUser(token) {
        try {
            const userId = this.getUserIdFromToken(token);
            console.log(userId);
            const response = await fetch(`https://kostiner-tenders-back.onrender.com/api/get-id-user/${userId}`, {
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `${token}`,
                },
            });
            console.log("in fetchAndSetUser. | Login service | response= ",response);
            
            if (response.ok) {
                const userData = await response.json();
                console.log('User details fetched:', userData);
                return userData
            } else {
                console.error('Failed to fetch user details:', response.statusText);
            }
        } catch (error) {
            console.error('Error fetching user details:', error);
        }
    }
    getUserIdFromToken(token) {
        const decodedToken = this.decodeJwtToken(token);
        return decodedToken.user_id;
    }
    decodeJwtToken(token) {
        if(token)
        {
        const base64Url = token.split('.')[1];
        const base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
        const payload = JSON.parse(atob(base64));
        return payload;
        }
        else
          return null;
    }


   

}
const singleton = new Login();
export default singleton;