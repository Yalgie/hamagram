import { makeStyles } from '@material-ui/core/styles';

export default makeStyles(theme => ({
    paper: {
        marginTop: theme.spacing(1),
        padding: theme.spacing(2),
        color: theme.palette.text.secondary,
        minHeight: "150px",
    },
}));
