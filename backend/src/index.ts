import express from 'express';
import { AppDataSource } from './infrastructure/database';

const app = express();
const port = 3001;

AppDataSource.initialize().then(() => {
  console.log('Database connection successful');
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
