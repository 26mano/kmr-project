import React from "react";
import {
  Avatar,
  Box,
  Card,
  CardContent,
  CardHeader,
  CardMedia,
  Grid,
  Link,
  Stack,
  Typography,
} from "@mui/material";

// import {Card2} from "../../components/Card/Card2";

export default function Production({ post1 }, props) {
  return (
    <Stack alignItems="center" height="100%">
    
      <Grid container display="flex" spacing={2} mt={4}>
        {post1?.map((element, i) => {
          return (
            <Grid item lg={3} key={i} alignItems="normal" height="100%">
              <Card
                sx={{
                  height: "100%",
                  width: 280,
                  bgcolor: "common.white",
                  display: "grid",
                  color: "common.black",
                  borderRadius: "13px",
                  alignItems: "normal",
                }}
                // onClick={onClick}
              >
                {/* <Box>
                  <CardMedia
                    component="img"
                    height="150"
                    image={`${element.featured_image}`}
                    alt={element.institute_name}
                  />
                </Box> */}

                <CardHeader
                  sx={{ display: "flex" }}

                  title={
                    <Box
                      sx={{
                        display: "flex",
                        ml: 13.7,
                        mt: -3,
                        position: "relative",
                      }}
                    >
                      {/* <StarRateIcon
                        sx={{
                          bgcolor: "grey.200",
                          // bgcolor:themeMode === true ? "grey.800":'goldenrod',
                          color: "goldenrod",
                          // color: themeMode === true ? "goldenrod" :"common.white",
                          borderRadius: "20px",
                          boxShadow: "2px 1px 1px rgb(0,0,0,0.2)",
                          position: "absolute",
                          ml: -2,
                          mt: -0.3,
                          width: 27,
                          height: 27,
                          zIndex: "9999px !important",
                          p: "4px",
                          // color: "#F0A500"
                        }}
                      /> */}
                      <Typography
                        variant="body1"
                        sx={{
                          color: "grey.500",
                          bgcolor: "grey.300",
                          fontWeight: 600,
                          borderRadius: "0px 10px 10px 0px",
                          px: "6px",
                          pl: 2,
                        }}
                      >
                        {(element.name)}
                      </Typography>
                    </Box>
                  }
                />

                 {/* <Typography variant="h6" > {element.name} </Typography> */}
                <CardContent
                  sx={{ mt: -1, display: "grid", justifyContent: "left" }}
                >
                  {
                    <>
                      <Link href={`/colleges/${element.id}-${element.institute_name?.replace(/[ ]/g, "-")}`}>
                        <Typography
                          variant="title"
                          sx={{ color: "primary.dark" }}
                        >
                          {element.institute_name}
                        </Typography>
                      </Link>
                    </>
                  }
                  {
                    <>
                      <Typography
                        variant="caption"
                        sx={{ display: "flex", color: "grey.600" }}
                        gutterBottom
                      >
                        {/* <LocationOn
                          sx={{
                            fontSize: "14px",
                            pr: "2px",
                            color: "grey.600",
                          }}
                        /> */}
                        {element.district_name},{element.state_name}
                      </Typography>
                    </>
                  }
                </CardContent>
              </Card>
            </Grid>
          );
        })}
      </Grid>
    </Stack>
  );
}

export const getServerSideProps = async () => {
  let post = await fetch(`https://api-staging.kalvimalar.com/colleges` , { method:"GET" } );
  let res1 = await post.json();
  let post1 = res1.data;
  return {
    props: { post1 },
  };
};
