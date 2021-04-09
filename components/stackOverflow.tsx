import React, { useEffect, useState } from 'react'
import { makeStyles } from "@material-ui/core/styles";
import CardHeader from '@material-ui/core/CardHeader';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import { StackOverflowQuestion } from '../interfaces/stackOverflowQuestion';
import Box from '@material-ui/core/Box';
import Link from 'next/link';
import { Typography } from '@material-ui/core';
import Image from 'next/image'
import { GetStackOverflowQuestionsByTag } from 'lib/stackOverflow';

export const useStyles = makeStyles((theme) => ({
  card: {
    padding: 10,
  },
  avatar: {
    backgroundColor: theme.palette.primary.main,
  },
  headerBox: {
    borderBottom: "1px solid" + theme.palette.grey[300],
    "&:hover": {
      backgroundColor: theme.palette.grey[100],
      cursor: "pointer",
    },
  },
  gridList: {
    height: 300,
  },
  gridTile: {
    border: "1px solid" + theme.palette.grey[300],
    padding: 10,
    marginRight: 5,
    "&:hover": {
      backgroundColor: theme.palette.grey[100],
      cursor: "pointer",
    },
  },
  gridTItleBox: {
    justifyContent: "space-between",
    alignItems: "center",
  },
  secondaryText: {
    color: theme.palette.grey[500],
  },
  questionTitle: {
    fontWeight: "bold",
  },
  link: {
    textDecoration: "none",
  },
}));

export default function StackOverflow() {
  const classes = useStyles();

  const [questions, questionsSet] = useState<StackOverflowQuestion[]>([])

  useEffect(() => {
    async function getStackOverflowQuestions() {
      let response = await GetStackOverflowQuestionsByTag("jss");
      questionsSet(response)
    }
    getStackOverflowQuestions();
  },
    []);

  return (
    <Card square className={classes.card}>
      <Link href="https://sitecore.stackexchange.com/">
        <Box display="flex" className={classes.headerBox}>
          <Image src="/images/se-icon.svg" width={50} height={50} />
          <CardHeader
            title="LATEST SITECORE SAAS STACK EXCHANGE QUESTIONS"
          />
        </Box>
      </Link>

      <CardContent>
        <GridList cellHeight="auto" className={classes.gridList} cols={1}>
          {questions?.map((question) => (
            <GridListTile key={question.question_id}>
              <Link href={question.link}>
                <Box className={classes.gridTile}>
                  <Box display="flex" className={classes.gridTItleBox}>
                    <Typography className={classes.questionTitle}>
                      {question.title}
                    </Typography>
                    <Typography>
                      {getDaysSinceQuestionWasCreatedText(question.creation_date)}
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

function getDaysSinceQuestionWasCreatedText(
  creationDataInEpochSeconds: number
): string {
  const millisecondsInASecond = 1000;
  const secondsInADay = 86400;

  const currentEpochInSeconds = Date.now() / millisecondsInASecond;
  const secondsSinceCreation =
    currentEpochInSeconds - creationDataInEpochSeconds;
  const daysSinceCreation = Math.floor(secondsSinceCreation / secondsInADay);

  let dayString = "days";
  if (daysSinceCreation <= 1) {
    dayString = "day";
  }

  return `Created ${daysSinceCreation} ${dayString} ago`;
}
