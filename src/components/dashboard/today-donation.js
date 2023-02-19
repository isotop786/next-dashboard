import { Avatar, Card, CardContent, Grid, Typography } from '@mui/material';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';

export const TodayDonor = (props) => (
  <Card {...props} sx={{
      height: '100%',
     ':hover': {
         boxShadow: 20,
         cursor:'pointer'
      }
  }}>
    <CardContent>
      <Grid
        container
        spacing={3}
        sx={{ justifyContent: 'space-between' }}
      >
        <Grid item>
          <Typography
            color="textSecondary"
            gutterBottom
            variant="overline"
          >
            TODAY`S DONATION
          </Typography>
          <Typography
            color="textPrimary"
            variant="h4"
          >
            $3.4k
          </Typography>
        </Grid>
        <Grid item>
          <Avatar
            sx={{
              backgroundColor: 'primary.main',
              height: 56,
              width: 56
            }}
          >
            <AttachMoneyIcon />
          </Avatar>
        </Grid>
      </Grid>
    </CardContent>
  </Card>
);
