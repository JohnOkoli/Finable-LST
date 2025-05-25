import { connectDB } from './configs/db';
import config from './configs/config';
import app from './app';

const startServer = async () => {
  await connectDB();

  app.listen(config.PORT, () => {
    console.log(`Server running on port ${config.PORT}`);
  });
};

startServer();
