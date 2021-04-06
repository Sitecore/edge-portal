import { CardContent, CardHeader } from "@material-ui/core";
import Box from "@material-ui/core/Box";
import Card from "@material-ui/core/Card";
import Avatar from "@material-ui/core/Avatar";
import Grid from "@material-ui/core/Grid";
import React from "react";
import { SingleVideo } from "./singleVideo";
import { makeStyles } from "@material-ui/core/styles";
import { YouTubeVideo } from "../interfaces/youTubeVideo";

export const useStyles = makeStyles((theme) => ({
	avatar: {
		backgroundColor: theme.palette.primary.main,
	},
	header: {
		borderBottom: "1px solid" + theme.palette.grey[300],
	},
}));

export function ThreeVideoGrid(videos: any) {
	const youTubeData: YouTubeVideo[] = videos.videos;

	const classes = useStyles();
	return (
		<Card square>
			<CardHeader
				avatar={
					<Avatar aria-label="recipe" className={classes.avatar}>
						E
					</Avatar>
				}
				title="Latest videos"
				subheader="VIDEO RESOURCES ABOUT THE SITECORE EXPERIENCE EDGE"
				className={classes.header}
			/>
			<CardContent>
				<Grid item xs={12}>
					<Grid container justify="center" spacing={5}>
						{youTubeData?.map(video => (
							<Grid item key={video.id}>
								<Box m={1} >
									<SingleVideo video={video} />
								</Box>
							</Grid>
						))}
					</Grid>
				</Grid>
			</CardContent>
		</Card>
	);
}
