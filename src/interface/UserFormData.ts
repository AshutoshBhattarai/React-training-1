import { z } from 'zod';

const userFormData = z.object({
  username: z.string(),
  age: z.number().max(100).min(0),
  contactNumber: z.bigint()
});

type UserFormData = z.infer<typeof userFormData>;

export default UserFormData;
