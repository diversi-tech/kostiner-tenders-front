import { action, makeObservable } from 'mobx';

// const baseUrl = "https://kostiner-tenders-back.onrender.com/api";
const baseUrl = "http://127.0.0.1:5000/api";

class PushHistory {
    constructor() {
        makeObservable(this, {
            Push: action,
            PushSingle: action,
        })
    }



    async Push(history, user_ID) {
        try {
        //דחיפה למנוי לאובייקט 
        //subscription

        // const userDetails = await this.GetUserDetails(user_ID);
        // if (userDetails != null) {
        //     userDetails.subscriptions = {...history};
        //     console.warn("user to push subscription ", userDetails);
        // }
        const update_user = {
            'user_id': user_ID,
            'subscriptions': { ...history }

        }
        console.warn("**server ---to push:", update_user);
        const token = localStorage.getItem('authToken');
        try{
        const res = await fetch(baseUrl + `/put-user/${user_ID}`, {
            method: 'PUT',
            headers: {
                'Authorization': token,
                'Content-Type': 'application/json'


            },
            body: JSON.stringify(update_user)
        })
        console.warn("1");
        const data = await res.json();
    
        console.warn("1");
        console.warn("server --- data from push:", await data);
        console.warn("server --- res from push:",await data.status);

        if (data.status != 200)
            return { 'status': 400, 'message': res }
        else
            return { 'status': 200, 'message': 'succeed' };

        } catch (err) {
            console.log(err);
            // return { 'status': 400, 'message': err }
        }
    }catch (err){
        console.error(err);
        
    }
    }

    async PushSingle(history, user_ID) {
        try {
            //דחיפת מנוי בודד
            //להיסטוריית הרכישות
            const update_user = {
                'user_id': user_ID,
                'purchase_history': [{ ...history }]
            }
            const token = localStorage.getItem('authToken')
            const res = await fetch(baseUrl + `/put-user/${user_ID}`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': token
                },
                body: JSON.stringify(update_user)
            })
            const data = await res.json();
            console.warn("data from single-Push", data);
            if (data.status != 200)
                return { 'status': 400, 'message': data }
            else
                return { 'status': 200, 'message': 'succeed' };


        } catch (err) {
            console.log(err);
            return { 'status': 400, 'message': err }
        }
    }





}
const single = new PushHistory();
export default single;
