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
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';

const InputForm = (props) => {

    const [firstName, setFirstName] = useState("")
    const [lastName, setLastName] = useState("")
    const [email, setEmail] = useState("")
    const [phone, setPhone] = useState("")
    const [room, setRoom] = useState("King Bed Room")
    const [guest, setGuest] = useState(1)
    const [arrival, setArrival] = useState(null)
    const [departure, setDeparture] = useState(null)

    const today = new Date()
    console.log("today", today.toString())
    console.log("arrival", arrival)

    const handleClear = () => {
        setFirstName("")
        setLastName("")
        setEmail("")
        setPhone("")
        setRoom("King Bed Room")
        setGuest(1)
        setArrival(null)
        setDeparture(null)
    }

    return (
        <Dialog
            open={props.formOpen}
            onClose={props.handleFormClose}
        >
            <DialogTitle>
                <b>Create a Booking</b>
            </DialogTitle>
            <DialogContent >
                <Stack spacing={2} >
                    <Stack direction="row" spacing={2} >
                        <TextField
                            fullWidth
                            value={firstName}
                            onChange={(e) => setFirstName(e.target.value)}
                            label="First Name"
                            variant="outlined"
                        />
                        <TextField
                            fullWidth
                            value={lastName}
                            onChange={(e) => setLastName(e.target.value)}
                            label="Last Name"
                            variant="outlined"
                        />
                    </Stack>
                    <Stack direction="row" spacing={2} >
                        <TextField
                            fullWidth
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            label="Email"
                            variant="outlined"
                        />

                        <TextField
                            fullWidth
                            value={phone}
                            onChange={(e) => setPhone(e.target.value)}
                            label="Phone"
                            variant="outlined"
                        />
                    </Stack>
                    <Stack direction="row" spacing={2} >
                        <FormControl fullWidth>
                            <InputLabel id="demo-simple-select-label">Room Type</InputLabel>
                            <Select
                                labelId="demo-simple-select-label"
                                id="demo-simple-select"
                                value={room}
                                label="Room Type"
                                onChange={(e) => setRoom(e.target.value)}
                            >
                                <MenuItem value="King Bed Room">King Bed Room</MenuItem>
                                <MenuItem value="Queen Bed Room">Queen Bed Room</MenuItem>
                            </Select>
                        </FormControl>

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
                    </Stack>
                </Stack>
                <Stack direction="row" spacing={2} pt={1}>
                    <LocalizationProvider dateAdapter={AdapterDayjs}>
                        <DemoContainer components={['DatePicker']}>
                            <DatePicker
                                label="Arrival Date"
                                value={arrival}
                                onChange={(value) => setArrival(value)}
                            />
                        </DemoContainer>
                    </LocalizationProvider>
                    <LocalizationProvider dateAdapter={AdapterDayjs}>
                        <DemoContainer components={['DatePicker']}>
                            <DatePicker
                                label="Departure Date"
                                value={departure}
                                onChange={(value) => setDeparture(value)}
                            />
                        </DemoContainer>
                    </LocalizationProvider>
                </Stack>

            </DialogContent>
            <DialogActions>
                <Grid
                    container
                    style={{ width: "100%" }}
                    justifyContent="end"
                    alignItems="center"
                    spacing={2}
                    pr={2}
                    pb={2}
                >
                    <Grid item xs={3}>
                        <Button fullWidth variant="contained" onClick={handleClear}>Clear</Button>
                    </Grid>
                    <Grid item xs={3}>
                        <Button fullWidth variant="contained" onClick={handleClear}>Create</Button>
                    </Grid>

                </Grid>

            </DialogActions>
        </Dialog>
    )
}

export default InputForm