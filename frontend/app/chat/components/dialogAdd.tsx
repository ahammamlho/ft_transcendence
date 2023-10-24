import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';

import TextField from '@mui/material/TextField';



export default function AlertDialogSlide() {
    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    return (
        <div>
            <Button variant="outlined" onClick={handleClickOpen}>
                Slide in alert dialog
            </Button>




            <Dialog
                open={open}
                keepMounted
                onClose={handleClose}
            >
                <DialogContent className='flex w-[30rem] items-center justify-center'>

                    <TextField fullWidth size="small"
                        label="Find a friend" variant="outlined"
                        onChange={(e) => { console.log(e.target.value) }} />
                    <>

                    </>


                </DialogContent>
            </Dialog>
        </div >
    );
}