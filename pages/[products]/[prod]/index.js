import { Box, Card, CardContent, CardHeader, CardMedia, Grid, Stack, Typography } from "@mui/material";
import React from "react";

function Product({ detail }) {
  return (
    <Stack>
      <Grid container display="flex" spacing={4} >
        {detail.map((e) => {
          return (
            <>
              <Grid item lg={3}>
                <Card>
                  <CardHeader
                    title={
                      <Box display="flex" justifyContent="space-between">
                        <Typography variant="subtitle1">{e.title}</Typography>
                        <Typography>{e.rating}/5</Typography>
                      </Box>
                    }
                    subheader={
                      <>
                        <Typography variant="body1">{e.description}</Typography>
                      </>
                    }
                  />
                  <CardMedia component="img" height="155" image={e.thumbnail} />
                  <CardContent>
                    <Box display="flex" justifyContent="space-between">
                      <Typography> Brand : {e.brand}</Typography>
                      <Typography> Price : {e.price} dollar</Typography>
                    </Box>
                  </CardContent>
                </Card>
              </Grid>
            </>
          );
        })}
      </Grid>
    </Stack>
  );
}

export default Product;

export const getServerSideProps = async (context) => {
  const name = await context.query.prod;
  let get = await fetch(`https://dummyjson.com/products/search?q=${name}`);
  let res = await get.json();
  let detail = res.products;
  return {
    props: { detail },
  };
};
