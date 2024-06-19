import { action, makeObservable } from 'mobx';
const baseUrl = "http://localhost:5000";

class Login
{
    constructor() {
        makeObservable(this, {
            postLogin:action,
        })
    }

   async postLogin(username,password) {
        try {
            const res = await fetch(baseUrl + '/login', {
                method: 'POST',
                headers: { 'Content-Type':'application/json' },
                body: JSON.stringify(username,password)
            });

            const {access_token} = res.data;
            //please! check that the access token dosn't include sensitive data!!! 
            localStorage.setItem("access_token",access_token);
            return access_token;
        } catch (err) { console.log(err) }

    }

async resetEmail(username,email){
    try {
        const res = await fetch(baseUrl + '/resetEmail', {
            method: 'POST',
            headers: { 'Content-Type':'application/json' },
            body: JSON.stringify(username,email)
        });
        if(res.status!=200)
            return false;
        else
            return true;
        // const {access_token} = res.data;
        // //please! check that the access token dosn't include sensitive data!!! 
        // localStorage.setItem("access_token",access_token);
        //return data
    } catch (err) { console.log(err) }



}






}
const singleton = new Login();
export default singleton;