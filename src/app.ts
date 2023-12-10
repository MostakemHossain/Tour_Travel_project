
import cors from "cors";
import express, { Application, Request, Response } from "express";
import { userRoutes } from "./routes/user.route";
const app:Application = express();


app.use(express.json());
app.use(cors());



app.get('/', (req:Request, res:Response) => {
  res.status(200).send({
    success:true,
    message:"Welcome to the API"
  })
})

app.use('/api/v1/users',userRoutes);




export default app;