import { action, makeObservable } from 'mobx';
import axios from 'axios';
const baseUrl = "https://kostiner-tenders-back.onrender.com";

class Login {
    constructor() {
        makeObservable(this, {
            postLogin: action,
            SignUp: action,
            logout: action
        })
    }

    async postLogin(username, password) {
        try {
            const res = await axios.post(baseUrl + '/login', { username, password });
            console.log("res login", res.data);
            console.log("res token", res.data.access_token);
            window.location.reload();
            return res;
        } catch (err) {
            console.log(err);
        }
    }

    async resetEmail(username, email) {
        try {
            const res = await fetch(baseUrl + '/reset-email', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(username, email)
            });
            if (res.status != 200)
                return false;
            else
                return true;
            
        } catch (err) { console.log(err) }
    }

    async SignUp(details) {
        try {
            await fetch(baseUrl + '/api/user/post-user', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(details)
            });
            console.log("details", details);
            console.log("res ", res);
            if (res.status != 200)
                return false;
            else
                return true;

        } catch (err) { console.log(err) }

    }

    async SignWithGoogle() {
        try {
            const res = await axios.get(baseUrl + '/auth/continue-with-google');
            console.log("res-google", res);

        }
        catch (err) { console.log(err) }

    }

    async logout() {
        console.log("log-out");
        const token = localStorage.getItem('authToken')
        console.log(token);
        const response = await fetch(`https://kostiner-tenders-back.onrender.com/auth/logout`, {
            method: "POST",
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `${token}`,
            },
        });
        if (response.ok) {
            localStorage.removeItem('authToken');
            localStorage.removeItem('user');
            window.location.reload();
        }
        else
            console.log("failed")
    }

    

}
const singleton = new Login();
export default singleton;