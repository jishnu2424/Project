const { log } = require('console');
const hireDB = require('../Model/hire');

const addHire = async (req, res) => {
    const id = req.userId;
    const { desgnerId } = req.params; // Extract desgnerId from req.body

    if (!desgnerId) {
        return res.status(400).json({ error: "desgnerId is required" });
    }

    try {
        const hire = await hireDB.create({ userId: id, desgnerId: desgnerId });
        console.log(hire);
        return res.status(200).json({ message: "Hired the designer" }); // Return JSON response with a message
    } catch (err) {
        console.log(err);
        return res.status(500).json({ error: "Internal Server Error" }); // Return error response
    }
};

const viewHire = async (req,res)=>{
    try{
        const hire = await hireDB.find()
        return res.status(200).send(hire)
    }catch(err){
        console.log(err);
    }
}


const viewHireById = async (req,res)=>{
        try{
            const { id } = req.params; 

        const hire = await hireDB.findById(id);
        if (!hire) {
          return res.status(404).json({ message: "hiring not found" });
        }
        return res.status(200).json(hire);

        }
        catch(err){
            console.log(err);
        }
}


const ViewbyDesigner = async (req, res) => {
    const id = req.userId;

    try {
        const hiredetail = await hireDB.find({ desgnerId: id });
        console.log(hiredetail);
        return res.status(200).json({ message: "Hired details", data: hiredetail });
    } catch (err) {
        console.log(err);
        return res.status(500).json({ error: "Internal Server Error" });
    }
};





module.exports = { addHire,viewHire,viewHireById,ViewbyDesigner};
