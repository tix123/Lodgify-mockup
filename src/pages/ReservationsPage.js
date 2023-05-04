import React from 'react';
import Header from '../components/Header';
import ReservationBody from '../components/ReservationBody';

const ReservationsPage = () => (
    <div id="top" style={{ height: "100vh" }}>
        <Header />
        <ReservationBody />
    </div>
);

export default ReservationsPage;