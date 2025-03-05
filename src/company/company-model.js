import { Schema, model } from "mongoose"

const CompanySchema = Schema(
{
    name: {
        type: String,
        required: [true, 'Name is required']
    },
    yearsOfExperience: {
        type: Number,
        default: 0,
        required: true,
    },
    impactLevel: {
        type: String,
        enum: ["Low", "Medium", "High"],
        required: true,
    },
    category: {
        type: Schema.Types.ObjectId,
        ref: "Category",
        required: true,
    },
    representative: {
        type: Schema.Types.ObjectId,
        ref: "User",
        required: true,
    },
    
    status: {
        type: Boolean,
        default: true
    }
},
{
    versionKey: false,
    timestamps: true,
}
)
export default model("Company", CompanySchema)
