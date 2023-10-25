import React from 'react'
import PropTypes from "prop-types";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";
import { useNavigate } from 'react-router-dom';

function CountryCard({ country_item, index }: any) {
    const navigate = useNavigate();
    return (
        <Grid item xs={12} sm={3} md={3} key={index}>
            <Card style={{ borderRadius: 12 }} elevation={3}>
                <CardActionArea style={{ backgroundColor: "#F5F5F5" }} onClick={() => navigate(`/${country_item?.country}`, { state: country_item })}>
                    <CardMedia
                        component="img"
                        width="auto"
                        height="150"

                        image={country_item?.countryInfo?.flag}
                        alt={country_item?.country}
                    />
                    <CardContent>
                        <Typography
                            gutterBottom
                            fontWeight="bold"
                            fontFamily={"Roboto"}
                            textAlign="center"
                            fontSize={18}
                        >
                            {country_item?.country}
                        </Typography>
                    </CardContent>
                </CardActionArea>
            </Card>
        </Grid>
    )
}

export default CountryCard;

CountryCard.propTypes = {
    country_item: PropTypes.object,
    index: PropTypes.number
};