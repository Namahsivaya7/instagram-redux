import * as React from 'react';
import { useState } from 'react';
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import Avatar from '@mui/material/Avatar';
import IconButton, { IconButtonProps } from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { red } from '@mui/material/colors';
// import FavoriteIcon from '@mui/icons-material/Favorite';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import ModeCommentIcon from '@mui/icons-material/ModeComment';
import SendIcon from '@mui/icons-material/Send';
// import ShareIcon from '@mui/icons-material/Share';
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import FavoriteBorder from '@mui/icons-material/FavoriteBorder';
import { Box, Grid } from '@mui/material';
import FavoriteIcon from '@mui/icons-material/Favorite';
// import Menubar from './Menubar';
import LikedFunction from './Like';
import Comment from './Comment';
import Rightpage from './Suggetions';
import Statuses from './Statuses';
import { useDispatch, useSelector } from 'react-redux';
import Menubar from './Menubar';
import ImageCarousel from './Carousal';
import { postCreation, updatedPost } from './redux-components/PostSlice';
// import LikedFunction from './Like';
//import { useSelector } from 'react-redux';



export default function MyPosts() {

    const Posts = useSelector((state) => state.insta.POSTS);
    const likesCount = useSelector((state) => state.insta.likesCount);
    const [count, setCount] = useState(0);
    const [colour, setColour] = useState("");
    const dispatch = useDispatch();
    const likeHandle = (event, index) => {

        let count = Posts[index].likesCount ?? 0;
        count += 1;

        event.preventDefault();
        dispatch(updatedPost({ likesCount: count, index }));
        // const updatedPost = postobj[index];
        // updatedPost.liked = !updatedPost.liked;
        // const updatedPosts = [...postobj.slice(0, index), updatedPost, ...postobj.slice(index + 1),];
        // setPostObj(updatedPosts);
    }


    return (

        <Grid container sx={{ margin: "10px 0" }}>

            <Grid item xs={3}><Box>{<Menubar />}</Box></Grid>
            <Grid item xs={6}>
                <header><Statuses /></header>

                {Posts.map(({ author, caption, images, likesCount }, i) => (
                    <Card sx={{ maxWidth: 468, height: 650, marginTop: "20px" }}>
                        <CardHeader
                            avatar={
                                <Avatar sx={{ bgcolor: red[500], }} aria-label="recipe">
                                    <img src="https://instagram.fvga4-1.fna.fbcdn.net/v/t51.2885-19/357634057_288806190285084_5545977390595115804_n.jpg?stp=dst-jpg_s320x320&_nc_ht=instagram.fvga4-1.fna.fbcdn.net&_nc_cat=100&_nc_ohc=rsj1U9lOOUIAX-4jUzr&edm=AOQ1c0wBAAAA&ccb=7-5&oh=00_AfCQ9_FcjOE30MXyI7qqyVMSUqPjGy2mGPxwtHOEbE8Riw&oe=6559CF1D&_nc_sid=8b3546" style={{ width: 40, height: 40, borderRadius: 50 }} />
                                </Avatar>
                            }
                            action={
                                <IconButton aria-label="settings">
                                    <MoreVertIcon />
                                </IconButton>
                            }
                            title={author}
                        // subheader="1 day ago"

                        />
                        <ImageCarousel images={images} />
                        {/* <CardMedia
                            component="img"
                            height="380"
                            width="460"
                            image={images}

                        /> */}
                        <CardContent>

                            <Typography>{caption}</Typography>
                        </CardContent>

                        <CardActions disableSpacing>
                            <IconButton aria-label="">
                                <FavoriteIcon
                                    // color={liked ? "error" : "inherit"} 
                                    onClick={(event) => likeHandle(event, i)}
                                    // onClick={likeHandle}
                                    color={colour}
                                />

                            </IconButton>
                            <p>{likesCount}</p>
                            <IconButton aria-label="">
                                <ModeCommentIcon />
                            </IconButton>
                            <IconButton aria-label="">
                                <SendIcon />
                            </IconButton>
                            <IconButton aria-label="Bookmark border" sx={{ margin: '0 280px', }}>
                                <BookmarkBorderIcon />
                            </IconButton>

                        </CardActions>
                        <Comment />
                    </Card>
                ))
                }
            </Grid>
            <Grid item xs={3}><Rightpage /></Grid>

        </Grid>

    );
}
