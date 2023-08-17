import { Avatar, Box, Card, CardContent, CardHeader, CardMedia, Grid, Stack, Typography } from "@mui/material";
import Image from "next/image";
import React, { useState } from "react";

function Product({ detail }) {
    const [jsonData , setJsonData] = useState([detail?.[0]]);
    console.log(detail);
  return (
    <Stack>
      <Grid container display="flex" spacing={4} >
        {jsonData.map((e) => {
          return (
            <>
              <Grid item lg={3}>
                <Card>
                  <CardHeader
                    avatar={
                        <Avatar sx={{ width:'50px', height:"50px" }} >
                            <Image  src={e.logo} width={50} height={50} />
                        </Avatar> }
                    title={
                      <Box display="flex" >
                        <Typography variant="subtitle1">{e.institute_name}</Typography>
                        {/* <Typography>{e.collegecode}</Typography> */}
                      </Box>
                    }
                   
                  />
                  <CardMedia component="img" height="155" image={e.featured_image} />
                  <CardContent>
                    <Box display="flex" justifyContent="space-between">
                      <Typography> Brand : {e.affliation}</Typography>
                      {/* <Typography> Price : {e.price} dollar</Typography> */}
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
  let get = await fetch(`https://w.kalvimalar.com/collegedetails?collegeId=${name}`);
  let res = await get.json();
  let detail = res.data || null;
  return {
    props: { detail },
  };
};
