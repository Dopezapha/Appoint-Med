# Healthcare Appointment Management System

## Overview
A comprehensive healthcare appointment management system built with Node.js that facilitates the interaction between patients, doctors, and administrators. The system enables patients to book appointments with doctors, manage their medical appointments, and handle payments securely.

## Features

### For Patients
- User registration and authentication
- Profile management with personal details
- Book appointments with available doctors
- View and manage appointments
- Secure payment processing via Stripe
- Cancel appointments with automatic slot release
- View appointment history

### For Doctors
- Secure login system
- Profile management
- Availability management
- View and manage appointments
- Track earnings and patient statistics
- Mark appointments as completed
- View dashboard with key metrics

### For Administrators
- Secure admin panel
- Add and manage doctors
- Monitor all appointments
- Cancel appointments if needed
- Access system-wide statistics
- View comprehensive dashboard

## Technical Architecture

### Authentication & Security
- JWT-based authentication for all user types
- Bcrypt password hashing
- Role-based middleware protection
- Input validation and sanitization

### Core Technologies
- Backend: Node.js with Express.js
- Database: MongoDB with Mongoose ODM
- File Storage: Cloudinary for image uploads
- Payment Processing: Stripe integration

### Key Models
1. User Model
   - Personal details
   - Authentication credentials
   - Address information
   - Profile image

2. Doctor Model
   - Professional details
   - Specialization
   - Experience and qualifications
   - Appointment slots management
   - Fees structure

3. Appointment Model
   - Booking details
   - Payment status
   - Appointment status tracking
   - User and doctor references

## API Endpoints

### User Routes
```
POST /api/user/register - Register new user
POST /api/user/login - User login
GET /api/user/get-profile - Get user profile
POST /api/user/update-profile - Update user profile
POST /api/user/book-appointment - Book appointment
GET /api/user/appointments - List user appointments
POST /api/user/cancel-appointment - Cancel appointment
POST /api/user/payment-stripe - Process payment
POST /api/user/verifyStripe - Verify payment
```

### Doctor Routes
```
POST /api/doctor/login - Doctor login
GET /api/doctor/appointments - View appointments
POST /api/doctor/cancel-appointment - Cancel appointment
GET /api/doctor/list - List all doctors
POST /api/doctor/change-availability - Update availability
POST /api/doctor/complete-appointment - Mark appointment complete
GET /api/doctor/dashboard - View dashboard
GET /api/doctor/profile - Get profile
POST /api/doctor/update-profile - Update profile
```

### Admin Routes
```
POST /api/admin/login - Admin login
POST /api/admin/add-doctor - Add new doctor
GET /api/admin/appointments - View all appointments
POST /api/admin/cancel-appointment - Cancel appointment
GET /api/admin/all-doctors - View all doctors
GET /api/admin/dashboard - View admin dashboard
```

## Security Features
- Password hashing using bcrypt
- JWT token-based authentication
- Middleware protection for routes
- Input validation using validator.js
- Secure file upload handling
- Payment data security via Stripe

## Setup Requirements
1. Node.js and npm
2. MongoDB database
3. Cloudinary account for image storage
4. Stripe account for payment processing
5. Environment variables:
   - JWT_SECRET
   - MONGO_URI
   - CLOUDINARY_NAME
   - CLOUDINARY_API_KEY
   - CLOUDINARY_API_SECRET
   - STRIPE_SECRET_KEY
   - ADMIN_EMAIL
   - ADMIN_PASSWORD

## Installation
1. Clone the repository
2. Install dependencies: `npm install`
3. Set up environment variables
4. Start the server: `npm start`

## Best Practices Implemented
- Error handling and logging
- Input validation
- Secure authentication
- Clean code architecture
- Middleware-based route protection
- Scalable database schema
- Payment gateway integration
- File upload management

## Contributing
Contributions are welcome! Please feel free to submit a Pull Request.

## Author
Chukwudi Daniel Nwaneri