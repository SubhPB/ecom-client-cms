// byimaan
import { BillboardTS } from "@/types/app";
import { apiRootURL } from "@/utils/constant";
import axios from "axios";

export const getBillboards = async (): Promise<BillboardTS[] | null> => {

    const targetApiUrl = apiRootURL + '/billboards';

    try {
        const res = await axios.get(
            targetApiUrl
        ).then( 
            r => r.data
        ).catch(
            err => {
                console.log('[GET-BILLBOARDS]: Error occured during fetching the billboards ', err);
                return null
            }
        );
        return res;
    } catch (err) {
        console.log('[GET-BILLBOARDS]: Error occured during fetching the billboards ', err);
        return null
    }
};


export const getBillboard = async (id : string): Promise<BillboardTS | null> => {

    const targetApiUrl = apiRootURL + `/billboards/${id}`;

    try {
        const res = await axios.get(
            targetApiUrl
        ).then( 
            r => r.data
        ).catch(
            err => {
                throw new Error(err)
            }
        );
        return res;
    } catch (err) {
        console.log('[GET-BILLBOARD]: Error occured during fetching the billboard ', err);
        return null
    }
};