import React from "react";
import {
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
import Card2 from "../../components/Card/Card2";


export default function api({ detail, post1 }, props) {

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
      <Grid container display="flex" spacing={2} mt={4}>
        {post1.map((element, i) => {
          return (
            <Grid item lg={3} key={i} alignItems="normal"
            height="100%" >
              <Card2
                CollegeLogo={element.logo}
                CollegeImage={element.featured_image}
                CollegeName={element.institute_name}
                CollegeDistrict={element.district_name}
                CollegeState={element.state_name}
                // Courses={element.course.map((e) => {  if (e.short_name != "") {return (`${e.short_name} | `); }} )}
                AdmissionFee={element.fees}
                Rating={element.rating}
                Kms={element.dmr}
                sx={{ width: 280 }}
                href={`/colleges/${element.id}-${element.institute_name?.replace(/[ ]/g,"-")}`}
              />
            </Grid>
          );
        })}
      </Grid>
    </Stack>
  );
}

export const getServerSideProps = async () => {
  let get = await fetch(`https://dummyjson.com/products`);
  let post = await fetch(`https://w.kalvimalar.com/colleges`);
  let res = await get.json();
  let res1 = await post.json();
  let detail = res.products;
  let post1 = res1.data;
  return {
    props: { detail, post1 },
  };
};
