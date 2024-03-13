import Container from '@mui/material/Container';
import Grid from '@mui/material/Unstable_Grid2';
import Typography from '@mui/material/Typography';

import {
  holdingsData,
  topHoldingsData,
  currentValuesData,
  portfolioVisitsData,
} from 'src/_mock/chart';

import Holdings from '../holdings';
import TopHoldings from '../topHoldings';
import CurrentValues from '../currentValues';
import PortfolioVisits from '../portfolioVisits';

export default function AppView() {
  return (
    <Container maxWidth="xl">
      <Typography variant="h4" sx={{ mb: 5 }}>
        Metagora Mobile Trial Task
      </Typography>

      <Grid container spacing={3}>
        <Grid xs={12} md={6} lg={8}>
          <PortfolioVisits
            title={portfolioVisitsData.title}
            chart={{ labels: portfolioVisitsData.labels, series: portfolioVisitsData.series }}
          />
        </Grid>

        <Grid xs={12} md={6} lg={4}>
          <CurrentValues
            title={currentValuesData.title}
            chart={{ series: currentValuesData.series }}
          />
        </Grid>

        <Grid xs={12} md={6} lg={8}>
          <Holdings
            title={holdingsData.title}
            subheader={holdingsData.subheader}
            chart={{ series: holdingsData.series }}
          />
        </Grid>

        <Grid xs={12} md={6} lg={4}>
          <TopHoldings
            title={topHoldingsData.title}
            chart={{ categories: topHoldingsData.categories, series: topHoldingsData.series }}
          />
        </Grid>
      </Grid>
    </Container>
  );
}
