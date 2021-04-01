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
import { Typography } from '@material-ui/core';

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
    gridTile: {
        border: "1px solid" + theme.palette.grey[300],
        padding: 10,
        marginRight: 5,
        "&:hover": {
            backgroundColor: theme.palette.grey[100],
            cursor: "pointer"
        },

    },
    gridTItleBox: {
        justifyContent: "space-between",
        alignItems: "center",
    },
    secondaryText: {
        color: theme.palette.grey[500]
    },
    questionTitle: {
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
                <GridList cellHeight="auto" className={classes.gridList} cols={1}>
                    {questions.map((question) => (
                        <GridListTile key={question.question_id}>
                            <Link href={question.link}>
                                <Box className={classes.gridTile}>
                                    <Box display="flex" className={classes.gridTItleBox}>
                                        <Typography className={classes.questionTitle}>
                                            {question.title}
                                        </Typography>
                                        <Typography>
                                            Created {determineQuestionCreateData(question.creation_date)} days ago
                                    </Typography>
                                    </Box>
                                    <Box display="flex">
                                        <Typography className={classes.secondaryText}>
                                            Answer Count: {question.answer_count}
                                        </Typography>
                                    </Box>
                                </Box>
                            </Link>
                        </GridListTile>
                    ))}
                </GridList>
            </CardContent>
        </Card>
    )
}

function determineQuestionCreateData(creationDataInEpochSeconds: number): number {
    const currentEpochInSeconds = (Date.now() / 1000);
    const between = currentEpochInSeconds - creationDataInEpochSeconds;
    const days = Math.floor(between / 86411);
    return days;
}

