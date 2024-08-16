import express from 'express';
import { AppDataSource } from './infrastructure/database';
import userRouter from './presentation/routes/UserRoutes';

const app = express();
const port = 3001;

AppDataSource.initialize().then(() => {
  console.log('Database connection successful');
});

app.use(express.json()); // Middleware to parse JSON requests
app.use(userRouter); // Use the user routes

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
