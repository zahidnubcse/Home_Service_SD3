import express from 'express';
import {
  createBooking,
  getAllBookings,
  getBookingById,
  updatePaymentStatus
} from '../controllers/bookingController.js';

const router = express.Router();

router.post('/', createBooking);
router.get('/', getAllBookings);
router.get('/:id', getBookingById);
router.put('/:id/pay', updatePaymentStatus);

export default router;
