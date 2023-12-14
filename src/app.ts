
import cors from "cors";
import express, { Application, Request, Response } from "express";
import { notFound } from "./controllers/notFound.controller";
import { bookingRoutes } from "./routes/booking.route";
import { reviewRoutes } from "./routes/review.route";
import { tourRoutes } from "./routes/tour.route";
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
app.use('/api/v1/tours',tourRoutes);
app.use('/api/v1/reviews',reviewRoutes);
app.use('/api/v1/bookings',bookingRoutes);



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


export default app;