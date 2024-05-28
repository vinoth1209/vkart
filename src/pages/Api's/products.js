import axios from "axios";

export const BASE_URI = "http://localhost:4091";

// < ------------------------------- Get Products ------------------------------- >

const api = axios.create({
  baseURL: BASE_URI,
  headers: {
    "Content-Type": "application/json",
    // Add any other headers you need, like authorization tokens
  },
});

export const getProducts = async (category) => {
  try {
    const response = await api.get(`/products/?category=${category}`);
    console.log("Product", response?.data, "category", category);
    return response.data;
  } catch (error) {
    console.error("Error fetching products:", error.message);
    throw error;
  }
};

// Define other API functions as needed...

export default api;

// < ------------------------------- Get Product By Id ------------------------------- >
export const getProductsById = async (id) => {
  try {
    const response = await api.get(`${BASE_URI}/products/${id}`);
    console.log("Product", response?.data, "id", id);
    return response.data;
  } catch (error) {
    console.error("Error fetching products:", error.message);
    throw error;
  }
};
