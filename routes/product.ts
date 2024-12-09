import { Router } from "express";
import {
  addProduct,
  deleteProduct,
  getProducts,
  getProductsByUnit,
  setQuantity,
} from "../controllers/product";
import { verifyJWT } from "../middlewares/verifyJWT";

const productRouter = Router();

productRouter.post("/add", verifyJWT, addProduct);
productRouter.get("/get", verifyJWT, getProducts);
productRouter.get("/get-products/:unitName", verifyJWT, getProductsByUnit);
productRouter.patch("/set-quantity/:id", verifyJWT, setQuantity);
productRouter.delete("/delete/:id", deleteProduct);

export default productRouter;
