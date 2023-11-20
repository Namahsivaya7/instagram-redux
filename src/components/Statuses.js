import * as React from "react";
import { Grid, Box } from "@mui/material";


const status = [
    {
        image:
            "https://scontent.fvga4-1.fna.fbcdn.net/v/t39.30808-6/357704998_2210843052586746_3226156400605024797_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=a2f6c7&_nc_ohc=z30OCPiMZi4AX__rsSi&_nc_ht=scontent.fvga4-1.fna&oh=00_AfCMQwSVktOSlvicmqf_MrQc3M05-OTaXVk-C-_gxkDMrg&oe=65210808",
        title: "Siva",
    },

    {
        image:
            "https://scontent.fvga4-1.fna.fbcdn.net/v/t39.30808-6/359426399_1311423326419640_2636901529652643073_n.jpg?stp=dst-jpg_p843x403&_nc_cat=101&ccb=1-7&_nc_sid=49d041&_nc_ohc=0dKls9P26vwAX8JXgyw&_nc_ht=scontent.fvga4-1.fna&oh=00_AfAJ-VHB8yuNmEOKjgU_Fa3Hs_rxA445CZmkfVO_3XHFEg&oe=6522C4F6",
        title: "Ganesh",
    },
    {
        image:
            "https://scontent.fhyd9-1.fna.fbcdn.net/v/t1.18169-9/26239314_759077674303101_8477076636065463414_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=174925&_nc_ohc=4DTaRvxtgoMAX97utVV&_nc_ht=scontent.fhyd9-1.fna&oh=00_AfDUJ8EizxNs1WzK4upz1eUZkbzgTShcTEYlR_ns_fYdAQ&oe=653D3CE3",
        title: "tulasi",
    },
    {
        image:
            "https://scontent.fhyd9-1.fna.fbcdn.net/v/t1.18169-9/16114956_596090137268523_6901016147671421110_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=174925&_nc_ohc=fPtJg00Y6LQAX_AXrLR&_nc_ht=scontent.fhyd9-1.fna&oh=00_AfBhtQHSwM9_R9WRHpSYpQ6QUQQeoVIXCNWQ0ZtH8Zu2Ag&oe=653D34D3",
        title: "Durga",
    },
];

export default function Statuses() {
    return (


        <Grid container style={{ padding: 15, margin: 10 }}>
            {status.map(({ title, image }, i) => (
                <Grid item>
                    <Box style={{ display: "flex", padding: 5 }}>
                        <img
                            src={image}
                            style={{ height: 66, width: 66, borderRadius: 50, border: "5px solid #C13584" }}
                        />
                    </Box>
                    <Box> {title}</Box>
                </Grid>
            ))}
        </Grid>
    );
}