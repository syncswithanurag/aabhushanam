import CheckCircleRoundedIcon from '@mui/icons-material/CheckCircleRounded';
import LocalShippingRoundedIcon from '@mui/icons-material/LocalShippingRounded';
import RadioButtonUncheckedRoundedIcon from '@mui/icons-material/RadioButtonUncheckedRounded';
import { Box, Button, Chip, Divider, Grid, Paper, Stack, Typography } from '@mui/material';
import { Link as RouterLink, Navigate, useParams } from 'react-router-dom';
import { getOrderById } from '../../../data/orders';

export default function OrderDetailPage() {
  const { orderId } = useParams();
  const order = orderId ? getOrderById(orderId) : undefined;

  if (!order) {
    return <Navigate to='/account/orders' replace />;
  }

  return (
    <Stack spacing={3}>
      <Stack direction='row' alignItems='center' spacing={1} flexWrap='wrap'>
        <Button component={RouterLink} to='/account/orders' sx={{ textTransform: 'none' }}>
          ← Back to orders
        </Button>
      </Stack>

      <Paper sx={{ p: 3, borderRadius: 3 }}>
        <Stack
          direction={{ xs: 'column', sm: 'row' }}
          justifyContent='space-between'
          spacing={2}
          alignItems={{ sm: 'flex-start' }}>
          <Box>
            <Typography variant='h5' fontWeight={700}>
              {order.item}
            </Typography>
            <Typography color='text.secondary' variant='body2'>
              {order.id} • Placed {order.placedAt}
            </Typography>
            <Typography variant='body2' sx={{ mt: 0.5 }}>
              SKU {order.sku}
            </Typography>
          </Box>
          <Stack alignItems={{ xs: 'flex-start', sm: 'flex-end' }} spacing={1}>
            <Chip color={order.status === 'Delivered' ? 'success' : 'warning'} label={order.status} />
            <Typography fontWeight={700}>Rs. {order.amount.toLocaleString()}</Typography>
            <Typography variant='body2' color='text.secondary'>
              {order.payment}
            </Typography>
          </Stack>
        </Stack>
      </Paper>

      <Grid container spacing={2.5}>
        <Grid size={{ xs: 12, md: 7 }}>
          <Paper sx={{ p: 3, borderRadius: 3 }}>
            <Typography variant='h6' fontWeight={700} mb={2}>
              Tracking timeline
            </Typography>
            <Stack spacing={0}>
              {order.timeline.map((step, index) => (
                <Stack key={step.label} direction='row' spacing={2}>
                  <Stack alignItems='center' sx={{ width: 28 }}>
                    {step.completed ? (
                      <CheckCircleRoundedIcon color='success' sx={{ fontSize: 28 }} />
                    ) : (
                      <RadioButtonUncheckedRoundedIcon sx={{ fontSize: 28, color: 'grey.400' }} />
                    )}
                    {index < order.timeline.length - 1 && (
                      <Box
                        sx={{
                          width: 2,
                          flex: 1,
                          minHeight: 24,
                          bgcolor: step.completed ? 'success.light' : 'grey.200',
                          my: 0.25
                        }}
                      />
                    )}
                  </Stack>
                  <Box pb={index < order.timeline.length - 1 ? 2.5 : 0} sx={{ flex: 1 }}>
                    <Typography fontWeight={600}>{step.label}</Typography>
                    <Typography variant='body2' color='text.secondary'>
                      {step.description}
                    </Typography>
                    {step.date && (
                      <Typography variant='caption' color='text.secondary'>
                        {step.date}
                      </Typography>
                    )}
                  </Box>
                </Stack>
              ))}
            </Stack>
          </Paper>
        </Grid>

        <Grid size={{ xs: 12, md: 5 }}>
          <Stack spacing={2}>
            <Paper sx={{ p: 2.5, borderRadius: 3 }}>
              <Stack direction='row' spacing={1} alignItems='center' mb={1}>
                <LocalShippingRoundedIcon color='action' />
                <Typography fontWeight={700}>Shipment</Typography>
              </Stack>
              <Typography variant='body2' color='text.secondary'>
                {order.courier}
              </Typography>
              <Typography variant='body2' sx={{ mt: 0.5 }}>
                AWB: <strong>{order.trackingId}</strong>
              </Typography>
              <Divider sx={{ my: 1.5 }} />
              <Typography variant='body2' fontWeight={600}>
                {order.estimatedDelivery}
              </Typography>
              <Button fullWidth variant='outlined' sx={{ mt: 2, textTransform: 'none' }}>
                Track on courier site
              </Button>
            </Paper>

            <Paper sx={{ p: 2.5, borderRadius: 3 }}>
              <Typography fontWeight={700} mb={1}>
                Delivery address
              </Typography>
              <Typography variant='body2' color='text.secondary'>
                {order.deliveryAddress}
              </Typography>
            </Paper>
          </Stack>
        </Grid>
      </Grid>
    </Stack>
  );
}
