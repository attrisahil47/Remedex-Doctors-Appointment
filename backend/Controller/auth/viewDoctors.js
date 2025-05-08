const Doctor = require("../../Models/doctors.model")

const viewDoctors = async (req , res) => {
    try{
        const Doctors = await Doctor.find()
        res.json(Doctors)
    }
    catch(err){
        return res.status(400).json({
            success : "false",
            msg : "unable to view Doctors"
        })
    }
}

module.exports = viewDoctors