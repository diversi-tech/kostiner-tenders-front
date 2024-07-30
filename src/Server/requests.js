import axios from "../axios/axios";

// const apiUrl = 'http://localhost:5000/api'; // Adjust URL according to your server

const token = localStorage.getItem('authToken');

export const getAllRequests = async () => {
  try {
    console.log("getAllRequests");
    const token = localStorage.getItem('authToken');
    console.log(token);
    const response = await axios.get(`/get-all-requests`, {
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`,
      },
    });
    return response.data;
  } catch (error) {
    console.error('Error fetching requests:', error);
    return []; // Return an empty array or some default value
  }
};

export const getRequestsByStatus = async (status) => {
    try {
      console.log("getRequestsByStatus", status);
      const response = await axios.get(`/get-requests-by-status/${status}`);
      return response.data;
    } catch (error) {
      console.error(`Error fetching requests with status ${status}:`, error);
      throw error; // Rethrow to handle specific errors if needed
    }
  };
  

export const addRequest = async (request) => {
  try {
    console.log("addRequest", request);
    const response = await axios.post(`/post-request`, request);
    return response.data;
  } catch (error) {
    console.error('Error adding request:', error);
    throw error; // Rethrow to handle specific errors if needed
  }
};

export const updateRequest = async (requestId, updatedRequest) => {
  try {
    console.log("updateRequest", requestId, updatedRequest);
    const response = await axios.put(`/put-request/${requestId}`, updatedRequest);
    return response.data;
  } catch (error) {
    console.error(`Error updating request ${requestId}:`, error);
    throw error; // Rethrow to handle specific errors if needed
  }
};

// export const deleteRequest = async (requestId) => {
//   try {
//     console.log("deleteRequest", requestId);
//     await axios.delete(`${apiUrl}/delete-request/${requestId}`);
//     return true; // Assuming successful deletion returns true
//   } catch (error) {
//     console.error(`Error deleting request ${requestId}:`, error);
//     throw error; // Rethrow to handle specific errors if needed
//   }
// };
