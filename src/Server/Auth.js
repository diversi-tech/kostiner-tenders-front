import { action, makeObservable } from 'mobx';
import axios from 'axios';
const baseUrl = "https://kostiner-tenders-back.onrender.com";

class Login
{
    constructor() {
        makeObservable(this, {
            postLogin:action,
            SignUp:action,
        })
    }

   async postLogin(username,password) {
        try {
            // const res = await fetch(baseUrl + '/login', {
            //     method: 'POST',
            //     headers: { 'Content-Type':'application/json' },
            //     body: JSON.stringify(username,password),
            //     referrerPolicy:'origin'
            // });
            const res = await axios.post(baseUrl+'/login', { username, password })
            console.log("res login",res.data);
            console.log("res token",res.data.access_token);
            return res;

            
        } catch (err) { console.log(err) }

    }

async resetEmail(username,email){
    try {
        const res = await fetch(baseUrl + '/reset-email', {
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

async SignUp(details)
{
    try {
        await fetch(baseUrl + '/api/user/post-user', {
            method: 'POST',
            headers: { 'Content-Type':'application/json' },
            body: JSON.stringify(details)
        });
        console.log("details",details);
        console.log("res ",res);
        if(res.status!=200)
            return false;
        else
            return true;
        
    } catch (err) { console.log(err) }

}


async SignWithGoogle()
{
    try{
        const res=await axios.get(baseUrl+'/auth/continue-with-google');
        console.log("res-google",res);



    }
    catch(err) { console.log(err) }
    



}



}
const singleton = new Login();
export default singleton;