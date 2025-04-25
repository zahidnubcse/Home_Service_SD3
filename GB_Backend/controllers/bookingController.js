import Booking from '../models/bookingModel.js';

// Create Booking
export const createBooking = async (req, res) => {
  try {
    const {
      service,
      serviceImage,
      plan,
      price,
      fullName,
      email,
      address,
      bookingDate,
      paymentMethod,
      transactionId
    } = req.body;

    const newBooking = new Booking({
      service,
      serviceImage,
      plan,
      price,
      fullName,
      email,
      address,
      bookingDate,
      paymentMethod,
      transactionId,
      paymentStatus: paymentMethod === 'Cash On Service' ? 'pending' : 'paid',
    });

    const savedBooking = await newBooking.save();
    res.status(201).json(savedBooking);
  } catch (error) {
    res.status(500).json({ message: 'Booking failed', error: error.message });
  }
};

// Get All Bookings
export const getAllBookings = async (req, res) => {
  try {
    const bookings = await Booking.find().sort({ createdAt: -1 });
    res.status(200).json(bookings);
  } catch (error) {
    res.status(500).json({ message: 'Failed to fetch bookings', error: error.message });
  }
};

// Get Booking by ID
export const getBookingById = async (req, res) => {
  try {
    const booking = await Booking.findById(req.params.id);
    if (!booking) return res.status(404).json({ message: 'Booking not found' });
    res.status(200).json(booking);
  } catch (error) {
    res.status(500).json({ message: 'Error retrieving booking', error: error.message });
  }
};

// Update Payment Status
export const updatePaymentStatus = async (req, res) => {
  try {
    const booking = await Booking.findById(req.params.id);
    if (!booking) return res.status(404).json({ message: 'Booking not found' });

    booking.paymentStatus = 'paid';
    booking.transactionId = req.body.transactionId || booking.transactionId;

    const updated = await booking.save();
    res.status(200).json(updated);
  } catch (error) {
    res.status(500).json({ message: 'Failed to update payment status', error: error.message });
  }
};
