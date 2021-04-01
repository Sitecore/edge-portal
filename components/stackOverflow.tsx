import React from 'react'
import { makeStyles } from "@material-ui/core/styles";
import Avatar from '@material-ui/core/Avatar';
import CardHeader from '@material-ui/core/CardHeader';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import { StackOverflowQuestion } from '../interfaces/stackOverflowQuestion';
import Box from '@material-ui/core/Box';
import Link from 'next/link';

export const useStyles = makeStyles((theme) => ({
    card: {
        width: 750
    },
    avatar: {
        backgroundColor: theme.palette.primary.main,
    },
    header: {
        borderBottom: "1px solid" + theme.palette.grey[300],
        fontSize: "200px"
    },
    gridList: {
        // width: 500,
        height: 300,
    },
    gridTileBox: {
        border: "1px solid" + theme.palette.grey[300],
        justifyContent: "space-between",
        alignItems: "center",
        height: 50,
        "&:hover": {
			backgroundColor: theme.palette.grey[100],
            cursor: "pointer"
		},
    },
    questionTitle: {
        paddingLeft: 10,
        fontWeight: "bold"
    },
    link: {
        textDecoration: "none"
    }
}));



export default function StackOverflow({ questions }: { questions: StackOverflowQuestion[] }) {
    const classes = useStyles();

    return (
        <Card square className={classes.card}>
            <CardHeader
                avatar={
                    <Avatar aria-label="recipe" className={classes.avatar}>
                        S
					</Avatar>
                }
                title="LATEST SITECORE SAAS STACK EXCHANGE QUESTIONS"
                className={classes.header}
            />
            <CardContent>
                <GridList cellHeight={55} className={classes.gridList} cols={1}>
                    {questions.map((question) => (
                        <GridListTile key={question.question_id}>
                            <Link href={question.link}>
                                <Box display="flex" className={classes.gridTileBox}>
                                    <div className={classes.questionTitle}>
                                        {question.title}
                                    </div>
                                        Created 3 days ago
                                    </Box>
                            </Link>
                        </GridListTile>
                    ))}
                </GridList>
            </CardContent>
        </Card>
    )
}
