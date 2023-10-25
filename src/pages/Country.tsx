import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import { GetCountryService } from '../services';
import { RootState, useAppDispatch } from '../features';
import CountryCard from '../components/Card/CountryCard';

function Country() {
    const dispatch = useAppDispatch()
    const { country } = useSelector((state: RootState) => state.countries)
    const typeArray = Array.isArray(country)

    useEffect(() => {
        dispatch(GetCountryService(''))
    }, [dispatch])

    return (
        <div>
            <Box sx={{ flexGrow: 1 }}>
                {typeArray ? <Grid container spacing={3}>
                    {country && country.map((country_item: any, index: number) => (
                        <CountryCard country_item={country_item} index={index} />
                    ))}
                </Grid> :
                    <Grid container spacing={3}>
                        <CountryCard country_item={country} />
                    </Grid>}
            </Box>
        </div>
    )
}

export default Country;