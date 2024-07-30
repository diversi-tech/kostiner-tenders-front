import { action, makeObservable } from 'mobx';
import axios from 'axios';
<<<<<<< Updated upstream
const baseUrl = "http://127.0.0.1:5000";
=======
const baseUrl = "https://kostiner-tenders-back.onrender.com";
>>>>>>> Stashed changes

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
<<<<<<< Updated upstream
            const res = await axios.post('http://127.0.0.1:5000/login', { username, password })
=======
            const res = await axios.post(baseUrl+'/login', { username, password })
>>>>>>> Stashed changes
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
<<<<<<< Updated upstream
        const res = await axios.post(baseUrl + '/sign-up',{details});
=======
        await fetch(baseUrl + '/api/user/post-user', {
            method: 'POST',
            headers: { 'Content-Type':'application/json' },
            body: JSON.stringify(details)
        });
        console.log("details",details);
        console.log("res ",res);
>>>>>>> Stashed changes
        if(res.status!=200)
            return false;
        else
            return true;
        
    } catch (err) { console.log(err) }

}


async SignWithGoogle()
{
    try{
<<<<<<< Updated upstream
        const res=await axios.get(baseUrl);
=======
        const res=await axios.get(baseUrl+'/api/auth/continue-with-google');
>>>>>>> Stashed changes
        console.log("res-google",res);



    }
    catch(err) { console.log(err) }
    



}



}
const singleton = new Login();
export default singleton;