import React from "react";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import MarketSelector from "container/MarketSelector";
import AppLayout from "layout/AppLayout";

function AboutPage() {
  return (
    <Container sx={{ mt: 3 }}>
      <Grid container>
        <Grid item xs={6}>
          <Grid container>
            <Grid item xs={24}>
              <MarketSelector />
            </Grid>
            <Grid item xs={24}>
              <MarketSelector />
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={12}>
          <MarketSelector />
        </Grid>
        <Grid item xs={6}>
          <MarketSelector />
        </Grid>
      </Grid>
    </Container>
  );
}

AboutPage.getLayout = (page) => <AppLayout>{page}</AppLayout>;

export default AboutPage;
