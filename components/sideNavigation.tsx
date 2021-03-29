import React from "react";
import ListSubheader from "@material-ui/core/ListSubheader";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import { makeStyles } from "@material-ui/core/styles";
import { Category } from "interfaces/articles";
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
			{categories.map((category) => (
				<React.Fragment>
					<ListItem button component="a" href={`/getting-started/${encodeURIComponent(category.Name)}`}>
						<Link href={`/getting-started/${encodeURIComponent(category.Name)}`}>
							<ListItemText primary={category.Name} />
						</Link>
					</ListItem>
					<List component="div" disablePadding>
						{category.Articles.results
							? category.Articles.results.map((article) => (
									<ListItem
										key={article.Name}
										button
										component="a"
										className={classes.nested}
										href={`/getting-started/${encodeURIComponent(category.Name)}/${encodeURIComponent(article.Name)}`}>
										<Link href={`/getting-started/${encodeURIComponent(category.Name)}/${encodeURIComponent(article.Name)}`}>
											<ListItemText primary={article.Name} />
										</Link>
									</ListItem>
							  ))
							: "Loading"}
					</List>
				</React.Fragment>
			))}
		</List>
	);
}
