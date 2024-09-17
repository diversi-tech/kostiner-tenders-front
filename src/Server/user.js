import { action, get, makeObservable, observable } from 'mobx';
import axios from '../axios/axios';
import LoginService from '../Logic/LoginService'
import { toJS } from 'mobx';
const baseUrl = "https://kostiner-tenders-back.onrender.com";

class User {
    user= {};
    constructor() {
        makeObservable(this, {
            user: observable,
            // getCurrentUser: get,
            getUserById: action,
            getAllUsers: action,
            putUser:action,
            fetchUserData: action,
            setUser: action,
            extractFromString: action
            
        })
        this.setUser(); //init user//is needed???
        //מה קורה אם הוא עוד לא ביצע לוגין????
        //שאז בעצם אין טוקן...
    }

    setUser(user)
    {
      const currentUser=JSON.stringify(localStorage.getItem('user'));
      this.user = this.extractFromString(currentUser);
      console.warn(toJS(this.user));
      console.warn("And The user is ------ \n \n ",this.user);
      
      // localStorage.removeItem('user');
      
      
      
      if(!this.user || {...this.user} != {...user})
        return false;
      else 
        return true;
    }


     extractFromString(str) {
        if (!str) {
            console.error('The input string is null or undefined.');
            return { userName: "", email: "" }; // או טיפול אחר במקרה של קלט לא חוקי
        }
    
        // המרת המחרוזת לגירסה תקינה (החלפת גרשיים בגרשיים כפולים)
        const correctedStr = str.replace(/'/g, '"');
    
        // חיפוש באמצעות רגולרית עבור user_name ו-email
        const userNameMatch = correctedStr.match(/"user_name":\s*"([^"]*)"/);
        const emailMatch = correctedStr.match(/"email":\s*"([^"]*)"/);
    
        // חילוץ הערכים אם נמצאו
        const user_name = userNameMatch ? userNameMatch[1] : "";
        const email = emailMatch ? emailMatch[1] : "";
    
        return { user_name, email };
    }
    
   

   async fetchUserData() //init user
   {
        const token = localStorage.getItem('authToken');
        if (token) {
          try {
            const userData = await LoginService.fetchAndSetUser(token);
            if (userData) {
              this.user = await {...userData}
            }
          } catch (error) {
            console.error('Failed to fetch user data:', error);
            
            const currentUser= localStorage.getItem('user');
            this.setUser({...currentUser});
            console.warn("And The user is ------ \n", currentUser);
            
            localStorage.removeItem('user');
          }
        }
        else{
          currentUser= localStorage.getItem('user');
        this.setUser({...currentUser});
        console.warn("And The user is ------ \n", currentUser);
        
        localStorage.removeItem('user');
        }
      };

      get getCurrentUser() {
        console.warn("in getCurrentUser. user = ", toJS(this.user));  // שימוש ב-toJS כדי להדפיס את האובייקט ללא ה-Proxy
        return toJS(this.user);  // מחזיר את האובייקט האמיתי במקום ה-Proxy
    }

      async getAllUsers(){
        console.log("getAllUsers");
        const token = localStorage.getItem('authToken');
        try {
          const response = await axios.get(`/get-all-users`, {
            method:'GET',
            headers: {
              'Authorization': token,
              'Content-Type': 'application/json',
            },
          });
          console.log("response");
          console.log(response.data);
          return await response.data;
        } catch (error) {
          console.error('Error fetching users:', error);
          console.error('Response:', error.response);
          return [];
        }
        
      };
      async getUserById(){
        console.log("getUserById");
        const token = localStorage.getItem('authToken');
        try {
          const response = await axios.get(`/get-id-user/${userId}`, {
            method:'GET',
            headers: {
              'Authorization': token,
              'Content-Type': 'application/json',
            },
          });
          console.log("response");
          console.log(response.data);
          return response.data;
        } catch (error) {
          console.error('Error fetching user:', error);
          console.error('Response:', error.response);
          return null;
        }
        
      };
      
      async putUser(){
        const token = localStorage.getItem('authToken');
      try{
        await axios.put(`/put-user`,{
          method:'PUT',
          headers:{
            'Authorization': token,
            'Content-Type':'application/json',
          },
        });
      }
      catch(error){
        console.error('Error fetching users:', error);
          console.error('Response:', error.response);
      }
      };

}
const singleton = new User();
export default singleton;




//************************************************************************* */

// import axios from "../axios/axios";

// export const getAllUsers = async () => {
//   console.log("getAllUsers");
//   const token = localStorage.getItem('authToken');
//   try {
//     const response = await axios.get(`/get-all-users`, {
//       method:'GET',
//       headers: {
//         'Authorization': token,
//         'Content-Type': 'application/json',
//       },
//     });
//     console.log("response");
//     console.log(response.data);
//     return await response.data;
//   } catch (error) {
//     console.error('Error fetching users:', error);
//     console.error('Response:', error.response);
//     return [];
//   }
  
// };
// export const getUserById = async () => {
//   console.log("getUserById");
//   const token = localStorage.getItem('authToken');
//   try {
//     const response = await axios.get(`/get-id-user/${userId}`, {
//       method:'GET',
//       headers: {
//         'Authorization': token,
//         'Content-Type': 'application/json',
//       },
//     });
//     console.log("response");
//     console.log(response.data);
//     return response.data;
//   } catch (error) {
//     console.error('Error fetching user:', error);
//     console.error('Response:', error.response);
//     return null;
//   }
  
// };

// export const putUser = async()=>{
//   const token = localStorage.getItem('authToken');
// try{
//   await axios.put(`/put-user`,{
//     method:'PUT',
//     headers:{
//       'Authorization': token,
//       'Content-Type':'application/json',
//     },
//   });
// }
// catch(error){
//   console.error('Error fetching users:', error);
//     console.error('Response:', error.response);
// }
// };