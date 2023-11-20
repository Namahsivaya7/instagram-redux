import { Box, Button, Grid, List, ListItem, Tab, Tabs, Typography } from "@mui/material";
import React, { useState } from "react";
import SettingsIcon from "@mui/icons-material/Settings";
import PortraitIcon from '@mui/icons-material/Portrait';
import CopyrightIcon from '@mui/icons-material/Copyright';

import PropTypes from "prop-types";
import { initializeUseSelector, useSelector } from "react-redux/es/hooks/useSelector";
import Menubar from "./Menubar";


function CustomTabPanel(props) {
    const { children, value, index, ...other } = props;

    return (

        <div
            role="tabpanel"
            hidden={value !== index}
            id={'simple - tabpanel - ${index}'}
            aria-labelledby={'simple - tab - ${index}'}
            {...other}
        >
            {value === index && (
                <Box sx={{ p: 3 }}>
                    <Typography>{children}</Typography>
                </Box>
            )}
        </div >
    );
}

CustomTabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.number.isRequired,
    value: PropTypes.number.isRequired,
};

function a11yProps(index) {
    return {
        id: 'simple-tab-${ index }',
        "aria-controls": 'simple-tabpanel-${ index }',
    };
}

export default function Profile() {
    const Posts = useSelector((state) => state.insta.POSTS);
    const [value, setValue] = useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };
    return (
        (CustomTabPanel.propTypes = {
            children: PropTypes.node,
            index: PropTypes.number.isRequired,
            value: PropTypes.number.isRequired,
        }),
        (
            <Grid>
                <Grid container sx={{ marginTop: "25px" }}>
                    {/* <Grid>{Menubar}</Grid> */}
                    <Grid item xs={2} style={{ borderRight: "1px solid gray" }}>{<Menubar />}</Grid>
                    <Grid xs={2}></Grid>
                    <Grid item xs={6} >
                        <Grid container>
                            <Grid item>

                                <img
                                    src="https://scontent.fhyd9-1.fna.fbcdn.net/v/t39.30808-6/357704998_2210843052586746_3226156400605024797_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=5f2048&_nc_ohc=3hncQNmD6xYAX9gsmAf&_nc_ht=scontent.fhyd9-1.fna&oh=00_AfCTups-7RLgxmYkYexprLY9r1EnaRr2sSvhUyRK36KPtA&oe=655A6148"
                                    style={{
                                        width: 150,
                                        height: 150,
                                        borderRadius: "50%",
                                    }} />
                            </Grid>
                            <Grid item xs={1}></Grid>
                            <Grid item >
                                <div style={{ display: 'flex', flexDirection: "row", height: "35px", gap: "15px" }}>
                                    <Typography style={{ marginTop: "6px", fontSize: "20px" }}>__siva__</Typography>
                                    <Button style={{ background: "#e7e7e7e0", color: "black", borderRadius: "10px" }}>
                                        Edit Profile
                                    </Button>
                                    <Button style={{ background: "#e7e7e7e0", color: "black", borderRadius: "10px" }}>
                                        View Archive
                                    </Button>
                                    <Button style={{ background: "#e7e7e7e0", color: "black", borderRadius: "10px" }}>
                                        Ad tools
                                    </Button>
                                    <i style={{ marginTop: "5px" }}><SettingsIcon /></i>
                                </div>
                                <br />
                                {/* <Typography style={{ marginTop: 40 }}>Powerstar fan ☺</Typography> */}

                                <div style={{ marginLeft: "0px", display: 'flex', flexDirection: "row", gap: "20px" }}>
                                    <Typography style={{ marginTop: 1 }}><b>{Posts.length}</b> Posts</Typography>
                                    <Typography style={{ marginTop: 1 }}><b>200</b> followers</Typography>
                                    <Typography style={{ marginTop: 1 }}><b>76</b> following</Typography>
                                </div>
                                <div style={{ margin: "0px", display: 'flex', flexDirection: "row", gap: "20px", height: "50px" }}>
                                    <h5>siva</h5>
                                </div>
                                <div style={{ margin: "0px", display: 'flex', flexDirection: "row" }}>
                                    <p>Power star fan ✊</p>
                                    <p>🔥</p>
                                </div>
                            </Grid>
                        </Grid>




                        <Box sx={{ width: "100%" }}>
                            <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
                                <Tabs
                                    value={value}
                                    onChange={handleChange}
                                    aria-label="basic tabs example" style={{ marginLeft: 200 }}
                                >
                                    <Tab label="POSTS" {...a11yProps(0)} />
                                    <Tab label="SAVED" {...a11yProps(1)} />
                                    <Tab label="TAGGED" {...a11yProps(2)} />
                                </Tabs>
                            </Box>
                            <div style={{ marginLeft: 300 }}>
                                <CustomTabPanel value={value} index={0}>
                                    <Box>
                                        <div style={{ display: "flex", flexWrap: "wrap", width: 500 }}>

                                            {Posts.map(({ images }, i) => (
                                                

                                                <List>
                                                    <ListItem><img src={images} style={{ width: 100 }} /></ListItem>
                                                </List>

                                            ))}
                                        </div>
                                    </Box>

                                </CustomTabPanel>
                                <CustomTabPanel value={value} index={1} style={{ display: "flex", justifyContent: "center", margin: 0 }}>
                                    <h1 style={{ marginLeft: "-70px" }}>No saved posts</h1>
                                </CustomTabPanel>
                                <CustomTabPanel value={value} index={2} style={{ display: "flex", justifyContent: "center", margin: 0 }}>
                                    <PortraitIcon style={{ height: "70px", width: "70px", borderRadius: "50%" }} />
                                    <h1 style={{ marginLeft: "-70px" }}>Photos of you</h1>
                                </CustomTabPanel>
                            </div>
                        </Box>
                        <footer style={{ display: "flex", justifyContent: "space-around", fontSize: 10, marginTop: "250px" }}>

                            <ul>Meta</ul>
                            <ul>About</ul>
                            <ul>Blog</ul>
                            <ul>Jobs</ul>
                            <ul>Help</ul>
                            <ul>API</ul>
                            <ul>Privacy</ul>
                            <ul>Terms</ul>
                            <ul>Locations</ul>
                            <ul>Instagram Lite</ul>
                            <ul>Threads</ul>
                            <ul>Contact Uploading & Non-Users</ul>
                            <ul>Meta Verified</ul>


                        </footer>
                    </Grid>
                    <Grid xs={3}></Grid>
                </Grid>
            </Grid>
        )
    );
}