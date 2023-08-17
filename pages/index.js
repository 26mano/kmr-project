import React from "react";
import {
  Avatar,
  Box,
  Card,
  CardContent,
  CardHeader,
  CardMedia,
  Grid,
  Stack,
  Typography,
} from "@mui/material";
import Link from "next/link";
import Image from "next/image";
import { StarRate as StarRateIcon} from "@mui/icons-material";
import { LocationOn } from "@mui/icons-material";
// import {Card2} from "../../components/Card/Card2";

export default function index({ detail}, props) {
  return (
    <Stack alignItems="center" height="100%">
      <Grid container display="flex" spacing={4} mt={4}>
        {detail.map((e, i) => {
          return (
            <Grid item lg={3} key={i}>
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
                  <Link href={`/products/${e.brand}`}>
                    <Box display="flex" justifyContent="space-between">
                      <Typography> Brand : {e.brand}</Typography>
                      <Typography> Price : {e.price} dollar</Typography>
                    </Box>
                  </Link>
                </CardContent>
              </Card>
            </Grid>
          );
        })}
      </Grid>
      {/* -------------------- */}
     
    </Stack>
  );
}

export const getServerSideProps = async (context) => {
  let get = await fetch(`https://dummyjson.com/products`);
  let res = await get.json();
  let detail = res.products;

  return {
    props: { detail },
  };
};
