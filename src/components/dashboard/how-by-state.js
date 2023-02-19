import { Bar } from 'react-chartjs-2';
import { Box, Button, Card, CardContent, CardHeader, Divider, useTheme } from '@mui/material';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import ArrowRightIcon from '@mui/icons-material/ArrowRight';

export const HowByState = (props) => {
  const theme = useTheme();

  const data = {
    datasets: [
      {
        backgroundColor: '#14B8A6',
        barPercentage: 0.5,
        barThickness: 12,
        borderRadius: 4,
        categoryPercentage: 0.5,
        data: [18, 5, 19, 27, 29, 19, 20,23,12,23,34,21],
        label: 'This year',
        maxBarThickness: 10
      }
    ],
    labels: ['AL', 'AK', 'PA', 'AZ', 'MN', 'OH', 'CA','FL','TX','MA','GA','MI']
  };

  const options = {
    indexAxis:'y',
    animation: true,
    cornerRadius: 20,
    layout: { padding: 0 },
    legend: { display: false },
    maintainAspectRatio: false,
    responsive: true,
    // xAxes: [
    //   {
    //     ticks: {
    //       fontColor: theme.palette.text.secondary
    //     },
    //     gridLines: {
    //       display: false,
    //       drawBorder: false
    //     }
    //   }
    // ],
    // yAxes: [
    //   {
    //     ticks: {
    //       fontColor: theme.palette.text.secondary,
    //       beginAtZero: true,
    //       min: 0
    //     },
    //     gridLines: {
    //       borderDash: [2],
    //       borderDashOffset: [2],
    //       color: theme.palette.divider,
    //       drawBorder: false,
    //       zeroLineBorderDash: [2],
    //       zeroLineBorderDashOffset: [2],
    //       zeroLineColor: theme.palette.divider
    //     }
    //   }
    // ],
    tooltips: {
      backgroundColor: theme.palette.background.paper,
      bodyFontColor: theme.palette.text.secondary,
      borderColor: theme.palette.divider,
      borderWidth: 1,
      enabled: true,
      footerFontColor: theme.palette.text.secondary,
      intersect: false,
      mode: 'index',
      titleFontColor: theme.palette.text.primary
    }
  };

  return (
    <Card {...props} sx={{
      ':hover': {
         boxShadow: 20,
         cursor:'pointer'
      }
    }}>
      <CardHeader
        // action={(
        //   <>
        //   <Button
        //     endIcon={<ArrowDropDownIcon fontSize="small" />}
        //     size="small"
        //   >
        //     Last 7 days
        //     </Button>
        //   <Button
        //     endIcon={<ArrowDropDownIcon fontSize="small" />}
        //     size="small"
        //   >
        //     Last 7 days
        //     </Button>
        //   </>
        // )}
        title="Holy Houses by State"
      />
      <Divider />
      <CardContent>
        <Box
          sx={{
            height: 300,
            position: 'relative'
          }}
        >
          <Bar
            data={data}
            options={options}
          />
        </Box>
      </CardContent>
      {/* <Divider /> */}
      {/* <Box
        sx={{
          display: 'flex',
          justifyContent: 'flex-end',
          p: 2
        }}
      >
        <Button
          color="primary"
          endIcon={<ArrowRightIcon fontSize="small" />}
          size="small"
        >
          Overview
        </Button>
      </Box> */}
    </Card>
  );
};
