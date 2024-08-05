import axios from '../axios/axios';

export const getAllCategories = async () => {
  const token = localStorage.getItem('authToken');
  try {
    const response = await axios.get(`/get-all-products`, {
      headers: {
        'Authorization': token,
        'Content-Type': 'application/json',
      },
    });
    return response.data;
  } catch (error) {
    console.error('Error fetching categories:', error);
    return null;
  }
};

export const getProductByCategory = async (category) => {
  try {
    const response = await axios.get(`/get-product-by-category/${category}`);
    return response.data;
  } catch (error) {
    console.error(`Error fetching product ${category}:`, error);
    throw error;
  }
};


export const addCategory = async (product) => {
  const token = localStorage.getItem('authToken');
  try {
    const response = await axios.post(`/post-product`, product, {
      headers: {
        'Authorization': token,
        'Content-Type': 'application/json',
      },
    });
    return response.data;
  } catch (error) {
    console.error('Error adding category:', error);
    throw error;
  }
};

export const updateCategory = async (category, updatedProduct) => {
  const token = localStorage.getItem('authToken');
  try {
    const response = await axios.put(`/put-product/${category}`, updatedProduct, {
      headers: {
        'Authorization': token,
        'Content-Type': 'application/json',
      },
    });
    return response.data;
  } catch (error) {
    console.error(`Error updating category ${category}:`, error);
    throw error;
  }
};

export const deleteCategory = async (category) => {
  const token = localStorage.getItem('authToken');
  try {
    await axios.delete(`/delete-product/${category}`, {
      headers: {
        'Authorization':token,
      },
    });
    return true;
  } catch (error) {
    console.error(`Error deleting category ${category}:`, error);
    throw error;
  }
};
