import { makeStyles } from '@material-ui/core/styles';

export default makeStyles(theme => ({
    container: {
        display: 'flex',
        flexFlow: 'column',
        marginTop: theme.spacing(1),
    },
    smallContainer: {
        display: 'flex',
        flexFlow: 'column',
        marginTop: theme.spacing(1),
        maxWidth: "400px"
    },
    textField: {
        marginBottom: theme.spacing(1),
        width: '100%'
    },
    button: {
        marginTop: theme.spacing(1),
    },
    root: {
        flexGrow: 1,
    },
    paper: {
        marginTop: theme.spacing(1),
        padding: theme.spacing(2),
        color: theme.palette.text.secondary,
        minHeight: "150px"
    },
}));