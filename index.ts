import express from "express";
import categories from "./routes/categories";
import foods from "./routes/foods";
import users from "./routes/users";
import auth from "./routes/auth";

import cors from "cors";

const app = express();

app.use(
  cors({
    origin: [
      "http://localhost:5589",
      "http://localhost:5173",
      "http://localhost:4173",
      "https://foodventory-frontend.onrender.com",
    ],
  })
);
app.use(express.json());
app.use("/api/categories", categories);
app.use("/api/foods", foods);
app.use("/api/users", users);
app.use("/api/auth", auth);

const PORT = process.env.PORT || 5589;

app.listen(PORT, () => {
  console.log("Listening on port " + PORT);
});
