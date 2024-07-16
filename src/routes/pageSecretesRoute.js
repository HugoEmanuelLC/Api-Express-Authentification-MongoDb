import { Router } from "express";

import {verifAuth} from "../middleware/authentification.js";

const pageSecretes = Router();

pageSecretes.get("/api/secret", verifAuth, (req, res) => {
    res.status(201).json({message: res.message});
});

export { pageSecretes };