import express, { Response, Request, NextFunction } from "express";
import todoRoutes from "./routes/todo";
import bodyParser from "body-parser";

const app = express();
const PORT = 8080;

app.use(bodyParser.json());
app.use("/todos", todoRoutes);

// middleware to handle error any other request
app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
  res.status(500).json({ message: err.message });
});

app.get("/", (_, res: Response) => {
  res.send("Hello World");
});

app.listen(PORT, () => {
  console.log(`Server listen at port ${PORT}`);
});
