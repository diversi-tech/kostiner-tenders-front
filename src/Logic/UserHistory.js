import { action, get, makeObservable } from 'mobx';
// const baseUrl = "http://localhost:5000";
import single from '../Server/PushHistory';

function ExtractDate(date, nextYear) {

    const year = nextYear ? date.getFullYear() + 1 : date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0'); // החודש נמדד מ-0 (ינואר) עד 11 (דצמבר), ולכן מוסיפים 1
    const day = String(date.getDate()).padStart(2, '0'); // היום בחודש

    return `${year}-${month}-${day}`;

}


class UserHistory {
    constructor() {
        makeObservable(this, {
            pushHistory: action,
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

            const data = await res.json();
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

    // זה האוביקט באופן כללי
    // "subscriptions": {
    //     "plan_type": "string",
    //     "start_date": "2024-08-06",
    //     "end_date": "2024-08-06",
    //     "categories": [
    //       "home", "string"
    //     ],
    //     "amount": 0
    //   }
    // אם זה מנוי קבוע כלומר כל חודש למשך שנה
    //   "subscriptions": {
    //     "plan_type": "Subscription",
    //     "start_date": "2024-08-06",
    //     "end_date": "2024-08-06",
    //     "categories": [
    //      //אפשר עד 3
    //     ],
    //     "amount": 0
    //   }
    // 3:32
    // אם הוא קונה קטגוריה אחת זה בעצם למשך חודש
    // אז טווח התאריכים זה חודש ויש קטגוריה אחת
    // "subscriptions": {
    //     "plan_type": "One-time category",
    //     "start_date": "2024-08-06",
    //     "end_date": "2024-09-06",
    //     "categories": [
    //      //אפשר 1 בדיוק!!
    //     ],
    //     "amount": 0
    //   }

    // "items"= [{
    //     "plan_type": "One-time category",
    //     "start_date": "2024-08-06",
    //     "end_date": "2024-09-06",
    //     "categories": [
    //      'cats','dogs','others'
    //     ],
    //     "amount": 0
    //   }]




    // async pushHistory(type, items, user_ID) {
    //     const reportType = type == 1 ? 'דוח חד פעמי' : type == 2 ? 'דוח חודשי' : 'מנוי קבוע לשנה';
    //     var history;
    //     console.log("items********** =", items);
    //     try {

    //         switch (type) {
    //             case '1': //שלח לפונ' של טליה
    //                 {
    //                     const name = '' //get tender name
    //                     // history = {};

    //                     return single.PushSingle(items, user_ID);

    //                 }
    //             case '2'://put-user 
    //                 {
    //                     // אם הוא קונה קטגוריה אחת זה בעצם למשך חודש
    //                     // אז טווח התאריכים זה חודש ויש קטגוריה אחת

    //                     history = {
    //                         "subscriptions": {
    //                             "plan_type": "One-time category",
    //                             "start_date": ExtractDate(new Date(), false),
    //                             "end_date": ExtractDate(new Date(), false),
    //                             "categories": [
    //                                 JSON.parse(items)[0].name
    //                             ],
    //                             "amount": JSON.parse(items)[0].price
    //                         }
    //                     }
    //                     console.log("history: ", history);
    //                     return single.Push(history.subscriptions, user_ID);
    //                 }
    //             case '3'://put-user
    //                 {
    //                     console.log("type of items: ", typeof items);
    //                     const categories = JSON.parse(items).map(item => item.name);
    //                     history = {
    //                         "subscriptions": {
    //                             "plan_type": "Subscription",
    //                             "start_date": ExtractDate(new Date(), false),
    //                             "end_date": ExtractDate(new Date(), true),
    //                             "categories": 
    //                                 {...categories},
    //                             "amount": JSON.parse(items)[0].price
    //                         }
    //                     };
    //                     console.log("history: ", history);
    //                     return single.Push(history.subscriptions, user_ID);
    //                 }
    //             case '10':
    //                 {
    //                     return { 'failed': '10' };
    //                 }
    //             case '20':
    //                 {
    //                     return { 'failed': '20' };
    //                 }
    //             case '30':
    //                 {
    //                     return { 'failed': '30' };
    //                 }
    //             default:
    //                 return {'status': 200, 'message': 'default response'}

    //         }
    //     }
    //     catch (err) {
    //         console.error(err);
    //         return {'status':400, 'failed': err};

    //     }






    //     // return await single.Pay({...payDetails});


    // }


    async pushHistory(type, items, user_ID) {
        const reportType = type == 1 ? 'דוח חד פעמי' : type == 2 ? 'דוח חודשי' : 'מנוי קבוע לשנה';
        var history;
        console.log("items********** =", items);

        try {
            switch (type) {
                case '1': // שלח לפונ' של טליה
                    {
                        // קבלת שם מכרז - משתנה מדומיין
                        const name = '';
                        return await single.PushSingle(items, user_ID);
                    }
                case '2': // דוח חודשי
                    {
                        history = {
                            "subscriptions": {
                                "plan_type": "One-time category",
                                "start_date": ExtractDate(new Date(), false),
                                "end_date": ExtractDate(new Date(), false),
                                "categories": [
                                    items[0].name // אין צורך ב-JSON.parse
                                ],
                                "amount": items[0].price
                            }
                        };
                        console.log("history: ", history);
                        return await single.Push(history.subscriptions, user_ID);
                    }
                // case '3': // מנוי שנתי
                //     {
                //         console.log("type of items: ", typeof items);
                //         const categories = items.map(item => item.name); // items הוא כבר מערך
                //         history = {
                //             "subscriptions": {
                //                 "plan_type": "Subscription",
                //                 "start_date": ExtractDate(new Date(), false),
                //                 "end_date": ExtractDate(new Date(), true),
                //                 "categories": categories, // categories הוא כבר מערך
                //                 "amount": items[0].price
                //             }
                //         };
                //         console.log("history: ", history);
                //         return single.Push(history.subscriptions, user_ID);
                //     }
                case '3': // מנוי שנתי
                    {
                        console.log("type of items: ", typeof items);

                        // המרת האובייקט למערך של ערכים
                        const categories = Object.values(items).map(item => item.name);

                        history = {
                            "subscriptions": {
                                "plan_type": "Subscription",
                                "start_date": ExtractDate(new Date(), false),
                                "end_date": ExtractDate(new Date(), true),
                                "categories": categories, // categories עכשיו מערך
                                "amount": Object.values(items)[0].price // שימוש בערך הראשון
                            }
                        };

                        console.log("history: ", history);
                        return await single.Push(history.subscriptions, user_ID);
                    }
                case '10':
                    return { 'failed': '10' };
                case '20':
                    return { 'failed': '20' };
                case '30':
                    return { 'failed': '30' };
                default:
                    return { 'status': 200, 'message': 'default response' };
            }
        } catch (err) {
            console.error(err);
            return { 'status': 400, 'failed': err };
        }
    }


}
const singleton = new UserHistory();
export default singleton;

