
import Typography from '@material-ui/core/Typography';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles(() => ({
    card: {
      flexGrow: 1,
      marginTop: 5,
    },
    title: {
      fontSize: 14,
    },
    pos: {
      marginBottom: 12,
    },
  }));

export function Annoucement() {
    const classes = useStyles();
  
    return (
      <Card className={classes.card}>
        <CardContent>
          <Typography className={classes.title} color="textSecondary" gutterBottom>
            Annoucment
        </Typography>
          <Typography variant="h5" component="h2">
          </Typography>
          <Typography className={classes.pos} color="textSecondary">
            It is an annoucment yes it is
        </Typography>
          <Typography variant="body2" component="p">
            Here is where I put more info aobut that annoucement. TESTING
  <br />
          </Typography>
        </CardContent>
  
      </Card>
    )
  }
  