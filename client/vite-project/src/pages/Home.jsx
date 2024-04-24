import React from 'react';
import { Box, Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, Grid, TextField, Typography } from '@mui/material';
import FloatingActionButtons from '../components/Button/FloatingButton';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';
import MediaCard from '../components/Card/Card';

function Home() {
  const [open, setOpen] = React.useState(false);
  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down('md'));

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <Grid container alignItems='center' justifyContent='center' spacing={2}>
      <Grid item xs={12}>
        <Typography variant='h3' textAlign='center' mt={3}>
          {/* Your title content */}
        </Typography>
      </Grid>
    
      <Grid item xs={10} sm={6} md={4} lg={2} sx={{cursor:"pointer"}}>
        <MediaCard/>
      </Grid>
    
      <Grid item xs={12} style={{ position: 'fixed', bottom: 16, right: 16 }} onClick={handleClickOpen}>
        <FloatingActionButtons />
      </Grid>
    
      <Box>
        <Dialog
          fullScreen={fullScreen}
          open={open}
          onClose={handleClose}
          aria-labelledby="responsive-dialog-title"
          fullWidth // Set dialog width to 100% of the parent container
          maxWidth="sm" // Set maximum dialog width to small (sm)
        >
          <DialogTitle id="responsive-dialog-title">
            Add new project
          </DialogTitle>
          <DialogContent>
            <TextField 
              id="outlined-basic" 
              label="Project name" 
              variant="outlined" 
           sx={{width:"80%",height:"100%"}}
            />
          </DialogContent>
          <DialogActions>
            <Button autoFocus onClick={handleClose}>
           Cancel
            </Button>
            <Button onClick={handleClose} variant='contained' autoFocus>
             Create
            </Button>
          </DialogActions>
        </Dialog>
      </Box>
    </Grid>
  );
}

export default Home;
