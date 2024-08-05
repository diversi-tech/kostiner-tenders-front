// import axios from 'axios';
import axios from "../axios/axios";
// const apiUrl = 'http://localhost:5000/api'; // Adjust URL according to your server
const list = [
  { category: 'אלקטרוניקה', description: 'סמארטפון', monthlyPrice: 50, subscriptionPrice: 500 },
  { category: 'ספרים', description: 'ספרי צדיקים', monthlyPrice: 10, subscriptionPrice: 100 },
  { category: 'ריהוט', description: 'כיסא משרדי', monthlyPrice: 20, subscriptionPrice: 200 },
  { category: 'כושר', description: 'מזרנית יוגה', monthlyPrice: 5, subscriptionPrice: 50 },
  { category: 'קוסמטיקה', description: 'קרם לחות לפנים', monthlyPrice: 30, subscriptionPrice: 300 },
]

export const getAllTenders = async () => {
  try {
    console.log("getAllTenders");
    const token = localStorage.getItem('authToken');
    console.log(token);
    const response = await axios.get('/get-all-tenders', {
      headers: {
        'Content-Type': 'application/json',
        'Authorization': token,
      },
    });
    console.log(response.data);
    return response.data;
  } catch (error) {
    console.error('Error fetching tenders:', error);
    throw error;
  }
};






export const addTender = async (file) => {
  try {
    const token = localStorage.getItem('authToken');
    const formData = new FormData();
    formData.append('file', file); // הוסף את הקובץ עם המפתח 'file' או כפי שדורש השרת
    
    const response = await axios.post(`/post-upload-csv`, formData, {
      headers: {
        'Content-Type': 'multipart/form-data',
        'Authorization': token,
      },
    });

    return response.data;
  } catch (error) {
    console.error('Error adding Tender:', error);
    throw error; // לטיפול בשגיאות ספציפיות אם צריך
  }
};


export const updateTender = async (Tender, updatedProduct) => {
  try {
    console.log("updateTender", Tender, updatedProduct);
    const response = await axios.put(`/put-Tender/${Tender}`, updatedProduct);
    return response.data;
  } catch (error) {
    console.error(`Error updating Tender ${Tender}:`, error);
    throw error; // Rethrow to handle specific errors if needed
  }
};
export const deleteTender = async (Tender) => {
  try {
    console.log("deleteTender", Tender);
    await axios.delete(`/delete-Tender/${Tender}`);
    return true; // Assuming successful deletion returns true
  } catch (error) {
    console.error(`Error deleting Tender ${Tender}:`, error);
    throw error; // Rethrow to handle specific errors if needed
  }
};