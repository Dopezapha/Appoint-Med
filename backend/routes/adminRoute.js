import express from 'express';
import { loginAdmin, appointmentsAdmin, appointmentCancel, addDoctor, allDoctors, adminDashboard } from '../controllers/adminController.js';
import upload from '../middlewares/upload.js';
import upload from '../middleware/multer.js';
import authAdmin from '../middleware/authAdmin.js';

const adminRouter = express.Router();

adminRouter.post('/add-doctor', upload.single('image'), addDoctor);
adminRouter.post('/login', loginAdmin);
adminRouter.get("/appointments", authAdmin, appointmentsAdmin)
adminRouter.post("/cancel-appointment", authAdmin, appointmentCancel)
adminRouter.get("/all-doctors", authAdmin, allDoctors)
adminRouter.post("/change-availability", authAdmin, changeAvailablity)
adminRouter.get("/dashboard", authAdmin, adminDashboard)

export default adminRouter;