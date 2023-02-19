import { Line } from 'react-chartjs-2';
import { Box, Button, Card, CardContent, CardHeader, Divider, useTheme } from '@mui/material';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import ArrowRightIcon from '@mui/icons-material/ArrowRight';

export const DonationByState = (props) => {
  const theme = useTheme();

  const data = {
    datasets: [
      {
        backgroundColor: '#F04770',
        borderColor: 'rgb(255, 99, 132)',
        barPercentage: 0.5,
        barThickness: 12,
        borderRadius: 4,
        categoryPercentage: 0.5,
        data: [180, 125, 519, 217, 129, 109, 120,123,312,253,134,121],
        label: 'This year',
        fill:true
      },
      {
        backgroundColor: '#ddd',
        borderColor: '#ddd',
        barPercentage: 0.5,
        barThickness: 12,
        borderRadius: 4,
        categoryPercentage: 0.5,
        data: [80, 105, 119, 317, 115, 302, 100,75,92,159,234,221],
        label: 'Last year',

      },
    ],
    labels: ['AL', 'AK', 'PA', 'AZ', 'MN', 'OH', 'CA','FL','TX','MA','GA','MI']
  };

  const options = {
    animation: true,
    cornerRadius: 20,
    layout: { padding: 0 },
    legend: { display: false },
    maintainAspectRatio: false,
    responsive: true,
    xAxes: [
      {
        ticks: {
          fontColor: theme.palette.text.secondary
        },
        gridLines: {
          display: false,
          drawBorder: false
        }
      }
    ],
    yAxes: [
      {
        ticks: {
          fontColor: theme.palette.text.secondary,
          beginAtZero: true,
          min: 0
        },
        gridLines: {
          borderDash: [2],
          borderDashOffset: [2],
          color: theme.palette.divider,
          drawBorder: false,
          zeroLineBorderDash: [2],
          zeroLineBorderDashOffset: [2],
          zeroLineColor: theme.palette.divider
        }
      }
    ],
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
        title="Donations By State"
      />
      <Divider />
      <CardContent>
        <Box
          sx={{
            height: 200,
            position: 'relative'
          }}
        >
          <Line
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
