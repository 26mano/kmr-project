import React from 'react'
import { Box, Card, CardContent, CardHeader, CardMedia, Grid, Stack, Typography } from '@mui/material';
import Link from 'next/link';

export default function api({ detail, post1 }, props) {

  return (
    <Stack alignItems="center" height="100vh" >
      <Grid container display="flex" spacing={4} mt={4} >
      {detail.map((e , i) => {
        return(
      <Grid item lg={3 } key={i}  >

      <Card  >
        <CardHeader
          title={
            <Box display="flex" justifyContent='space-between' >
            <Typography variant="subtitle1" >{e.title}</Typography>
            <Typography>{e.rating}/5</Typography>
            </Box>
          }
          subheader={
            <>
            <Typography variant='body1' >{e.description}</Typography>
            </>
          }
         />
         <CardMedia 
         component="img"
         height="155"
         image={e.thumbnail}
         />
        <CardContent >
          <Link href={`/products/${e.brand}`} >
          <Box display="flex" justifyContent="space-between" >
          <Typography> Brand : {e.brand}</Typography>
          <Typography> Price : {e.price} dollar</Typography>
          </Box>
          </Link>
         
        </CardContent>
      </Card>
          </Grid>
        )
      })}
      </Grid>
      {/* -------------------- */}
      <Grid container display="flex" spacing={4} mt={4} >
      {post1.map((e , i) => {
        return(
      <Grid item lg={3 } key={i} >
      <Card>
        <CardHeader
          title={
            <Box display="flex" justifyContent='space-between' >
            <Typography variant="subtitle1" >{e.title}</Typography>
            <Typography>{e.rating}/5</Typography>
            </Box>
          }
         />
         {/* <CardMedia 
         component="img"
         height="155"
         image={e.thumbnail}
         /> */}
        <CardContent >
          <Box display="flex" justifyContent="space-between" >
          <Typography> Brand : {e.body}</Typography>
          {/* <Typography> Price : {e.price} dollar</Typography> */}
          </Box>
         
        </CardContent>
      </Card>
          </Grid>
        )
      })}
      </Grid>
    
    </Stack>
  )
}



export const getServerSideProps = async () => {
    let get = await fetch (`https://dummyjson.com/products`);
    let post = await fetch (`https://dummyjson.com/posts`);
    let res = await get.json();
    let res1 = await post.json();
    let detail = res.products;
    let post1 = res1.posts;
    return {
      props : {detail , post1}
    }
}