/* eslint-disable jsx-a11y/alt-text */
import { Box, Button, Container, Rating, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import { Div } from "../../conponents/Div/Div";
import { useStateContext } from "../../context/StateContext";
import { useParams } from "react-router-dom";
import { getProductsById } from "../Api's/products";

const Viewproduct = () => {
  const { cart, setCart } = useStateContext();
  const { id } = useParams();
  const [product, setProduct] = useState({});
  const [size, setSize] = useState("");
  const [imageSelected, setImageSelected] = useState({ position: 0 });

  // handle Add Cart function
  const handleAddCart = () => {
    const findProdIndex = cart?.findIndex(
      (prod) => prod?.id === imageSelected?.id
    );

    if (findProdIndex === -1) {
      // If the product is not in the cart, add it with count 1
      setCart([...cart, { id: imageSelected?.id, count: 1 }]);
    } else {
      const updatedCart = [...cart];
      updatedCart[findProdIndex].count += 1;
      setCart(updatedCart);
    }
  };

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const prod = await getProductsById(id);
        if (Object.keys(prod).length > 0) {
          setProduct(prod?.data);
        } else {
          alert("Product not found");
        }
        console.log("Productsd", prod);
      } catch (error) {
        console.error("Error fetching product:", error);
      }
    };

    fetchProduct();
  }, [id]);

  return (
    <Box className="header">
      {
        <Container>
          <Box className=" grid grid-cols-1 md:grid-cols-2  md:gap:7 lg:gap-10 pb-14">
            <Div className=" md:col-span-1">
              <Div className="grid grid-cols-12">
                <Div className="col-span-full md:col-span-2 mt-4 flex gap-4 flex justify-center md:block">
                  {product?.images?.map((item, idx) => {
                    console.log(item);
                    return (
                      <img
                        onClick={() =>
                          setImageSelected({ id: item?.id, position: idx })
                        }
                        key={idx}
                        src={item?.image}
                        className={`w-14 h-16 my-4 rounded-md cursor-pointer hover:border border-pink-500 ${
                          idx === imageSelected?.position &&
                          "border-2 border-pink-500"
                        }`}
                      />
                    );
                  })}
                </Div>
                <Div className="flex justify-center col-span-full md:my-4 md:col-span-10 h-auto ">
                  {Object.keys(product)?.length > 0 && (
                    <img
                      src={
                        product?.images[imageSelected?.position]?.image ||
                        product?.images[0]?.image
                      }
                      height={"100%"}
                      width={"100%"}
                      className=" my-4 w-96 rounded-md   "
                    />
                  )}
                </Div>
              </Div>
            </Div>
            <Div className="col-span-1 h-auto my-3 md:my-6 md:mx-6 lg:mx-0 ">
              <Typography
                sx={{ fontSize: { xs: 20, md: 25 }, fontWeight: 600 }}
                className="typography"
              >
                {product?.name}
              </Typography>
              <Div className="my-4 typography flex items-center gap-2 ">
                <Rating
                  name="size-small"
                  defaultValue={2}
                  size="small"
                  readOnly
                />
                <span className="text-sm">( 143 )</span>
              </Div>

              <Div className="gap-3 flex items-center">
                <del style={{ fontSize: 20 }} className="typography">
                  ₹ {product?.old_price}
                </del>
                <span style={{ color: "rgb(255, 0, 149)", fontSize: 20 }}>
                  ₹ {product?.new_price}
                </span>
              </Div>

              <Div className="my-4">
                <Typography className="typography">
                  Multicoloured regular top; Vertical striped; Round neck,
                  short, flutter sleeve sleeves; Woven; Button closure. Size &
                  Fit. The model (height 5'8) is wearing ...
                </Typography>
              </Div>

              <Div className="mt-10">
                <Typography
                  className="typography"
                  sx={{ fontSize: 14, fontWeight: 600 }}
                >
                  Select Size
                </Typography>

                <Div
                  color="secondary"
                  className="flex items-center gap-2 flex-wrap mt-4"
                  aria-label="Medium-sized button group"
                >
                  <Button
                    size="small"
                    variant={size === "S" ? "contained" : "outlined"}
                    onClick={() => setSize("S")}
                  >
                    S
                  </Button>
                  <Button
                    size="small"
                    variant={size === "M" ? "contained" : "outlined"}
                    onClick={() => setSize("M")}
                  >
                    M
                  </Button>
                  <Button
                    size="small"
                    variant={size === "L" ? "contained" : "outlined"}
                    onClick={() => setSize("L")}
                  >
                    L
                  </Button>
                  <Button
                    size="small"
                    variant={size === "XL" ? "contained" : "outlined"}
                    onClick={() => setSize("XL")}
                  >
                    XL
                  </Button>
                  <Button
                    size="small"
                    variant={size === "XXL" ? "contained" : "outlined"}
                    onClick={() => setSize("XXL")}
                  >
                    XXL
                  </Button>
                </Div>
              </Div>

              <Div className="mt-10">
                <Button onClick={handleAddCart} className="shop-button">
                  ADD TO CART
                </Button>
              </Div>
            </Div>
          </Box>
        </Container>
      }
    </Box>
  );
};

export default Viewproduct;
