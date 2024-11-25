
import { BE_URL } from '@/env';
import axios from 'axios';

export const searchProduct = async (searchText: string) => {
	const response = await axios.get(
		`${BE_URL}/api/products/searchProduct/${searchText}`,
	);
	return response.data.data;
};

export const searchProductByPriceRange = async (
	minPrice: number,
	maxPrice: number,
) => {
	const response = await axios.get(
		`${BE_URL}/api/products/searchProductByPriceRange/${minPrice}/${maxPrice}`,
	);
	return response.data.data;
};
