import React from "react";
import ListSubheader from "@material-ui/core/ListSubheader";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import { Category, Article } from "interfaces/articles";
import Link from "next/link";

const useStyles = makeStyles((theme) => ({
	root: {
		width: "100%",
		maxWidth: 360,
		backgroundColor: theme.palette.background.paper,
	},
	nested: {
		paddingLeft: theme.spacing(4),
	},
}));

export default function SideNavigation({ categories, sectionName }: { sectionName: string; categories: Category[] }) {
	const classes = useStyles();

	return (
		<List
			component="nav"
			aria-labelledby="nested-list-subheader"
			subheader={
				<ListSubheader component="div" id="nested-list-subheader">
					{sectionName}
				</ListSubheader>
			}
			className={classes.root}>
			{categories.map(({ CategoryName, Topics }) => (
				<React.Fragment>
					<ListItem button>
						<Link href={`/getting-started/${encodeURIComponent(CategoryName)}`}>
							<ListItemText primary={CategoryName} />
						</Link>
					</ListItem>
					<List component="div" disablePadding>
						{Topics.results.map(({ Name }) => (
							<ListItem button className={classes.nested}>
								<Link href={`/getting-started/${encodeURIComponent(CategoryName)}/${encodeURIComponent(Name)}`}>
									<ListItemText primary={Name} />
								</Link>
							</ListItem>
						))}
					</List>
				</React.Fragment>
			))}
		</List>
	);
}
