import { Grid, Box, Typography, colors } from "@mui/material";
import { grey } from "@mui/material/colors";
import React from "react";
import useMediaQuery from '@mui/material/useMediaQuery';

export default function Rightpage() {
    const suggest = [
        {
            image: "https://images.unsplash.com/photo-1581456495146-65a71b2c8e52?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8aHVtYW58ZW58MHx8MHx8fDA%3D&w=1000&q=80",
            content: "Srihari",
            flag: "Follow",
        },
        {
            image: "https://images.pexels.com/photos/1767434/pexels-photo-1767434.jpeg?cs=srgb&dl=pexels-kawaiiart-1767434.jpg&fm=jpg",
            content: "Divya",
            flag: "Follow",
        },
        {
            image: "https://auto.mahindra.com/-/media/project/mahindra/dotcom/mahindra/dark-theme-mahindra-images/gallery/xuv700/photos/popup-images/big04.jpg?rev=28b1d6e9ae6f4e08b7fccd67cdbc1cd9",
            content: "Vandhana",
            flag: "Follow",
        },
        {
            image: "https://imgv3.fotor.com/images/slider-image/A-clear-image-of-a-woman-wearing-red-sharpened-by-Fotors-image-sharpener.jpg",
            content: "Sai",
            flag: "Follow",
        },
        {
            image:
                "https://images.firstpost.com/wp-content/uploads/2016/10/keerthy-suresh-380.jpg?impolicy=website&width=1200&height=900",
            content: "Tulasi",
            flag: "Follow",
        },
    ];
    return (
        <Grid style={{ marginTop: 50, }}>
            <Grid style={{ display: "flex" }}>
                <Grid>
                    <img
                        style={{ width: 40, borderRadius: 50 }}
                        src="https://scontent.fvga4-1.fna.fbcdn.net/v/t39.30808-6/357704998_2210843052586746_3226156400605024797_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=a2f6c7&_nc_ohc=z30OCPiMZi4AX__rsSi&_nc_ht=scontent.fvga4-1.fna&oh=00_AfCMQwSVktOSlvicmqf_MrQc3M05-OTaXVk-C-_gxkDMrg&oe=65210808" style={{ width: 40, height: 40, borderRadius: 50 }}
                    />
                </Grid>
                <Grid style={{ marginTop: -25, paddingLeft: 10 }}>
                    <h4>__Siva1__</h4>
                    <Typography>Siva</Typography>
                </Grid>
            </Grid>
            <Grid>
                <Grid style={{ display: "flex" }}>
                    <p>Suggested for you</p>
                    <p style={{ paddingLeft: 130 }}>see all</p>
                </Grid>
                <Grid>
                    {suggest.map(({ image, content, flag }, i) => (
                        <Box sx={{ display: "flex" }}>
                            <p>
                                <img
                                    style={{
                                        height: 60,
                                        width: 60,
                                        borderRadius: 50,
                                    }}
                                    src={image}
                                />
                            </p>
                            <p style={{ marginTop: -1, paddingLeft: 10 }}>
                                <p> <b>{content}</b></p>
                                <p style={{ color: grey }}>follows you</p>
                            </p>
                            <p style={{ paddingLeft: 120, paddingTop: 20 }}>{flag}</p>
                        </Box>
                    ))}
                </Grid>
            </Grid>
        </Grid>
    );
}