import axios from "axios";

const BASE_URL = 'https://dummyjson.com/';

export const fetchProducts = async () => {
    const response = await axios.get(`${BASE_URL}products`);
    return response.data;
};

export const fetchProductDetails = async (id: number) => {
    const response = await axios.get(`${BASE_URL}products/${id}`);
    return response.data;
};