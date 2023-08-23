import express from "express";
import { Subscriber } from "../models/subscriber";

export const router = express.Router();

//Getting all
router.get("/", async (req: any, res: any) => {
    try {
        const subscribers = await Subscriber.find()
        res.json(subscribers);
    } catch (error: any) {
        res.status(500).json({ message: error.message })
    }
})

//Getting One
router.get("/:id", getSubscriber, (req: any, res: any) => {
    res.send(res.subscriber.name)
})

//Creating one
router.post("/", async (req: any, res: any) => {
    const subscriber = new Subscriber({
        name: req.body.name,
        subscribedToChannel: req.body?.subscribedToChannel
    })
    try {
        const newSubscriber = await subscriber.save()
        res.status(201).json(newSubscriber);
    } catch (error: any) {
        res.status(400).json({message: error.message})
    }
})

//Updating One
router.patch("/:id", async (req: any, res: any) => {
    if(req.body.name !== null) {
        res.subscriber.name = req.body.name;
    }
    if(req.body.subscribedToChannel !== null) {
        res.subscriber.subscribedToChannel = req.body.subscribedToChannel;
    }
    try {
        const result = await Subscriber.findByIdAndUpdate(req.params.id, req.body);
        res.json(result);
    } catch(err: any) {
        res.status(400).json({message: err.message})
    }
})

//Deleting One
router.delete("/:id", async (req: any, res: any) => {
    try {
        await Subscriber.findByIdAndDelete(req.params.id);
        res.json({message: "Deleted subscriber"});
    } catch (error: any) {
        res.status(500).json({message: error.message})
    }
})


async function getSubscriber(req: any, res: any, next: any) {
    let subscriber = null;
    try {
        subscriber = await Subscriber.findById(req.params.id)
        if (subscriber == null) {
            return res.status(404).json({ message: "Cannot find subscriber"})
        }
    } catch (error: any) {
        return res.status(500).json({ message: error.message })
    }

    res.subscriber = subscriber;
    next();
}

