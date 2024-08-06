import { action, makeObservable } from 'mobx';

// const baseUrl = "https://kostiner-tenders-back.onrender.com";
const baseUrl = "http://127.0.0.1:5000";

class Payment {
    constructor() {
        makeObservable(this, {
            CreateDocument: action,
            Pay: action

        })
    }

    // createDetails(details) {
    //     return {
    //         'name':details.name,
    //         'pay':1
    //     };
    // }



    async Pay(payment_details) {
        try {
            // console.log("payment_details",payment_details);
            const res = await fetch(baseUrl + '/api/create-payment',{
                method: 'POST',
                headers: { 'Content-Type':'application/json' },
                body: JSON.stringify(payment_details),
                referrerPolicy:'origin'
            })
            
            const data = await res.json();
            console.log("********res payment*******", data);
            return data.url;

        }
        catch (err) { console.log(err) 
            // return 'https://app.upay.co.il/BANKRESOURCES/UPAY/redirectpages/b3JzOE9TK2lwSzlXOVI2c3hmajdmZEdwN2FkdkM5K3VwVUNkdkFudTRkZz0equal.html'
        }
    }

    async CreateDocument(document){
        try {
            const res = fetch(baseUrl + '/api/document',{
                method: 'POST',
                headers: { 'Content-Type':'application/json' },
                body: JSON.stringify(document),
                referrerPolicy:'origin'
            })
            console.log("res document", res);
            return res;

        }
        catch (err) { console.log(err) }


    }


}

const single = new Payment();
export default single;