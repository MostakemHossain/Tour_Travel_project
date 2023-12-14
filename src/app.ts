
import cors from "cors";
import express, { Application, Request, Response } from "express";

import { notFound } from "./middleware/NotFound";
import { globalErrorHandler } from "./middleware/globalErrorHandler";
import globalRoutes from "./routes";
const app:Application = express();


app.use(express.json());
app.use(cors());



app.get('/', (req:Request, res:Response) => {
  res.status(200).send({
    success:true,
    message:"Welcome to the API"
  })
})

app.use('/api/v1',globalRoutes);




//catch all route -> Trying to catch a Not Found Route
// controller approch way -1
// app.all("*",(req:Request, res:Response) => {
//   res.status(404).send({
//     success:true,
//     message:`Route not Found for ${req.originalUrl}  `
//   })
// })

// way -2 controller approch
// app.all("*",notFound);

// way -3 middleware approch
app.use(notFound);

// global error handler

app.use(globalErrorHandler);


export default app;