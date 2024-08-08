import axios from "../axios/axios";

// const apiUrl = 'http://localhost:5000/api'; // Adjust URL according to your server


export const getAllRequests = async () => {
  console.log("gatallre");
  try {
    console.log("getAllRequests");
    const token = localStorage.getItem('authToken');
    console.log(token);
    const response = await axios.get(`/get-unapproved-requests`, {
      headers: {
        'Content-Type': 'application/json',
        'Authorization': token,
      },
    });
    console.log(response.data);
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
    console.log("add");
    const token = localStorage.getItem('authToken');
    console.log(token);
    try {
      const response = await axios.post(`/post-request/${request}`, {
        headers: {
          'Content-Type': 'application/json',
          'Authorization': token,
        },
      });
      return response.data;
    } catch (error) {
      console.error('Error adding request:', error);
      throw error;
    }
  };

export const updateRequests = async (tenderId, updatedRequests) => {
  const token = localStorage.getItem('authToken');
  try {
    const response = await axios.put(`/approve-request/${tenderId}`, updatedRequests, {
      headers: {
        'Authorization': token,
        'Content-Type': 'application/json',
      },
    });
    return response.data;
  } catch (error) {
    console.error(`Error updating Requests ${tenderId}:`, error);
    throw error;
  }
};

export const deleteRequest = async (request) => {
  const token = localStorage.getItem('authToken');
  console.log("tel",token);
  try {
    await axios.delete(`/delete-request/${request}`, {
      headers: {
        'Authorization':token,
      },
    });
    return true;
  } catch (error) {
    console.error(`Error deleting request ${request}:`, error);
    throw error;
  }
};
