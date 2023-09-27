import { Box, Grid } from "@mui/material";
import React from "react";

const App = () => {
  const number = [1, 2, 3];
  return (
    <>
      <Grid container>
        <Grid item lg={12}>
          {number.map((item, i) => (
            <Box>{item}</Box>
          ))}
          <Box></Box>
        </Grid>
      </Grid>
    </>
  );
};

export default App;
