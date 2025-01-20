import express from "express";
import categories from "./routes/categories";
import foods from "./routes/foods";

const app = express();

app.use(express.json());
app.use("/api/categories", categories);
app.use("/api/foods", foods);

const PORT = 5589;

app.listen(PORT, () => {
  console.log("Listening on port " + PORT);
});
