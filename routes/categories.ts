import express from "express";

const router = express.Router();

export interface Category {
  _id: string;
  name: string;
}

const categories: Category[] = [
  { _id: "5b21ca3eeb7f6fbccd471818", name: "Fruit" },
  { _id: "5b21ca3eeb7f6fbccd471814", name: "Snacks" },
  { _id: "5b21ca3eeb7f6fbccd471820", name: "Vegetables" },
];

export function getCategories() {
  return categories;
}

router.get("/", (req, res) => {
  return res.send(categories);
});

export default router;

//15:07
