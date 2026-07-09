import mongoose from "mongoose";

const eventSchema = new mongoose.Schema({
    title: { type: String, required: true },
    description: { type: String, required: true },
    date:{ type: String, required: true },
    time: { type: String, required: true },
    location: { type: String, required: true },
    category: { type: String, required: true },
    imageUrl: { type: String, required: true },
    
},{
    timestamps: true
});
const eventModel = mongoose.model('events', eventSchema);
export default eventModel;