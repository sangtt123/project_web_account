import express from "express";
import cors from "cors";

const app = express();
import prisma from "@/lib/prisma";

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => res.send("Backend is up"));

app.get("/api/products", async (req, res) => {
  try {
    const products = await prisma.products.findMany();
    console.log("📦 /api/products ->", products.length, "items");
    res.json(products);
  } catch (err) {
    console.error("Error /api/products:", err);
    res.status(500).json({ error: "Internal server error" });
  }
});

app.get("/api/products/:id", async (req, res) => {
  try {
    const id = req.params.id;
    const product = await prisma.products.findUnique({ where: { id } });
    if (!product) return res.status(404).json({ error: "Not found" });
    res.json(product);
  } catch (err) {
    console.error("Error /api/products/:id", err);
    res.status(500).json({ error: "Internal server error" });
  }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server listening at http://localhost:${PORT}`));
