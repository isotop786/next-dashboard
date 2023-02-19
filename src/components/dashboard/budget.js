import { Avatar, Box, Card, CardContent, Grid, Typography } from '@mui/material';
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import MoneyIcon from '@mui/icons-material/Money';

export const Budget = (props) => (
  <Card
    sx={{
      height: '100%',
       ':hover': {
         boxShadow: 20,
         cursor:'pointer'
      }
    }}
    {...props}
  >
    <CardContent >
      <Grid
        container
        spacing={3}
        sx={{
          justifyContent: 'space-between',  }}
      >
        <Grid item>
          <Typography
            color="textSecondary"
            gutterBottom
            variant="overline"
          >
            TOTAL DONATION
          </Typography>
          <Typography
            color="textPrimary"
            variant="h4"
          >
            $24k
          </Typography>
        </Grid>
        <Grid item>
          <Avatar
            sx={{
              backgroundColor: 'error.main',
              height: 56,
              width: 56
            }}
          >
            <MoneyIcon />
          </Avatar>
        </Grid>
      </Grid>
      <Box
        sx={{
          pt: 2,
          display: 'flex',
          alignItems: 'center'
        }}
      >
        <ArrowUpwardIcon color="success" />
        <Typography
          color="success"
          sx={{
            mr: 1
          }}
          variant="body2"
        >
          12%
        </Typography>
        <Typography
          color="textSecondary"
          variant="caption"
        >
          Since last month
        </Typography>
      </Box>
    </CardContent>
  </Card>
);
