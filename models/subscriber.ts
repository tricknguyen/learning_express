import { model, Schema } from "mongoose";

const subscribersSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    subscribersToChannel: {
        type: String,
        required: true
    },
    subscribeDate: {
        type: Date,
        required: true,
        default: Date.now
    }
});

export const Subscriber = model("Subscriber", subscribersSchema);
