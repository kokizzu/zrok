import * as React from "react";
import {AgentObject} from "./model/overview.ts";
import {ShareDetail} from "./api";
import {AppBar, Box, Button, Card, Chip, Grid2, Toolbar, Typography} from "@mui/material";
import ShareIcon from "@mui/icons-material/Share";
import DeleteIcon from "@mui/icons-material/Delete";

interface ShareCardProps {
    shareObject: AgentObject;
}

function ShareCard({ shareObject }: ShareCardProps) {
    let frontends = new Array<React.JSX.Element>();
    let share = (shareObject.v as ShareDetail);
    share.frontendEndpoint!.map(fe => {
        frontends.push(<a key={share.token} href={fe} target="_">{fe}</a>);
    });

    return (
        <Card>
            <AppBar position="sticky">
                <Toolbar variant="dense">
                    <ShareIcon />
                    <Grid2 container sx={{ flexGrow: 1 }}>
                        <Grid2 display="flex" justifyContent="center" size="grow">
                            <Typography variant="h6" component="div">{share.token}</Typography>
                        </Grid2>
                    </Grid2>
                    <Grid2 container>
                        <Grid2 display="flex" justifyContent="right">
                            {share.shareMode === "public" && (
                                <Chip label={share.shareMode} size="small" color="success" />
                            )}
                            {share.shareMode === "private" && (
                                <Chip label={share.shareMode} size="small" color="warning" />
                            )}
                            <Chip label={share.backendMode} size="small" color="info" />
                        </Grid2>
                    </Grid2>
                </Toolbar>
            </AppBar>
            <Box sx={{ p: 2, textAlign: "center" }}>
                <Typography variant="h6" component="div">
                    {share.backendEndpoint} &rarr; {frontends} <br/>
                </Typography>
            </Box>
            <Grid2 container sx={{ flexGrow: 1 }}>
                <Grid2 display="flex" justifyContent="right" size="grow">
                    <Button variant="contained"><DeleteIcon /></Button>
                </Grid2>
            </Grid2>
        </Card>
    );
}

export default ShareCard;