import React, { useState, useEffect } from 'react';
import { BiUser, BiMoon, BiSearch } from 'react-icons/bi';
// import axios from 'axios';
import {
    BookingCheckBoxLabel,
    GuestName,
    BookingTitleWarp,
    LastUpdate,
    ThridLineWarp,
    BookingCardContainer,
    BookingCardWarpper,
    BookingContentContainer,
    BookingBodyWarp,
    EmptyContentTitle,
    EmptyContentSubtitle,
    ContentButton,
    ButtonWarp,
    NavBottomBlock,
    NavSideBar,
    SideButton,
    NavTopBlock,
    SearchInput,
    BookingCheckBox,
    BookingTitle,
    BookingContentWarpper,
    Nonselected,
    IdNumberAndDate,
    RoomTypeAndGuests,
    HrBar,
    BookingDetailWarpper,
    BookingDetailItem,
    BookinglItemLabel,
    BookinglItemValue
} from './ReservationBodyElements';

const ReservationBody = () => {
    const [bookings, setBookings] = useState([])

    const [originalBookings, setOriginalBookings] = useState([
        {
            "id": "1",
            "name": "Morris Chang",
            "update": "10 Jan 2021",
            "room": "King Studio Apartment",
            "arrival": "18 Jan 2021",
            "departure": "22 Jan 2021",
            "night": 3,
            "people": 2,
            "email": "Morris.Chang@gmail.com",
            "phone": "+14449991234",
            "location": "CA",
            "language": "English",
            "tcpip": "192.168.0.1 / CA"
        },
        {
            "id": "2",
            "name": "Lisa Su",
            "update": "10 Dec 2020",
            "room": "King Studio Apartment",
            "arrival": "15 Dec 2020",
            "departure": "21 Dec 2020",
            "night": 5,
            "people": 3,
            "email": "Lisa.Su@gmail.com",
            "phone": "+14449994321",
            "location": "CA",
            "language": "English",
            "tcpip": "192.168.0.33 / CA"
        },
        {
            "id": "3",
            "name": "Jensen Huang",
            "update": "2 Feb 2021",
            "room": "Queen Apartments",
            "arrival": "5 Feb 2021",
            "departure": "6 Feb 2021",
            "night": 1,
            "people": 2,
            "email": "Jensen.Huang@gmail.com",
            "phone": "+14449991234",
            "location": "CA",
            "language": "English",
            "tcpip": "192.168.0.1 / CA"
        },
        {
            "id": "4",
            "name": "Jerry Yang",
            "update": "15 Mar 2019",
            "room": "Queen Apartments",
            "arrival": "3 Apr 2020",
            "departure": "12 Apr 2020",
            "night": 8,
            "people": 2,
            "email": "Jerry.Yang@gmail.com",
            "phone": "+14449994321",
            "location": "CA",
            "language": "English",
            "tcpip": "192.168.0.33 / CA"
        },
        {
            "id": "5",
            "name": "Sean Chen",
            "update": "21 May 2018",
            "room": "Hostel Mixed Dorm Room",
            "arrival": "23 May 2018",
            "departure": "21 Jun 2018",
            "night": 27,
            "people": 1,
            "email": "sean.chen@gmail.com",
            "phone": "+14449991234",
            "location": "CA",
            "language": "English",
            "tcpip": "192.168.0.1 / CA"
        },
        {
            "id": "6",
            "name": "Aja Huang",
            "update": "6 Aug 2020",
            "room": "Tralapa Casita by the Sea",
            "arrival": "14 Aug 2020",
            "departure": "21 Aug 2020",
            "night": 6,
            "people": 10,
            "email": "aja.huang@gmail.com",
            "phone": "+14449994321",
            "location": "CA",
            "language": "English",
            "tcpip": "192.168.0.33 / CA"
        },
        {
            "id": "7",
            "name": "Steve Chen",
            "update": "19 Oct 2019",
            "room": "King Studio Apartment",
            "arrival": "26 Oct 2019",
            "departure": "30 Oct 2019",
            "night": 3,
            "people": 2,
            "email": "Steve.Chen@gmail.com",
            "phone": "+14449991234",
            "location": "CA",
            "language": "English",
            "tcpip": "192.168.0.1 / CA"
        }
    ]);

    const [id, setId] = useState();

    useEffect(() => {
        setBookings(originalBookings)
    }, [originalBookings])

    // Get data from local json file
    // useEffect(() => {
    //     fetch('./JSON/bookings.json')
    //         .then((response) => response.json())
    //         .then((result) => setBookings(result));
    // }, []);


    // get data from a local json-server
    // useEffect(() => {
    // axios
    //     .get(`http://localhost:3000/getAllReservations`)
    //     .then((res) => { setBookings(res.data) });
    // }, []);

    const selectedBooking = bookings.find(booking => booking.id === id);

    const bookingDetail = () => {
        if (selectedBooking === undefined) {
            return (
                <Nonselected >
                    <EmptyContentTitle>Reservations</EmptyContentTitle>
                    <EmptyContentSubtitle>Select any reservation item</EmptyContentSubtitle>
                    <ButtonWarp>
                        <ContentButton to="top">Create Booking</ContentButton>
                        <ContentButton to="top">Create Booking with Quote</ContentButton>
                    </ButtonWarp>
                </Nonselected >
            );
        }
        else {
            return (
                <BookingContentContainer>
                    <BookingContentWarpper>
                        <BookingTitle>{selectedBooking.name}</BookingTitle>
                        <IdNumberAndDate>#{selectedBooking.id} created on {selectedBooking.update}</IdNumberAndDate>
                        <br />
                        <RoomTypeAndGuests>{selectedBooking.room} — {selectedBooking.people} adults</RoomTypeAndGuests>
                        <b>{selectedBooking.arrival}</b> 🡢 <b>{selectedBooking.departure}</b>({selectedBooking.night} nights)
                        <br />
                        <br />
                        <HrBar />
                        <br />
                        <BookingDetailWarpper>
                            <b>Guest</b>
                            <HrBar />
                            <BookingDetailItem>
                                <BookinglItemLabel>Name</BookinglItemLabel>
                                <BookinglItemValue>{selectedBooking.name}</BookinglItemValue>
                            </BookingDetailItem>
                            <HrBar />
                            <BookingDetailItem>
                                <BookinglItemLabel>Email</BookinglItemLabel>
                                <BookinglItemValue>{selectedBooking.email}</BookinglItemValue>
                            </BookingDetailItem>
                            <HrBar />
                            <BookingDetailItem>
                                <BookinglItemLabel>Phone</BookinglItemLabel>
                                <BookinglItemValue>{selectedBooking.phone}</BookinglItemValue>
                            </BookingDetailItem>
                            <HrBar />
                            <BookingDetailItem>
                                <BookinglItemLabel>Location</BookinglItemLabel>
                                <BookinglItemValue>{selectedBooking.location}</BookinglItemValue>
                            </BookingDetailItem>
                            <HrBar />
                            <BookingDetailItem>
                                <BookinglItemLabel>Language</BookinglItemLabel>
                                <BookinglItemValue>{selectedBooking.language}</BookinglItemValue>
                            </BookingDetailItem>
                            <HrBar />
                            <BookingDetailItem>
                                <BookinglItemLabel>TCP/IP</BookinglItemLabel>
                                <BookinglItemValue>{selectedBooking.tcpip}</BookinglItemValue>
                            </BookingDetailItem>
                            <HrBar />
                        </BookingDetailWarpper>
                    </BookingContentWarpper>
                </BookingContentContainer>
            )
        }
    };



    const handleSearch = (value) => {
        if (value.length > 0) {
            let searchResult = originalBookings.filter(booking => booking.name.toLowerCase().includes(value.toLowerCase()));
            setBookings(searchResult);
        } else if (value.length === 0) {
            setBookings(originalBookings);
        }
    }

    return (
        <BookingBodyWarp>
            <NavSideBar>
                <NavTopBlock>
                    <SearchInput
                        type='text'
                        id='keyWord'
                        name='keyWord'
                        placeholder='Search'
                        size='30'
                        onChange={(e) => handleSearch(e.target.value)}
                    />
                    <BiSearch style={{ color: '#666', marginLeft: '10px' }} />
                </NavTopBlock>
                <BookingCardContainer>
                    {bookings.map((booking, key) => (
                        <BookingCardWarpper key={key}>
                            <BookingCheckBox
                                id={key}
                                type="radio"
                                name="bookings"
                                value={booking.id}
                                checked={id === booking.id}
                                onChange={(e) => setId(e.target.value)}
                            />
                            <BookingCheckBoxLabel htmlFor={key}>
                                <BookingTitleWarp>
                                    <GuestName>{booking.name}</GuestName>
                                    <LastUpdate>{booking.update}</LastUpdate>
                                </BookingTitleWarp>

                                {booking.room}<br />

                                <ThridLineWarp>
                                    {booking.arrival},&nbsp;
                                    {booking.night}
                                    <BiMoon style={{ verticalAlign: 'bottom', marginBottom: '0.1rem' }} />
                                    {booking.people}
                                    <BiUser style={{ verticalAlign: 'bottom', marginBottom: '0.1rem' }} />
                                </ThridLineWarp>
                            </BookingCheckBoxLabel>
                        </BookingCardWarpper>
                    ))}
                </BookingCardContainer>
                <NavBottomBlock>
                    <SideButton to="top">Create Booking</SideButton>
                </NavBottomBlock>
            </NavSideBar>

            {bookingDetail()}

        </BookingBodyWarp>
    );
};

export default ReservationBody;