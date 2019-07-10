import React from 'react';
import Routes from "./Nav/Routes";
import Container from '@material-ui/core/Container';
import Box from '@material-ui/core/Box';

export default function App() {
    return (
        <Container>
            <Box my={4}>
                <Routes />
            </Box>
        </Container>
    );
};