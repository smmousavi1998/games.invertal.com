```markdown
# Creating an initial admin user

You can create an admin user with a short Node script or via Prisma Studio.

Example script (one-off):
```ts
import bcrypt from "bcrypt";
import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();
async function run(){
  const hashed = await bcrypt.hash("supersecurepassword", 10);
  await prisma.admin.create({
    data: { email: "admin@example.com", password: hashed, name: "Admin" }
  });
  console.log("created admin");
}
run().catch(e=>console.error(e)).finally(()=>process.exit());
```

Or use `npx prisma studio` to create an admin and paste a hashed password (use bcrypt to hash).
```