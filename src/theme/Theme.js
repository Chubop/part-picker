import { createTheme } from "@mui/material";

const Theme = createTheme({
    components:{
      MuiAppBar:{
        styleOverrides: {
          root: {
            backgroundColor: 'maroon'
          }
        }
      },
      MuiToolbar:{
        styleOverrides:{
          root:{
            paddingLeft: '0 !important',
            paddingRight: '0 !important'
          }
        }
      }
    },
    typography: {
      fontFamily: [
        'monospace'
      ]
    },
  });

export default Theme;