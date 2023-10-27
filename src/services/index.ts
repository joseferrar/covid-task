import { Dispatch } from '@reduxjs/toolkit'
import { REACT_URL } from "../api";
import { setCountryList } from "../features/countrySlice";
import { showLoading } from '../features/loadingSlice';
import { error } from 'console';


export const GetCountryService = (country: string) => (dispatch: Dispatch<any>) => {
    dispatch(showLoading(true))
    REACT_URL.get(`/countries/${country}`)
    .then((res) => {
        dispatch(setCountryList(res.data));
        dispatch(showLoading(false))
    })
    .catch((error) => {
        dispatch(showLoading(false))
        alert(error.message);

    })
    
    
};

