import axios from 'axios';
const apiUrl = 'http://localhost:5000/api'; // Adjust URL according to your server
const list =[
    {  category: 'אלקטרוניקה', description: 'סמארטפון', monthlyPrice: 50, subscriptionPrice: 500 },
    {  category: 'ספרים', description: 'ספרי צדיקים', monthlyPrice: 10, subscriptionPrice: 100 },
    {  category: 'ריהוט', description: 'כיסא משרדי', monthlyPrice: 20, subscriptionPrice: 200 },
    {  category: 'כושר', description: 'מזרנית יוגה', monthlyPrice: 5, subscriptionPrice: 50 },
    {  category: 'קוסמטיקה', description: 'קרם לחות לפנים', monthlyPrice: 30, subscriptionPrice: 300 },
]
export const getAllProducts = async () => {
  try {
    console.log("getAllProducts");
    const response = await axios.get(`${apiUrl}/get-all-products`);
    return response.data;
  } catch (error) {
    console.error('Error fetching products:', error);
    return list;
  }
};
export const getProductByCategory = async (category) => {
  try {
    console.log("getProductByCategory",category)
    const response = await axios.get(`${apiUrl}/get-product-by-category/${category}`);
    return response.data;
  } catch (error) {
    console.error(`Error fetching product ${category}:`, error);
    throw error; // Rethrow to handle specific errors if needed
  }
};
export const addProduct = async (product) => {
  try {
    console.log("addProduct",product);
    const response = await axios.post(`${apiUrl}/post-product`, product);
    return response.data;
  } catch (error) {
    console.error('Error adding product:', error);
    throw error; // Rethrow to handle specific errors if needed
  }
};
export const updateProduct = async (category, updatedProduct) => {
  try {
    console.log("updateProduct",category,updatedProduct);
    const response = await axios.put(`${apiUrl}/put-product/${category}`, updatedProduct);
    return response.data;
  } catch (error) {
    console.error(`Error updating product ${category}:`, error);
    throw error; // Rethrow to handle specific errors if needed
  }
};
export const deleteProduct = async (category) => {
  try {
    console.log("deleteProduct",category);
    await axios.delete(`${apiUrl}/delete-product/${category}`);
    return true; // Assuming successful deletion returns true
  } catch (error) {
    console.error(`Error deleting product ${category}:`, error);
    throw error; // Rethrow to handle specific errors if needed
  }
};