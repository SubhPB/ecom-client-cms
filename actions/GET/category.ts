// byimaan

import { getCategoriesApiURL } from "@/utils/constant";
import axios from "axios";

import { CategoryTS } from "@/types/app";

export const getCategories = async () : Promise<CategoryTS[] | null> => {
    try {
        const response = await axios.get(
            getCategoriesApiURL
            ).then(
                res => res.data
            ).catch( err => {
                throw new Error(err)
            })

        const data = response;
        return data

    } catch (error) {
        console.log( ' [GET-CATEGORIES]: Error occured during fetcing the categories ', error)
        return null
    };
};

export const getCategory = async (id: string) : Promise<CategoryTS | null> => {
    try {
        const response = await axios.get(
            getCategoriesApiURL+`/${id}`
            ).then(
                res => res.data
            ).catch( err => {
                throw new Error(err)
        })

        const data = response;
        return data

    } catch (error) {
        console.log( ' [GET-CATEGORY]: Error occured during fetcing the categories ', error)
        return null
    };
};