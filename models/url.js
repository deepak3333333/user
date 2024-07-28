const mongoose=require("mongoose")
const urlSchema = new mongoose.Schema({
    shortid: { type: String, required: true },
    redirectedUrl: { type: String, required: true },
    visitedHistory: [{ time: { type: Date } ,
        duration: { type: Number, default: 0 }
    }],
    
}, { timestamps: true });

const URL=mongoose.model("Url",urlSchema)


module.exports=URL

