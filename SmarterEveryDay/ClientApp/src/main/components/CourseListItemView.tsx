import React from "react";
import {makeStyles} from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import {contrast} from "../../utils/Colors";

const useStyles = makeStyles((theme) => ({
    paper: {
        margin: 'auto',
        maxWidth: 500,
        padding: "0 0 15px 0",
        overflow: "hidden"
    },
    image: {
        width: 250,
        height: 200,
    },
    img: {
        margin: 'auto',
        display: 'block',
        maxWidth: '100%',
        maxHeight: '100%',
    },

    textContainer: {
        padding: theme.spacing(2)
    }
}));

const tagElement = (name: string) => {

    let colorHex: string[] = [
        "#FF3F34",
        "#2E2BFF",
        "#FFFC2A",
        "#31FF26",
        "#FA29FF"
    ]


    const backColor = colorHex[Math.floor(Math.random() * colorHex.length)];
    const frontColor = contrast(backColor);

    return (
        <div style={{background: backColor, padding: "6px 15px", margin: "5px", borderRadius: "4px"}}>
            <p style={{color: frontColor, margin: 0}}>#{name}</p>
        </div>
    )
}


export interface Props {
    name: string,
    description: string,
    preview: string,
    tags: string[]
}

export default ({name, description, preview, tags}: Props) => {
    const classes = useStyles();

    return (
        <div style={{margin: "10px"}}>
            <Paper className={classes.paper}>
                <Grid>
                    <img src={preview} alt={'Just an image'} className={classes.img}/>
                    <div className={classes.textContainer}>
                        <Typography variant="h4">{name}</Typography>
                        <Typography variant="subtitle1">{description}</Typography>
                    </div>

                    <div style={{display: "flex", marginLeft: "15px"}}>
                        {tags.map(x => tagElement(x))}
                    </div>
                </Grid>
            </Paper>
        </div>
    );
}
