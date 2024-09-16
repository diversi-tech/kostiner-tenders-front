import { action, get, makeObservable } from 'mobx';
const baseUrl = "https://kostiner-tender-records.onrender.com";
import single from '../Server/payment'
import singleto from './LoginService';
class Payment
{
        constructor() {
            makeObservable(this, {
                pay: action,
                document: action,
                GetUserDetails: action
                
            })
        }

        async GetUserDetails(user_ID) {
            const token = localStorage.getItem('authToken');
            try {
                const res = await fetch(baseUrl + `/get-id-user/${user_ID}`, {
                    method: 'GET',
                    headers: {
                        'Content-Type': 'application/json',
                        'Authorization': token
                    }
                })
                
                 const data = res.json();
                // console.log(data);
                console.warn("GetUserDetails - res = ", data);
                // return data?.user;
                return data;
    
            }
            catch (err) {
                console.error(err);
                return null;
            }
    
    
        }
   
        async pay(type, items, user)
        {
            console.warn("type in redirect: ",type);
            const reportType= type==1?'דוח חד פעמי':type==2?'דוח חודשי':'מנוי קבוע לשנה';
            console.warn(" uesser before fetch from new",user);
            if(user == null || user == undefined || user.email == undefined || user.name == undefined)
            {
                const token = localStorage.getItem('authToken');
                const currentUser = await singleto.fetchAndSetUser(token)
                const ID = await singleto.getUserIdFromToken(token);
                const newUser = await this.GetUserDetails(ID);
                console.warn("newUser User: ", newUser);
                if (newUser)
                {
                    user = {...newUser};
                    console.warn("user. had to fetch from new ", user);
                }

            }
            
            
            const payDetails= {
                "payments": 1,
                "chargeIdentifier": "1234567",
                "docType": 108,
                "mail": true,
                "discount": 0,
                "discountType": "sum",
                "rounding": false,
                "signDoc": true,
                "details": reportType,
                "lang": "he",
                "currency": "ILS",
                "contact": {
                  "email": user.email ,
                  "name": user.name
                },
                // "items": [
                //  {
                //    "price": 1,
                //    "quantity": 1,
                //    "vatIncluded": false,
                //    "name": "Product Name",
                //    "description": "Product Description"
                //  }
                // ],
                 "items": type == 1? [{
                    "price": 300,
                    "quantity": 1,
                    "vatIncluded": false,
                    "name": items,
                    "description": "קניית מכרז בודד"

                 }] : {...items},
                // "notifyUrl": `https://kostiner-tenders.onrender.com/#/finishPay/${type}/${items}`,
                // "successUrl": `https://kostiner-tenders.onrender.com/#/finishPay/${type}/${items}`,
                // "failureUrl": `https://kostiner-tenders.onrender.com/#/finishPay/${type}0/${items}`
              "notifyUrl": `https://kostiner-tenders.onrender.com/#/finishPay/${type}/${encodeURIComponent(JSON.stringify(items))}`,
                "successUrl": `https://kostiner-tenders.onrender.com/#/finishPay/${type}/${encodeURIComponent(JSON.stringify(items))}`,
                "failureUrl": `https://kostiner-tenders.onrender.com/#/finishPay/${type}0/${encodeURIComponent(JSON.stringify(items))}`
            }
              console.warn("payDetails ", payDetails);
              console.warn("redirected: ",`https://kostiner-tenders.onrender.com/#/finishPay/${type}/${encodeURIComponent(JSON.stringify(items))}`);
              return await single.Pay({...payDetails});


        }

        async document()
        {
            return "ghj";



        }
 

}
const singleton = new Payment();
    export default singleton;

