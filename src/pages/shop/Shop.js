import {
  Box,
  Button,
  Card,
  Container,
  Rating,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import { Div, Section } from "../../conponents/Div/Div";

import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";
import new_collections from "../../assets/new_collections";
import popular from "../../assets/data";

const Shop = () => {

 
  
  return (
    <Box className="header">
      <Box sx={{ minHeight: "600px" }} className="shop-home h-full ">
        
          {/* Home section */}
           <Container>
          <Box className="grid  grid-cols-1 lg:grid-cols-2  items-center pb-24 pt-16 ">
            <Div
              item
              xs={12}
              md={6}
              className="typography text-center lg:text-left"
            >
              <Typography sx={{ fontWeight: 600 }}>
                NEW ARRIVALS ONLY
              </Typography>
              <Typography
                sx={{ fontSize: { xs: 40, md: 50, lg: 60 } }}
                className=""
              >
                NEW
              </Typography>
              <Typography
                sx={{ fontSize: { xs: 40, md: 50, lg: 60 } }}
                className=""
              >
                COLLECTIONS
              </Typography>
              <Typography sx={{ fontSize: { xs: 40, md: 50, lg: 60 } }}>
                FOR EVERYONE
              </Typography>
              <Button className="shop-button " sx={{ mt: 4 }}>
                Latest Collection <ArrowRightAltIcon className="ml-2" />
              </Button>
            </Div>
            <Div
              item
              xs={12}
              md={6}
              className="typography flex align-middle justify-center lg:justify-end "
            >
              <img
                src={require("../../assets/hero_image.png")}
                className="w-96"
              />
            </Div>
          </Box>
            </Container>

        
      </Box>

<Container >

  {/* Popullar Women Section */}
  <Section>
            <Typography className="section-title typography ">
              Popular In Women
            </Typography>

            <Box className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 pb-20">
              {popular?.map((collection, index) =>(
                    <Card
                    key={index}
                    className="shadow-sm shop-card shadow-slate-300 "
                  >
                    <Div className="card-img">
                      <img src={collection?.image} alt={collection?.name} />
                    </Div>
                    <Div className="p-3">
                      <Typography className="typography card-title">
                        {collection?.name}
                      </Typography>
                      
                      <Div className="flex items-center justify-between">
                        <Div>
                          <Typography className="typography-sub">Price</Typography>
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
                          <Typography className="typography-sub">Ratings</Typography>
                        </Div>
                        <Rating
                            name="size-small"
                            defaultValue={2}
                            size="small"
                            readOnly
                          />
                      </Div>

                      
                      <Div className="flex items-center justify-between">
                        <Div>
                          <Typography className="typography-sub">Reviews</Typography>
                        </Div>
                      <Div>
                      <Typography className="typography-sub">20</Typography>

                      </Div>
                      </Div>


                    </Div>
                  </Card>
                 
              ))}
            </Box>
          </Section>

      {/* exclusive offer box */}
      <Section className="shop-home-reverse h-full rounded-md ">
        <Container>
          <Box className="grid grid-cols-1 lg:grid-cols-2 items-center ">
            <Div
              item
              xs={12}
              md={6}
              className="typography text-center lg:text-left"
            >
              
              <Typography
                sx={{ fontSize: { xs: 30, md:40, lg: 50 } }}
                className=""
              >
                EXCLUSIVE
              </Typography>
              <Typography
                sx={{ fontSize: { xs: 30, md:40, lg: 50 } }}
                className=""
              >
                OFFER FOR YOU
              </Typography>
              <Typography sx={{ fontWeight: 600 }}>
                ONLY ON BEST SELLERS PRODUCTS
              </Typography>
              <Button className="shop-button " sx={{ mt: 4 }}>
                Check Now
              </Button>
            </Div>
            <Div
              item
              xs={12}
              md={6}
              className="typography flex align-middle justify-center lg:justify-end pt-2   "
            >
              <img
                src={require("../../assets/exclusive_image.png")}
                className="w-80"
              />
            </Div>
          </Box>
        </Container>
      </Section>

     
      {/* New Collections */}

      <Section className="header h-full pt-20">
        
          <Typography className="section-title typography ">
            NEW COLLECTIONS
          </Typography>

          <Box className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 pb-20">
            {new_collections?.map((collection, index) =>(
                  <Card
                  key={index}
                  className="shadow-sm shop-card shadow-slate-300 "
                >
                  <Div className="card-img">
                    <img src={collection?.image} alt={collection?.name} />
                  </Div>
                  <Div className="p-3">
                    <Typography className="typography card-title">
                      {collection?.name}
                    </Typography>
                    
                    <Div className="flex items-center justify-between">
                      <Div>
                        <Typography className="typography-sub">Price</Typography>
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
                        <Typography className="typography-sub">Ratings</Typography>
                      </Div>
                      <Rating
                          name="size-small"
                          defaultValue={2}
                          size="small"
                          readOnly
                        />
                    </Div>

                    
                    <Div className="flex items-center justify-between">
                      <Div>
                        <Typography className="typography-sub">Reviews</Typography>
                      </Div>
                    <Div>
                    <Typography className="typography-sub">20</Typography>

                    </Div>
                    </Div>


                  </Div>
                </Card>
               ))}
          </Box>
      </Section>
    </Container>
    </Box>
  );
};

export default Shop;
