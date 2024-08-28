import express from 'express';
import { AppDataSource } from './infrastructure/database/AppDataSource';
import userRouter from './presentation/routes/UserRoutes';
import authRouter from './presentation/routes/AuthRoutes';

const app = express();
const port = 3001;

AppDataSource.initialize().then(() => {
  console.log('Database connection successful');
});

app.use(express.json());
app.use(userRouter);
app.use(authRouter);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
