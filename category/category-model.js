import { Schema, model} from "mongoose";

const CategorySchema = Schema({
    name:{
        type: String,
        required: [true, "Name is required"],
        
    },
    description:{
        type: String,
        required: [true, "Description is required"]
    },
    status:{
        type: Boolean,
        default: true
    }
},
{
    versionKey: false,
    timeStamps: true
})




export default model("Category", CategorySchema)