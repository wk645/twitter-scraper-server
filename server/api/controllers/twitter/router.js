import express from "express";
import controller from "./controller";

export default express.Router().get("/timeline", controller.getTimeline);
