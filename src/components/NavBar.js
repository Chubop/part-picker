// multiple tabs, top part with the logo aligned on the left side with margin

import { AppBar, Box, Button, Container, Menu, MenuItem, Toolbar, Typography } from "@mui/material";
import { Link } from "react-router-dom";

export default function NavBar(props){

    return(
        <>
            <AppBar position="static">
                <Container maxWidth="x1">
                    <Toolbar disableGutters>
                    <Typography
                        variant="h6"
                        noWrap
                        component="a"
                        href="/"
                        sx={{
                        mr: 2,
                        display: { xs: 'none', md: 'flex' },
                        fontFamily: 'monospace',
                        fontWeight: 700,
                        letterSpacing: '.3rem',
                        color: 'inherit',
                        textDecoration: 'none',
                        }}
                    >
                        AR Part Picker
                    </Typography>
                    <Box sx={{ flexGrow: 1, display: 'flex'}}>
                        {['Builder', 'Search', 'Upload'].map((page) => {
                            return(

                            <Link to={"/" + page.toLowerCase()}>
                                <Button key={page}
                                sx={{color: 'white'}}>
                                    <Typography variant="h7">
                                        {page}
                                    </Typography>
                                </Button>
                            </Link>
                            )
                        })}
                    </Box>

                    </Toolbar>
                </Container>
            </AppBar>
        </>
    )
}