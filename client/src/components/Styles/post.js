import { makeStyles } from '@material-ui/core/styles';

export default makeStyles(theme => ({
    paper: {
        marginTop: theme.spacing(1),
        padding: theme.spacing(2),
        color: theme.palette.text.secondary,
        minHeight: "150px"
    },
    margin: {
        margin: theme.spacing(1),
        marginRight: theme.spacing(2),
    },
    icon: {
        color: "#333",
        cursor: "pointer",
    },
    info: {
        display: "flex",
        marginTop: theme.spacing(2),
    },
    content: {
        marginBottom: theme.spacing(2),
    },
}));
