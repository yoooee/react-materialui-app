import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';

const LayoutStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: 'flex'
    },
    toolbar: theme.mixins.toolbar,
    content: {
      flexGrow: 1,
      padding: theme.spacing(3)
    }
  })
);

export default LayoutStyles;
