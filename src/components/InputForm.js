import { useEffect, useState } from 'react';
import dayjs from 'dayjs';

// Mui components
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


import NoticeBar from './NoticeBar';

const InputForm = (props) => {

    // Input data
    const [firstName, setFirstName] = useState("")
    const [lastName, setLastName] = useState("")
    const [email, setEmail] = useState("")
    const [phone, setPhone] = useState("")
    const [room, setRoom] = useState("King Bed Room")
    const [guest, setGuest] = useState(1)
    const [arrival, setArrival] = useState(() => dayjs())
    const [departure, setDeparture] = useState(() => dayjs().add(1, "day"))

    // Errors and help text
    const [firstNameError, setFirstNameError] = useState(false)
    const [firstNameText, setFirstNameText] = useState("")

    const [lastNameError, setLastNameError] = useState(false)
    const [lastNameText, setLastNameText] = useState("")

    const [phoneError, setPhoneError] = useState(false)
    const [phoneText, setPhoneText] = useState("")

    const [emailError, setEmailError] = useState(false)
    const [emailText, setEmailText] = useState("")

    const [departureText, setDepartureText] = useState("")

    const [arrivalText, setArrivalText] = useState("")

    const [barOpen, setBarOpen] = useState(false)

    const [alertMessage, setAlertMessage] = useState("")
    const [alertSeverity, setAlertSeverity] = useState("")

    const handleBarOpen = () => {
        setBarOpen(true)
    }

    const handleBarClose = () => {
        setBarOpen(false)
    }

    // Clear error if user input anything
    useEffect(() => {
        setFirstNameError(false)
        setFirstNameText("")
    }, [firstName])

    useEffect(() => {
        setLastNameError(false)
        setLastNameText("")
    }, [lastName])

    useEffect(() => {
        setPhoneError(false)
        setPhoneText("")
    }, [phone])

    useEffect(() => {
        setEmailError(false)
        setEmailText("")
    }, [email])

    // Clear form input
    const handleClear = () => {
        setFirstName("")
        setLastName("")
        setEmail("")
        setPhone("")
        setRoom("King Bed Room")
        setGuest(1)
        setArrival(() => dayjs())
        setDeparture(() => dayjs().add(1, "day"))
    }

    const handleCreate = () => {
        let newId = (Number(props.originalBookings[props.originalBookings.length - 1].id) + 1).toString();

        let today = dayjs().format("DD MMM YYYY")

        let night = departure.diff(arrival, "day")

        // Check input
        if (!firstName || firstName.length === 0) {
            setFirstNameError(true)
            setFirstNameText("The First Name field cannot be empty")
            return
        }

        if (!lastName || lastName.length === 0) {
            setLastNameError(true)
            setLastNameText("The Last Name field cannot be empty")
            return
        }

        if (!email || email.length === 0) {
            setEmailError(true)
            setEmailText("The Email field cannot be empty")
            return
        }

        if (!phone || phone.length === 0) {
            setPhoneError(true)
            setPhoneText("The Phone field cannot be empty")
            return
        }

        if (arrivalText.length !== 0 || departureText.length !== 0) {
            setAlertMessage("Please setup dates correctly")
            setAlertSeverity("error")
            handleBarOpen()
            return
        }

        let newBooking = {
            "id": newId,
            "name": firstName + " " + lastName,
            "update": today,
            "room": room,
            "arrival": arrival.format("DD MMM YYYY"),
            "departure": departure.format("DD MMM YYYY"),
            "night": night,
            "people": guest,
            "email": email,
            "phone": phone,
            "location": "CA",
            "language": "English",
            "tcpip": "192.168.0.33 / CA"
        }

        let newBookings = JSON.parse(JSON.stringify(props.originalBookings));

        newBookings.push(newBooking)

        props.setOriginalBookings(newBookings)

        props.handleFormClose()
    }

    const handleDepartureError = (error, value) => {
        switch (error) {
            case "invalidDate":
                setDepartureText("Please input a date");
                break
            case "disablePast":
                setDepartureText("Pickup a date after today");
                break
            case "minDate":
                setDepartureText("Pickup a date after the arrival date");
                break
            default:
                setDepartureText("");
                break
        }
    }

    const handleArrivalError = (error, value) => {
        switch (error) {
            case "invalidDate":
                setArrivalText("Please input a date");
                break
            case "disablePast":
                setArrivalText("Pickup a date from today");
                break
            default:
                setArrivalText("");
                break
        }
    }

    return (
        <>
            <Dialog
                open={props.formOpen}
                onClose={props.handleFormClose}
            >
                <DialogTitle>
                    <b>Create a Booking</b>
                </DialogTitle>
                <DialogContent >
                    <Stack spacing={2} pt={1}>
                        <Stack direction="row" spacing={2} >
                            <TextField
                                fullWidth
                                value={firstName}
                                onChange={(e) => setFirstName(e.target.value)}
                                label="First Name"
                                variant="outlined"
                                error={firstNameError}
                                helperText={firstNameText}
                            />
                            <TextField
                                fullWidth
                                value={lastName}
                                onChange={(e) => setLastName(e.target.value)}
                                label="Last Name"
                                variant="outlined"
                                error={lastNameError}
                                helperText={lastNameText}
                            />
                        </Stack>
                        <Stack direction="row" spacing={2} >
                            <TextField
                                fullWidth
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                label="Email"
                                variant="outlined"
                                error={emailError}
                                helperText={emailText}
                            />

                            <TextField
                                fullWidth
                                value={phone}
                                onChange={(e) => setPhone(e.target.value)}
                                label="Phone"
                                variant="outlined"
                                error={phoneError}
                                helperText={phoneText}
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
                                    disablePast
                                    disableHighlightToday
                                    label="Arrival Date"
                                    value={arrival}
                                    onChange={(value) => setArrival(value)}
                                    onError={(error, value) => { handleArrivalError(error, value) }}
                                    slotProps={{
                                        textField: {
                                            helperText: arrivalText,
                                        },
                                    }}
                                />
                            </DemoContainer>
                        </LocalizationProvider>
                        <LocalizationProvider dateAdapter={AdapterDayjs}>
                            <DemoContainer components={['DatePicker']}>
                                <DatePicker
                                    disablePast
                                    disableHighlightToday
                                    label="Departure Date"
                                    minDate={arrival.add(1, "day")}
                                    value={departure}
                                    onChange={(value) => setDeparture(value)}
                                    onError={(error, value) => { handleDepartureError(error, value) }}
                                    slotProps={{
                                        textField: {
                                            helperText: departureText,
                                        },
                                    }}
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
                            <Button fullWidth variant="contained" onClick={handleCreate}>Create</Button>
                        </Grid>

                    </Grid>

                </DialogActions>
            </Dialog>

            {/* Notice bar */}
            <NoticeBar
                barOpen={barOpen}
                handleBarClose={handleBarClose}
                alertMessage={alertMessage}
                alertSeverity={alertSeverity}
            />
        </>
    )
}

export default InputForm