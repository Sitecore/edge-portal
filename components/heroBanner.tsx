import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import React from "react";

const useStyles = makeStyles(() => ({
	title: {
		textAlign: "center",
		color: "white",
	},
	box: {
		backgroundColor: "#424242",
		padding: "5rem",
		borderRadius: "0",
		marginTop: 0,
		marginBottom: 0,
	}
}));

export default function HeroBanner() {
    const classes = useStyles();
    
    return (
        <Box my={4} className={classes.box}>
            <Typography className={classes.title} variant="h4" component="h1" gutterBottom>
                Sitecore Community
        </Typography>
            <Typography className={classes.title} variant="h5" component="h1" gutterBottom>
                Get up and running quickly
        </Typography>
        </Box>
    )
}