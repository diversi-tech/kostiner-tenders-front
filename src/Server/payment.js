import { action, makeObservable } from 'mobx';

const baseUrl = "https://kostiner-tenders-back.onrender.com";

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
            const res = fetch(baseUrl + '/api/create-payment',{
                method: 'POST',
                headers: { 'Content-Type':'application/json' },
                body: JSON.stringify(payment_details),
                referrerPolicy:'origin'
            })
            console.log("res payment", res);
            return res;

        }
        catch (err) { console.log(err) }
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