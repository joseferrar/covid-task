import React from 'react'
import PropTypes from "prop-types";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";

function ActiveCard({ title, description }: any) {
    return (
        <Grid item xs={12} sm={3} md={3}>
            <Card style={{ borderRadius: 2 }} elevation={3}>
                <Typography align='center' variant="h5" fontWeight="bold"
                    fontFamily={"Roboto"} marginTop={3}>
                    {title}
                </Typography>
                <CardContent>
                    <Typography
                        color={"green"}
                        gutterBottom
                        fontWeight="bold"
                        fontFamily={"Roboto"}
                        textAlign="center"
                        fontSize={18}
                        letterSpacing={2}

                    >
                        {description}
                    </Typography>
                </CardContent>
            </Card>
        </Grid>
    )
}

export default ActiveCard

ActiveCard.propTypes = {
    title: PropTypes.string,
    description: PropTypes.number
};

