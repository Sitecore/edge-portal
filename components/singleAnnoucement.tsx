
import Typography from '@material-ui/core/Typography';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import { makeStyles } from '@material-ui/core/styles';
import Link from 'next/link'

export const useStyles = makeStyles(() => ({
  card: {
    flexGrow: 1,
    marginTop: 5,
    border: 'none',
    boxShadow: 'none'
  },
  title: {
    fontWeight: 700,
    fontSize: '20px'
  },
  pos: {
    marginBottom: 12,
  },
  link: {  
     color: '#000',
    fontWeight: 700,
    fontSize: 17,
    display: 'block',
    float: 'left',
    clear: 'left',
    position: 'relative',
    textDecoration: 'none',
    letterSpacing: 0.5,
    borderBottom: 'none !important',
  },
  arrow: {
    verticalAlign: "top",
    marginTop: "4px",
    marginLeft: "1px",
    "-webkit-transition": "all 0.25s",
    transition: "all 0.25s",
    display: "inline-block",
    width: "auto !important"
  }
}));

export function SingleAnnoucement({ title, description, linkUrl }: { title: string, description: string, linkUrl: string }) {
  const classes = useStyles();

  return (
    <Card className={classes.card}>
      <CardContent>
        <Typography className={classes.title} color="textPrimary" gutterBottom>
          {title}
        </Typography>
        <Typography className={classes.pos} color="textSecondary">
          {description}
        </Typography>
        <Typography color="textPrimary">
          <Link href={`${linkUrl}`}>
            <a target="_blank" rel="noopener" className={classes.link}>
              Get started now!
              <img src="/img/icon-arrow.png"  className={classes.arrow}/>
            </a>
          </Link>
        </Typography>
      </CardContent>

    </Card>
  )
}
