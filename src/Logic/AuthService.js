import singleton from "../Server/Auth";
import User from '../Server/user'

class AuthService
{
    constructor(){}


  async Login(username,password) {
       const res = await singleton.postLogin(username,password);
        const access_token = res.data.access_token;

            localStorage.setItem("access_token",access_token);
            //navigate to(AdminScreen / ClientScreen);
        const response = await User.fetchUserData();
            return access_token;

    }
async SignUp(details)
{
    const res= await singleton.SignUp(details);
    if(res)
        {//navigate to(AdminScreen / ClientScreen);
           console.log(res);
           return true;
        }
    else
     return false
}
async ResetEmail(email)
{
    const res = await singleton.resetEmail(email);
    if (res)
    {
        return true;


    }
    return false;

}

async SignGoogle()
{
   return await singleton.SignWithGoogle();
}





}
const authSingleton = new AuthService();
export default authSingleton;