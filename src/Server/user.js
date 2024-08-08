import axios from "../axios/axios";

export const getAllUsers = async () => {
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
    return response.data;
  } catch (error) {
    console.error('Error fetching users:', error);
    console.error('Response:', error.response);
    return null;
  }
  
};
export const getUserById = async () => {
  console.log("getUserById");
  const token = localStorage.getItem('authToken');
  try {
    const response = await axios.get(`get-id-user/${userId}`, {
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

export const putUser = async()=>{
  const token = localStorage.getItem('authToken');
try{
  await axios.put('/put-user',{
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