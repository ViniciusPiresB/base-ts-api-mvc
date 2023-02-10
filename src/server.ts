import * as dotenv from "dotenv";
import app from "./app";

dotenv.config();

const port = process.env.PORT;
const server = app.listen(port);

server.on("listening", () => console.log(`Server running on ${port}`));
