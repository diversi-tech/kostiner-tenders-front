import { action, get, makeObservable } from 'mobx';
    // const baseUrl = "http://localhost:5000";
import single from '../Server/payment'

class Payment
{
        constructor() {
            makeObservable(this, {
                pay: action,
                document: action,
                
                
            })
        }
   
        async pay(type, items, user)
        {
            const reportType= type==1?'דוח חד פעמי':type==2?'דוח חודשי':'מנוי קבוע לשנה';
            const payDetails= {
                "payments": 1,
                "chargeIdentifier": "1234567",
                "docType": 108,
                "mail": true,
                // "discount": 0,
                // "discountType": "sum",
                "rounding": false,
                "signDoc": true,
                "details": reportType,
                "lang": "he",
                "currency": "ILS",
                "contact": {
                  "email": user.email,
                  "name": user.name
                },
                 "items": {...items},
                "notifyUrl": "https://kostiner-tenders.onrender.com",
                "successUrl": "https://kostiner-tenders.onrender.com",
                "failureUrl": "https://kostiner-tenders.onrender.com"
              }

              return await single.Pay({...payDetails});


        }

        async document()
        {
            return "ghj";



        }
 

}
const singleton = new Payment();
    export default singleton;

