import { Avatar, Box, Card, CardContent, Grid, LinearProgress, Typography } from '@mui/material';
import ChurchOutlinedIcon from '@mui/icons-material/ChurchOutlined';
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
export const HoWNumber = (props) => (
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
            HOLY HOUSES
          </Typography>
          <Typography
            color="textPrimary"
            variant="h4"
          >
            64
          </Typography>
        </Grid>
        <Grid item>
          <Avatar
            sx={{
              backgroundColor: 'warning.main',
              height: 56,
              width: 56
            }}
          >
            <ChurchOutlinedIcon />
          </Avatar>
        </Grid>
      </Grid>
      <Box sx={{display:"flex", flexDirection:"row",pt:2 }}>
        <ArrowUpwardIcon color="success" />
        <Box sx={{display:"flex", flexDirection:"row"}}>
            <Typography
          color="success"
          sx={{
            mr: 1
          }}
          variant="body2"
        >
          6%
        </Typography>
          <Typography
          color="textSecondary"
          variant="caption"
        >
          Since last month
        </Typography>
        </Box>

      </Box>
    </CardContent>
  </Card>
);
