import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { SingleAnnoucement } from "./singleAnnoucement";
import { Announcement } from "../interfaces/announcements";

export const useStyles = makeStyles((theme) => ({
	gridPadding: {
		padding: 15,
	},
	announcements: {
		marginBottom: "25px",
	},
	date: {
		float: "right",
		fontWeight: "bold",
	},
	articleList: {
		"&:before": {
			content: "''",
			backgroundColor: "#d4d9df",
			display: "inline-block",
			position: "absolute",
			left: "12px",
			width: "2px",
			height: "100%",
			zIndex: 400,
		},
	},
	listItem: {
		"&:before": {
			content: "''",
			display: "inline-block",
			position: "absolute",
			borderRadius: "50%",
			border: "3px solid #fe2911",
			left: "0px",
			width: "20px",
			height: "20px",
			zIndex: 400,
		},
	},
	listItemText: {
		margin: "10px 0px",
		paddingLeft: "20px",
	},
}));

function generateListItems(element: any) {
	return [0, 1, 2, 4, 5, 6].map((value) =>
		React.cloneElement(element, {
			key: value,
		})
	);
}

export function LatestNewsAndArticles({ announcements }: { announcements: Announcement[] }) {
	const classes = useStyles();

	return (
		<Grid container justify="center" spacing={5} className={classes.gridPadding}>
			<Grid item xs={12} md={8}>
				<Box>
					<Typography variant="h3" component="h3" gutterBottom>
						Latest News
					</Typography>
					<List className={classes.articleList}>
						{generateListItems(
							<ListItem className={classes.listItem}>
								<ListItemText
									className={classes.listItemText}
									primary={
										<React.Fragment>
											{"Lorem ipsum dolor sit ametn"}
											<Typography component="span" className={classes.date} color="textPrimary">
												March 15, 2021
											</Typography>
										</React.Fragment>
									}
									secondary="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque scelerisque diam non nisi semper, et elementum lorem ornare. Maecenas placerat facilisis mollis. Duis sagittis ligula in sodales vehicula...."
								/>
							</ListItem>
						)}
					</List>
				</Box>
			</Grid>
			<Grid item xs={12} md={4}>
				<Box>
					<Typography variant="h3" component="h3" className={classes.announcements} gutterBottom>
						ANNOUNCEMENTS
					</Typography>

					{announcements.map(({ id, _60c6_Title, _60c6_Description, _60c6_LinkURL }) => (
						<SingleAnnoucement key={id} title={_60c6_Title} description={_60c6_Description} linkUrl={_60c6_LinkURL} />
					))}
				</Box>
			</Grid>
		</Grid>
	);
}
