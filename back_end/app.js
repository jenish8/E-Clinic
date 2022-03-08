const express = require('express');
const port = 3000;
const app = express();
const multer = require('multer');
const path = require('path');
const userRoutes = require('./routes/usermange');
const cartRoutes = require('./routes/cartmanage');
const clinicRoutes = require('./routes/clinicmanage');
const timeRoutes = require('./routes/timemanage');
const order_detailsRoutes = require('./routes/order_detailsmanage');
const patientRoutes = require('./routes/patientmanage');
const reportRoutes = require('./routes/reportsmanage');
const medicineRoutes = require('./routes/medicinemanage');
const orderRoutes = require('./routes/ordermanage');
const online_consultationRoutes = require('./routes/online_consultationmanage');
const appointmentRoutes = require('./routes/appointmentmanage');
const brandRoutes = require('./routes/brandmanage');
const aptimeRoutes = require('./routes/aptimemanage');
const authRoutes = require('./routes/auth');
const fileRoutes = require('./routes/file');
const liveRoutes = require('./routes/live');
const emailRoutes = require('./routes/email');
const forgotPasswordRoutes = require('./routes/forgotpassword');
const Med_orderRoutes = require('./routes/medicine_ordermanage');
const stockRoutes = require('./routes/stock');
const ucdateRoutes = require('./routes/audate');
require('./middleware/passport-config');
const passport = require('passport');
const bodyParser = require('body-parser');


//app start

const fileStorage = multer.diskStorage({
    destination: function(req, res, cb) {
        cb(null, 'images')
    },
    filename: function(req, file, cb) {
        cb(null, file.originalname);
    }
});

//image condition
const fileFilter = (req, file, cb) => {
    if (
        file.mimetype === 'image/png' ||
        file.mimetype === 'image/jpg' ||
        file.mimetype === 'image/jpeg'
    ) {
        cb(null, true);
    } else {
        cb(null, false);
    }
}

app.use(bodyParser.json());
app.use(
    multer({ storage: fileStorage, fileFilter: fileFilter }).single('image')
)
app.use('/images', express.static(path.join(__dirname, 'images')));


app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader(
        'Access-Control-Allow-Methods',
        'OPTIONS, GET, POST, PUT, PATCH, DELETE'
    );
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
    next();
});
/*
app.use((error, req, res, nex) => {
    res.json({"msg": "internal error"})
    nex();
})
*/
app.use('/auth', authRoutes);
app.use('/details', userRoutes);
app.use('/cart_details', cartRoutes);
app.use('/clinic_details', clinicRoutes);
app.use('/time_details', timeRoutes);
app.use('/order_details', order_detailsRoutes);
app.use('/patient_details', patientRoutes);
app.use('/report_details', reportRoutes);
app.use('/medicine_details', medicineRoutes);
app.use('/medicineorder', orderRoutes);
app.use('/consultation_details', online_consultationRoutes);
app.use('/appointment_details', appointmentRoutes);
app.use('/brand_details', brandRoutes);
app.use('/image', fileRoutes);
app.use('/aptime_details', aptimeRoutes);
app.use('/live', liveRoutes);
app.use('/email', emailRoutes);
app.use('/forgotpassword', forgotPasswordRoutes);
app.use('/med_order',Med_orderRoutes);
app.use('/st', stockRoutes);
app.use('/audate', ucdateRoutes); //user shoe date and time
app.listen(port);