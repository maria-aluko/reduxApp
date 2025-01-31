import { useEffect } from "react";
import { RootState } from "../store/store";
import { useSelector } from "react-redux";
import { fetchProducts } from "../store/productsSlice";
import { useAppDispatch } from "../hooks/hooks";
import { Button } from "@mui/material";
import { addToCart } from "../store/cartSlice"
import Cart from "./Cart";

const Products = () => {
  const products = useSelector((state: RootState) => state.products);
  const dispatch = useAppDispatch();
  console.log("Products: ", products);

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  return (
    <>
    <Cart/>
      <div>
        {products.map((product) => (
          <div key={product.id}>
            <h3>{product.title}</h3>
            <Button
              onClick={() =>
                dispatch(
                  addToCart({
                    id: product.id,
                    title: product.title,
                    price: product.price,
                    image: product.image,
                  })
                )
              }
            >
              Add to Cart
              </Button>
          </div>
        ))}
      </div>
    </>
  )
};

export default Products;