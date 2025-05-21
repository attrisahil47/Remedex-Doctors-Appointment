const route = require("express").Router();
const multer = require('multer');
const path = require('path');

// Controllers
const login = require("../../Controller/auth/login.js");
const signup = require("../../Controller/auth/signup.js");
const contact = require("../../Controller/auth/contact.js");
const booking = require("../../Controller/auth/booking.js");
const feedback = require("../../Controller/auth/feedback.js");
const checkAuth = require("../../Middleware/check-auth.js");
const getUser = require("../../Controller/auth/getUsers.js");
const addUser = require("../../Controller/auth/addUsers.js");
const getBooking = require("../../Controller/auth/getBookings.js");
const getContact = require("../../Controller/auth/getContact.js");
const getFeedback = require("../../Controller/auth/getFeedback.js");
const deleteUser = require("../../Controller/auth/deleteUser.js");
const updateUser = require("../../Controller/auth/updateUser.js");
const viewDoctors = require("../../Controller/auth/viewDoctors.js")

const addDoctor = require("../../Controller/auth/addDoctor.js");
const deleteDoctor = require("../../Controller/auth/deleteDoctor.js");
const updateDoctor = require("../../Controller/auth/updateDoctor.js"); 
const googleLogin = require("../../Controller/auth/googleLogin.js")
const confirmBooking = require("../../Controller/auth/confirmBooking.js");
const getDoctors = require("../../Controller/auth/getDoctors.js");
const getBookings = require("../../Controller/auth/getBookings.js")

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
      cb(null, 'uploads/'); // Save files in the 'uploads' folder
    },
    filename: (req, file, cb) => {
    //   const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9);
      cb(null, `${Date.now()}${file.originalname}`);
    }
  });
  
  // File filter to only allow certain types of files
  const fileFilter = (req, file, cb) => {
    const allowedTypes = ['image/jpeg', 'image/png'];
    if (allowedTypes.includes(file.mimetype)) {
      cb(null, true); // Allow file upload
    } else {
      cb(new Error('Only JPG and PNG images are allowed'), false);
    }
  };
  
  // Initialize Multer with the storage and file filter configuration
  const upload = multer({ storage, fileFilter });

// Routes
route.post("/login", login);
route.post("/signup", signup);
route.post("/booking", booking);
route.post("/contact", contact);
route.post("/feedback", feedback);
route.post("/checkauth", checkAuth);
route.get("/getDoctors", getDoctors)


route.get("/getUser", getUser);
route.get("/getBookings", getBookings)
route.post("/addUsers", addUser);
route.get("/getBookings", getBooking);
route.get("/getContacts", getContact);
route.get("/getFeedbacks", getFeedback);
route.post("/google", googleLogin)
route.post("/confirmBooking", confirmBooking)

route.delete("/deleteUser/:id", deleteUser);
route.put("/updateUser/:id", updateUser);

// ✅ Doctor Routes
route.post("/addDoctor", upload.single("photo"), addDoctor);
route.put("/updateDoctor/:id", upload.single("photo"), updateDoctor); 
route.delete("/deleteDoctor/:id", deleteDoctor);
route.get("/viewdoctors" , viewDoctors)

module.exports = route;






