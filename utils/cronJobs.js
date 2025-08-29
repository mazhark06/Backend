import cron from 'node-cron'
import { User } from '../models/user.model';
cron.schedule("0 * * * *", async () => {
  await User.deleteMany({
    email_Verified: false,
    createdAt: { $lt: new Date(Date.now() - 24 * 60 * 60 * 1000) }
  });
});
