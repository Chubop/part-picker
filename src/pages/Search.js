import { Autocomplete, Box, Grid, Slider, TextField, Typography } from "@mui/material";

// merchant, price, price has to be a slider.

export default function Search(props){

    const categories = [
        {label: "Lower Parts Kit"},
        {label: "Trigger"},
        {label: "Buffer Kit"},
        {label: "Stock"},
        {label: "Pistol Grip"},
        {label: "Stripped Upper"},
        {label: "Forward Assist"},
        {label: "Dust Cover"},
        {label: "Barrel"},
        {label: "Handguard"},
        {label: "Gas Tube"},
        {label: "Gas Block"},
        {label: "BCG"},
        {label: "Charging Handle"}
    ]

    const merchants = [
        {label: "Smith & Wesson"},
        {label: "Ruger"},
        {label: "Sig Sauer"},
        {label: "Anderson Manufacturing"},
        {label: "GLOCK"},
        {label: "Mossberg"},
        {label: "Springfield Armory"},
        {label: "Palmetto State Armory"},
        {label: "Heritage Manufacturing"},
        {label: "Henry Repeating Arms"}
    ]

    return(
        <>
            <Grid container direction={'column'} alignItems="center" justifyContent={"center"} spacing={5} sx={{marginTop: 2}}>
                <Grid item>
                    <Box width={600}>
                        <Autocomplete
                        disablePortal
                        options={categories}
                        renderInput={(params) => <TextField {...params} label="Category" />}
                        />
                    </Box>
                </Grid>
                <Grid item>
                    <Box width={600}>
                        <Autocomplete
                        disablePortal
                        options={merchants}
                        renderInput={(params) => <TextField {...params} label="Merchant" />}
                        />
                    </Box>
                </Grid>
                <Grid item>
                    <Box width={600}>
                        <p>Price</p>
                        <Slider defaultValue={50} aria-label="Default" valueLabelDisplay="auto" />
                    </Box>
                </Grid>
            </Grid>
        </>
    )
}