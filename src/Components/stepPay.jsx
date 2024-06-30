import * as React from 'react';
import Stepper from '@mui/joy/Stepper';
import Step, { stepClasses } from '@mui/joy/Step';
import StepIndicator, { stepIndicatorClasses } from '@mui/joy/StepIndicator';
import Typography from '@mui/joy/Typography';
import ShoppingCartRoundedIcon from '@mui/icons-material/ShoppingCartRounded';
import FormatListBulletedRoundedIcon from '@mui/icons-material/FormatListBulletedRounded';
import CreditCardRoundedIcon from '@mui/icons-material/CreditCardRounded';
import CheckCircleRoundedIcon from '@mui/icons-material/CheckCircleRounded';

export default function IconStepper() {
  return (
    <Stepper
      size="lg"
      orientation="vertical"
      sx={{
        width: '100%',
        '--StepIndicator-size': '3rem',
        '--Step-connectorInset': '0px',
        [`& .${stepIndicatorClasses.root}`]: {
          borderWidth: 4,
        },
        [`& .${stepClasses.root}::after`]: {
          height: 4,
        },
        [`& .${stepClasses.completed}`]: {
          [`& .${stepIndicatorClasses.root}`]: {
            borderColor: 'primary.300',
            color: 'primary.300',
          },
          '&::after': {
            bgcolor: 'primary.300',
          },
        },
        [`& .${stepClasses.active}`]: {
          [`& .${stepIndicatorClasses.root}`]: {
            borderColor: 'currentColor',
          },
        },
        [`& .${stepClasses.disabled} *`]: {
          color: 'neutral.outlinedDisabledColor',
        },
      }}
    >
      <Step color
        completed
        indicator={
          <StepIndicator variant="outlined"  position="right">
            <ShoppingCartRoundedIcon sx={{color:'rgb(10, 63, 61)'}}/>
          </StepIndicator>
        }
      />
      <Step
        completed
        indicator={
          <StepIndicator variant="outlined" color="rgb(10, 63, 61)" position="right">
            <FormatListBulletedRoundedIcon />
          </StepIndicator>
        }
      />
      <Step
        active
        indicator={
          <StepIndicator variant="solid" color="rgb(10, 63, 61)" position="right">
            <CreditCardRoundedIcon />
          </StepIndicator>
        }
      >
        <Typography
          sx={{
            textTransform: 'uppercase',
            fontWeight: 'lg',
            fontSize: '0.75rem',
            letterSpacing: '0.5px',
          }}
        >
          תשלום וחיוב
        </Typography>
      </Step>
      <Step
        disabled
        indicator={
          <StepIndicator variant="outlined" color="neutral" position="right">
            <CheckCircleRoundedIcon />
          </StepIndicator>
        }
      />
    </Stepper>
  );
}
