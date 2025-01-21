import express from "express";
import { validate } from "../schemas/Food";
import { PrismaClient } from "@prisma/client";
import auth from "../middleware/auth";

const router = express.Router();
const prisma = new PrismaClient();

router.get("/", async (req, res) => {
  const foods = await prisma.food.findMany({ include: { category: true } });
  return res.send(foods);
});

router.get("/:id", auth, async (req, res) => {
  const food = await prisma.food.findFirst({
    where: { id: req.params.id },
    include: { category: true },
  });

  if (!food) {
    return res.status(404).send("The food with the given id was not found");
  }

  return res.send(food);
});

router.post("/", auth, async (req, res) => {
  const validation = validate(req.body);

  if (!validation.success) return res.status(400).send(validation.error.issues);

  const category = await prisma.category.findFirst({
    where: { id: req.body.categoryId },
  });

  if (!category)
    return res.status(404).send("the category with the given id was not found");

  const food = await prisma.food.create({
    data: {
      name: req.body.name,
      numberInStock: req.body.numberInStock,
      price: req.body.price,
      categoryId: req.body.categoryId,
    },
    include: { category: true },
  });

  return res.status(201).send(food);
});

router.put("/:id", auth, async (req, res) => {
  const food = await prisma.food.findFirst({
    where: { id: req.params.id },
  });

  if (!food)
    return res.status(404).send("The food with the given id was not found.");

  const validation = validate(req.body);

  if (!validation.success) return res.status(400).send(validation.error.issues);

  const category = await prisma.category.findFirst({
    where: { id: req.body.categoryId },
  });
  if (!category)
    return res
      .status(404)
      .send("The category with the given id was not found.");

  const updatedFood = await prisma.food.update({
    where: { id: req.params.id },
    data: {
      name: req.body.name,
      numberInStock: req.body.numberInStock,
      price: req.body.price,
      categoryId: req.body.categoryId,
    },
  });

  return res.send(updatedFood);
});

router.delete("/:id", auth, async (req, res) => {
  const food = await prisma.food.findFirst({
    where: { id: req.params.id },
  });

  if (!food)
    return res.status(404).send("The food with the given id was not found.");

  const deletedFood = await prisma.food.delete({
    where: { id: req.params.id },
  });

  return res.send(deletedFood);
});

export default router;
