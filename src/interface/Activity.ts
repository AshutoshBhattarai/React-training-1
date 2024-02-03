import { z } from 'zod';

const activity = z.object({
  description: z.string(),
  time: z.number()
});

type Activity = z.infer<typeof activity>;
export default Activity;
