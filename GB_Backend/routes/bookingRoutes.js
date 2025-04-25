import express from 'express';
import {confirmBooking, confirmBookingBkash, confirmBookingVisa, allBookings, userBookings, updateStatus} from '../controllers/bookingContoller.js'

const bookigRouter = express.Router()

//admin feature
bookigRouter.post('/list',allBookings)
bookigRouter.post('/status',updateStatus);


//payment feature
bookigRouter.post ('/booking'.confirmBooking)
