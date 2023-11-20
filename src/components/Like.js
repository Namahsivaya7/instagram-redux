import React, { useState } from "react";

import { IconButton, colors } from "@mui/material";

import FavoriteIcon from '@mui/icons-material/Favorite';


export default function LikedFunction() {
    const [like, setLike] = useState(0)
    const [likeactive, setLikeActive] = useState(false)


    function Likefn() {
        if (likeactive) {
            setLikeActive(false)
            setLike(like - 1)

        } else {
            setLikeActive(true)
            setLike(like + 1)


        }

    }

    return (
        <div className="App">
            <IconButton aria-label="">
                <FavoriteIcon onClick={Likefn} />{like}
            </IconButton>
        </div>
    )
}