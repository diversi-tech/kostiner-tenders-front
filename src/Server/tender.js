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
    const response = await axios.get(`/get-all-Tender`, {
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `${token}`,
      },
      responseType: 'blob', // כדי להבטיח שהקבצים מתקבלים כבלוב
    });

    const contentDisposition = response.headers['content-disposition'];
    const filenames = getFilenamesFromContentDisposition(contentDisposition);
    const blobs = splitCSVBlobs(response.data, filenames.length);

    return blobs.map((blob, index) => ({
      filename: filenames[index],
      url: URL.createObjectURL(blob),
    }));
  } catch (error) {
    console.error('Error fetching Tenders:', error);
    return [];
  }
};

const getFilenamesFromContentDisposition = (contentDisposition) => {
  const filenames = [];
  const parts = contentDisposition.split(';');
  parts.forEach(part => {
    const matches = part.match(/filename="(.+?)"/);
    if (matches && matches[1]) {
      filenames.push(matches[1]);
    }
  });
  return filenames;
};

const splitCSVBlobs = (blob, numFiles) => {
  const size = Math.ceil(blob.size / numFiles);
  const blobs = [];
  for (let i = 0; i < numFiles; i++) {
    const start = i * size;
    const end = start + size;
    blobs.push(blob.slice(start, end));
  }
  return blobs;
};


export const addTender = async (file) => {
  try {
    const token = localStorage.getItem('authToken')
    const formData = new FormData();
    formData.append('tender', file); // הוסף את קובץ האקסל
    const response = await axios.post(`/post-upload-csv`, formData, {
      headers: {
        'Content-Type': 'multipart/form-data',
        'Authorization': `${token}`,
      },
    });

    return response.data;
  } catch (error) {
    console.error('Error adding Tender:', error);
    throw error; // כדי לטפל בשגיאות ספציפיות אם צריך
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