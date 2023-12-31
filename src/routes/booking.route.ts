import express from "express";
import { bookingController } from "../controllers/booking.controller";

const router= express.Router();

router.post('/create-booking',bookingController.createBooking);
router.get('/',bookingController.getAllBookings);
router.get('/:id',bookingController.getSingleBooking);
router.get('/:id/get-all-bookings',bookingController.getAllBookingsofAuser);
router.patch('/:id',bookingController.updateBooking);
router.delete('/:id',bookingController.deleteBooking);

export const bookingRoutes= router;