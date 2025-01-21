import express from "express";
import { PrismaClient } from "@prisma/client";
import { validate } from "../schemas/User";

const prisma = new PrismaClient();
const router = express.Router();

router.post("/", async (req, res) => {
  const validation = validate(req.body);

  if (!validation.success)
    return res.status(400).send(validation.error.issues[0].message);

  const existingUser = await prisma.user.findFirst({
    where: { username: req.body.username },
  });

  if (existingUser) return res.status(400).send("User already exists");

  const user = await prisma.user.create({
    data: {
      name: req.body.name,
      username: req.body.username,
      password: req.body.password,
    },
  });
  return res.send(user);
});

export default router;
