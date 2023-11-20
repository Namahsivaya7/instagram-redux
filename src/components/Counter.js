import React, { useState } from "react";
import { Grid, Button } from "@mui/material";
import { Store } from "./redux-components/Store";
import { Increment,Decrement } from "./redux-components/PostSlice";
import { useDispatch, useSelector } from "react-redux";

export default function Counter() {
  
    const dispatch = useDispatch();
  
    const CountValue = useSelector((state) => state.insta.Count);
    return (
        <Grid>
            <Button onClick={()=>dispatch(Increment())}>+</Button>
            <p>{CountValue }</p>
            <Button onClick={()=>dispatch(Decrement())}>-</Button>
        </Grid>
    )
}