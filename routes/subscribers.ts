import express from "express";
import { Subscriber } from "../models/subscriber";

export const router = express.Router();

//Getting all
router.get("/", async (req: any, res: any) => {
    try {
        const subscribers = await Subscriber.find()
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
})

//Getting One
router.get("/:id", (req: any, res: any) => {
    res.send(req.params.id);
})

//Creating one
router.post("/", (req: any, res: any) => {

})

//Updating One
router.patch("/:id", (req: any, res: any) => {

})

//Deleting One
router.delete("/:id", (req: any, res: any) => {

})


