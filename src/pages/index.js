import Head from 'next/head';
import { Box, Container, Grid } from '@mui/material';
import { Budget } from '../components/dashboard/budget';
import { LatestOrders } from '../components/dashboard/latest-orders';
import { LatestProducts } from '../components/dashboard/latest-products';
import { DonationChart } from '../components/dashboard/donation-chart';
import { TasksProgress } from '../components/dashboard/tasks-progress';
import { TotalDonar } from '../components/dashboard/total-donors';
import { TotalProfit } from '../components/dashboard/total-profit';
import { TrafficByDevice } from '../components/dashboard/traffic-by-device';
import { DashboardLayout } from '../components/dashboard-layout';
import { HoWNumber } from '../components/dashboard/number-how';
import { TodayDonor } from '../components/dashboard/today-donation';
import { DonationByHoW } from '../components/dashboard/donation-by-how';
import { DonationByState } from '../components/dashboard/donation-by-state.';
import { HowByState } from '../components/dashboard/how-by-state';

const Page = () => (
  <>
    <Head>
      <title>
        Holypennies | Dashboard
      </title>
    </Head>
    <Box
      component="main"
      sx={{
        flexGrow: 1,
        py: 8
      }}
    >
      <Container maxWidth={false}>
        <Grid
          container
          spacing={3}
        >
          <Grid
            item
            lg={3}
            sm={6}
            xl={3}
            xs={12}
          >
            <Budget />
          </Grid>
          <Grid
            item
            xl={3}
            lg={3}
            sm={6}
            xs={12}
          >
            <TotalDonar />
          </Grid>
          <Grid
            item
            xl={3}
            lg={3}
            sm={6}
            xs={12}
          >
            <HoWNumber />
          </Grid>
          <Grid
            item
            xl={3}
            lg={3}
            sm={6}
            xs={12}
          >
            <TodayDonor sx={{ height: '80%' }} />
          </Grid>
          <Grid
            item
            lg={7}
            md={12}
            xl={9}
            xs={12}
          >
            <DonationChart />
          </Grid>
          <Grid
            item
            lg={5}
            md={12}
            xl={9}
            xs={12}
          >
            {/* <DonationByHoW sx={{ height: '100%' }} /> */}
             <DonationByState />
          </Grid>
          <Grid
            item
            lg={8}
            md={12}
            xl={9}
            xs={12}
          >
          <HowByState/>
          </Grid>
          <Grid
            item
            lg={4}
            md={6}
            xl={3}
            xs={12}
          >
            <DonationByHoW sx={{ height: '100%' }} />
          </Grid>
          <Grid
            item
            lg={4}
            md={6}
            xl={3}
            xs={12}
          >
            <LatestProducts sx={{ height: '100%' }} />
          </Grid>
          <Grid
            item
            lg={8}
            md={12}
            xl={9}
            xs={12}
          >
            <LatestOrders />
          </Grid>
        </Grid>
      </Container>
    </Box>
  </>
);

Page.getLayout = (page) => (
  <DashboardLayout>
    {page}
  </DashboardLayout>
);

export default Page;
