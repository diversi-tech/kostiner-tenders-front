import { action, makeObservable } from 'mobx';
// const baseUrl = "http://localhost:5000";
class Login {
    constructor() {
        makeObservable(this, {
            login: action,
            // getUsers: action,
            requestPasswordReset: action,
            decodeJwtToken: action,
            fetchAndSetUser: action
        })
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
        console.log(response);
            if (response.ok) {
                const data = await response.json();
                console.log('Login successful:', data);
                const token = data.access_token;
                if (token) {
                    localStorage.setItem('authToken', token);
                } else {
                    console.warn('No access token found in response data.');
                }
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
            localStorage.setItem('authToken', responseData);
            return { success: true,responseData }
        } catch (error) {
            console.error('Error resetting password:', error);
            return { success: false, message: error.message };
        }
    }
    // async getUsers() {
    //     try {
    //         const token = sessionStorage.getItem('authToken');
    //         if (!token) {
    //             console.error('No auth token found in localStorage');
    //             return null;
    //         }
    //         const response = await fetch('http://127.0.0.1:5000/users/', {
    //             method: 'GET',
    //             headers: {
    //                 'Content-Type': 'application/json',
    //                 'Authorization': ` ${token}`
    //             }
    //         });
    //         const data = await response.json();
    //         console.log('Response data:', data);
    //         return data;
    //     } catch (error) {
    //         console.error('Error fetching users:', error);
    //         return null;
    //     }
    // }
    async fetchAndSetUser(token) {
        try {
            const userId = this.getUserIdFromToken(token); // Implement this function to extract user ID from token
            const response = await fetch(`https://kostiner-tenders-back.onrender.com/users/${userId}`, {
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `${token}`,
                },
            });
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
        const base64Url = token.split('.')[1];
        const base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
        const payload = JSON.parse(atob(base64));
        return payload;
    }
}
const singleton = new Login();
export default singleton;