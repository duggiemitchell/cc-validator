import express, { Request, Response } from "express";
import bodyParser from "body-parser";
import cors from "cors";
import { luhnChecksum } from "./utils";

const app = express();
const PORT = process.env.PORT || 3001;
const jsonParser = bodyParser.json();

app.use(cors());

app.post("/validate", jsonParser, (req: Request, res: Response) => {
  const isValid = luhnChecksum(req.body);
  res.json(isValid);
});

app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}`);
});
