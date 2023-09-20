import { useState } from 'react';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import InputLabel from '@mui/material/InputLabel';
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';

const InputForm = (props) => {

    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [phone, setPhone] = useState("")
    const [room, setRoom] = useState("King Bed Room")
    const [guest, setGuest] = useState(1)
    const [arrival, setArrival] = useState(null)
    const [departure, setDeparture] = useState(null)

    const today = new Date()
    console.log("today", today.toString())
    console.log("arrival", arrival)


    return (
        <Dialog
            open={props.formOpen}
            onClose={props.handleFormClose}
        >
            <DialogTitle>Create a Booking</DialogTitle>
            <DialogContent >
                <Grid container spacing={2} direction="column" pt={1}>
                    <Grid item>
                        <TextField
                            fullWidth
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            // size="small"
                            label="Name"
                            variant="outlined"
                        />
                    </Grid>
                    <Grid item>
                        <TextField
                            fullWidth
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            // size="small"
                            label="Email"
                            variant="outlined"
                        />
                    </Grid>
                    <Grid item>
                        <TextField
                            fullWidth
                            value={phone}
                            onChange={(e) => setPhone(e.target.value)}
                            // size="small"
                            label="Phone"
                            variant="outlined"
                        />
                    </Grid>
                    <Grid item>
                        <FormControl fullWidth>
                            <InputLabel id="demo-simple-select-label">Room Type</InputLabel>
                            <Select
                                labelId="demo-simple-select-label"
                                id="demo-simple-select"
                                value={room}
                                label="Room Type"
                                // size="small"
                                onChange={(e) => setRoom(e.target.value)}
                            >
                                <MenuItem value="King Bed Room">King Bed Room</MenuItem>
                                <MenuItem value="Queen Bed Room">Queen Bed Room</MenuItem>
                            </Select>
                        </FormControl>
                    </Grid>
                    <Grid item>
                        <FormControl fullWidth>
                            <InputLabel id="demo-simple-select-label">Guests</InputLabel>
                            <Select
                                labelId="demo-simple-select-label"
                                id="demo-simple-select"
                                value={guest}
                                label="Guests"
                                onChange={(e) => setGuest(e.target.value)}
                            >
                                <MenuItem value={1}>1</MenuItem>
                                <MenuItem value={2}>2</MenuItem>
                                <MenuItem value={3}>3</MenuItem>
                                <MenuItem value={4}>4</MenuItem>
                            </Select>
                        </FormControl>
                    </Grid>
                    <Grid item>
                        <LocalizationProvider dateAdapter={AdapterDayjs}>
                            <DemoContainer components={['DatePicker']}>
                                <DatePicker
                                    label="Arrival Date"
                                    value={arrival}
                                    onChange={(value) => setArrival(value.format("DD MMM YYYY"))}
                                />
                            </DemoContainer>
                        </LocalizationProvider>
                    </Grid>
                    <Grid item>
                        <LocalizationProvider dateAdapter={AdapterDayjs}>
                            <DemoContainer components={['DatePicker']}>
                                <DatePicker
                                    label="Departure Date"
                                    value={departure}
                                    onChange={(value) => setDeparture(value.format("DD MMM YYYY"))}
                                />
                            </DemoContainer>
                        </LocalizationProvider>
                    </Grid>
                </Grid>
            </DialogContent>
            <DialogActions>

            </DialogActions>
        </Dialog>
    )
}

export default InputForm