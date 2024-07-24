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
const token = localStorage.getItem('authToken')
export const getAllCategories = async () => {
  try {
    console.log("getAllCategories");
    const token = localStorage.getItem('authToken')
    console.log(token);
    const response = await axios.get(`/get-all-category`, {
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `${token}`,
      },
    });
    return response.data;
  } catch (error) {
    console.error('Error fetching categories:', error);
    return list;
  }
};
export const getProductByCategory = async (category) => {
  try {
    console.log("getProductByCategory", category)
    const response = await axios.get(`/get-product-by-category/${category}`);
    return response.data;
  } catch (error) {
    console.error(`Error fetching product ${category}:`, error);
    throw error; // Rethrow to handle specific errors if needed
  }
};
export const addCategory = async (product) => {
  try {
    console.log("addCategory", product);
    const response = await axios.post(`/post-category`, product);
    return response.data;
  } catch (error) {
    console.error('Error adding category:', error);
    throw error; // Rethrow to handle specific errors if needed
  }
};
export const updateCategory = async (category, updatedProduct) => {
  try {
    console.log("updateCategory", category, updatedProduct);
    const response = await axios.put(`/put-category/${category}`, updatedProduct);
    return response.data;
  } catch (error) {
    console.error(`Error updating category ${category}:`, error);
    throw error; // Rethrow to handle specific errors if needed
  }
};
export const deleteCategory = async (category) => {
  try {
    console.log("deleteCategory", category);
    await axios.delete(`/delete-category/${category}`);
    return true; // Assuming successful deletion returns true
  } catch (error) {
    console.error(`Error deleting category ${category}:`, error);
    throw error; // Rethrow to handle specific errors if needed
  }
};