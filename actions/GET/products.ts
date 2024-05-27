// Byimaan

import axios from "axios";

import { ProductTS } from "@/types/app";
import { apiRootURL } from "@/utils/constant";

export const getProduct = async (id: string) : Promise<ProductTS | null> => {
    try {
        const response = await axios.get(
            apiRootURL+`/products/${id}`
            ).then(
                res => res.data
            ).catch( err => {
                throw new Error(err)
        })

        const data = response;
        return data

    } catch (error) {
        console.log( ' [GET-PRODUCT]: Error occured during fetcing the product ', error)
        return null
    };
};