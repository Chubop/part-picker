import { Box, Button, Grid, Paper, TextField, Typography } from "@mui/material";


export default function Upload(props){
    return(
        <>
            <Grid container direction="column" sx={{marginTop: 3}} alignItems="center" justifyContent={"space-around"}
            component={Paper}>
                <Grid item>
                        <Typography variant="h4">
                            Upload a Part
                        </Typography>

                </Grid>

                <Grid item>
                    <TextField placeholder="Category"/>
                </Grid>
                <Grid item>
                    <TextField placeholder="Part Name"/>
                </Grid>
                <Grid item>
                    <TextField placeholder="Merchant"/>
                </Grid>
                <Grid item>
                    <TextField placeholder="Price"/>
                </Grid>
                <Grid item>
                    <Button variant="contained">
                        Upload
                    </Button>
                </Grid>
            </Grid>
        </>
    )
}