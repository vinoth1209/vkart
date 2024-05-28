import React, { useEffect, useState } from "react";
import {
  Box,
  Button,
  Card,
  Container,
  FormControl,
  InputLabel,
  MenuItem,
  Rating,
  Select,
  Typography,
} from "@mui/material";
import { NavLink } from "react-router-dom";
import { useQuery } from "react-query";
import { getProducts } from "../Api's/products";
import { Div, Section } from "../../conponents/Div/Div";

const Men = () => {
  const [sort, setSort] = useState("");
  const [datas, setDatas] = useState([]);
  const [count, setCount] = useState(0);

  const handleChange = (event) => {
    setSort(event.target.value);
  };

  const {
    data: menProducts,
    isLoading,
    isError,
    refetch,
  } = useQuery(["fetchMensProducts"], () => getProducts("men"), {
    staleTime: Infinity,
  });

  useEffect(() => {
    if (menProducts) {
      setDatas(menProducts?.data);
      setCount(menProducts?.count);
    }
  }, [menProducts]);

  return (
    <Box className="header">
      <Container className="py-10 ">
        {/* banner offer box */}
        <Section className="shop-home-reverse h-full rounded-md px-8  ">
          <Box className="grid grid-cols-1 lg:grid-cols-2 items-center ">
            <Div
              item
              xs={12}
              md={6}
              className="typography text-center lg:text-left"
            >
              <Typography
                sx={{ fontSize: { xs: 40, md: 50, lg: 60 } }}
                className=""
              >
                FLAT 50% OFF
              </Typography>
              <Typography
                sx={{ fontSize: { xs: 20, md: 25, lg: 30 } }}
                className=""
              >
                <span>12</span> Hourse <span className="">20</span> Mins
              </Typography>
              <Button className="shop-button " sx={{ mt: 4 }}>
                Explore Now
              </Button>
            </Div>
            <Div
              item
              xs={12}
              md={6}
              className="typography flex align-middle justify-center lg:justify-end pt-2   "
            >
              <img
                src={require("../../assets/banner_men.png")}
                className="w-48"
              />
            </Div>
          </Box>
        </Section>

        {/* mens collections */}
        <Section className="h-ful  pt-10">
          <Div className="my-2 mb-5">
            <Box className="flex justify-between">
              <Typography className="typography">
                <span style={{ fontWeight: 800 }}>
                  Showing {datas?.length > 0 ? 1 : 0} - {datas?.length}
                </span>{" "}
                out of{" "}
                <span style={{ fontWeight: 800 }}>{" " + count + " "}</span>{" "}
                Products
              </Typography>

              <Div>
                <FormControl
                  className="typography"
                  sx={{ m: 1, minWidth: 120 }}
                  size="small"
                >
                  {/* <InputLabel id="demo-select-small-label">sort</InputLabel> */}
                  <Select
                    labelId="demo-simple-select-standard-label"
                    id="demo-simple-select-standard"
                    value={sort}
                    onChange={handleChange}
                  >
                    <MenuItem className="typography" value={10}>
                      Ascending
                    </MenuItem>
                    <MenuItem className="typography" value={20}>
                      Descending
                    </MenuItem>
                  </Select>
                </FormControl>
              </Div>
            </Box>
          </Div>

          <Box className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 pb-20">
            {datas?.length > 0 &&
              datas?.map((collection, index) => {
                console?.log("id", collection?._id?.toString());
                return (
                  <NavLink key={index} to={`/product/${collection?._id}`}>
                    <Card className="shadow-sm shop-card shadow-slate-300">
                      <Div className="card-img">
                        <img
                          src={collection?.images[0]?.image}
                          alt={collection?.name}
                          className=" w-full "
                        />
                      </Div>
                      <Div className="p-3">
                        <Typography className="typography card-title">
                          {collection?.name?.length > 20
                            ? collection?.name?.substring(0, 55) + "..."
                            : collection?.name}
                        </Typography>

                        <Div className="flex items-center justify-between">
                          <Div>
                            <Typography className="typography-sub">
                              Price
                            </Typography>
                          </Div>
                          <Div className="gap-3 flex items-center">
                            <del className="typography-sub">
                              ₹ {collection?.old_price}
                            </del>
                            <span className="typography-sub">
                              ₹ {collection?.new_price}
                            </span>
                          </Div>
                        </Div>

                        <Div className="flex items-center justify-between">
                          <Div>
                            <Typography className="typography-sub">
                              Ratings
                            </Typography>
                          </Div>
                          <Rating
                            name="size-small"
                            value={collection?.ratings}
                            defaultValue={Number(collection?.ratings)}
                            size="small"
                            readOnly
                          />
                        </Div>

                        <Div className="flex items-center justify-between">
                          <Div>
                            <Typography className="typography-sub">
                              Reviews
                            </Typography>
                          </Div>
                          <Div>
                            <Typography className="typography-sub">
                              {collection?.reviews?.length}
                            </Typography>
                          </Div>
                        </Div>
                      </Div>
                    </Card>
                  </NavLink>
                );
              })}
          </Box>
        </Section>

        <Div className="flex items-center justify-center">
          <Button className="typography border px-5 py-2 rounded-full cursor-pointer more-button ">
            Explore More
          </Button>
        </Div>
      </Container>
    </Box>
  );
};

export default Men;
