import React from 'react'
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import { useLocation } from 'react-router-dom'
import ActiveCard from '../components/Card/ActiveCard';

function CountryDetails() {
    const location = useLocation();
    const CountryDetail = location.state as any
    console.log('CountryDetail', CountryDetail);

    return (
            <Box sx={{ flexGrow: 1 }}>
                <Grid container spacing={3}>
                    <ActiveCard title={"Active"} description={CountryDetail?.active}/>
                    <ActiveCard title={"Cases"} description={CountryDetail?.cases}/>
                    <ActiveCard title={"Deaths"} description={CountryDetail?.deaths}/>
                    <ActiveCard title={"Recovered"} description={CountryDetail?.recovered}/>
                    <ActiveCard title={"Critical"} description={CountryDetail?.critical}/>
                    <ActiveCard title={"Population"} description={CountryDetail?.population}/>
                </Grid>
            </Box>
    )
}

export default CountryDetails;