'use client';
import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  typography: {
    fontFamily: 'var(--font-roboto)',
  },
  components:{
    MuiCard:{
      styleOverrides:{
        root:{
          height:350,
          width:250
        }
      }
    },
    MuiCardMedia:{
      styleOverrides:{
        img:{
          height:180,
          width:250
        },
      }
    },
    MuiCardContent:{
      styleOverrides:{
        root:{
          height:100
        }
      }
    },
    MuiFormControl:{
      styleOverrides:{
        root:{
          padding:15
        }
      }
    }
  }
});

export default theme;