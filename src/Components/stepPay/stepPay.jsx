import * as React from 'react';
import Stepper from '@mui/joy/Stepper';
import Step, { stepClasses } from '@mui/joy/Step';
import StepIndicator, { stepIndicatorClasses } from '@mui/joy/StepIndicator';
import ShoppingCartRoundedIcon from '@mui/icons-material/ShoppingCartRounded';
import FormatListBulletedRoundedIcon from '@mui/icons-material/FormatListBulletedRounded';
import CreditCardRoundedIcon from '@mui/icons-material/CreditCardRounded';
import CheckCircleRoundedIcon from '@mui/icons-material/CheckCircleRounded';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

export default function IconStepper({ activeStep }) {
  return (
    <Container fluid className="p-0">
      <Row className="justify-content-center">
        <Col xs="12" sm="10" md="8" lg="6">
          <Stepper
            size="lg"
            position="top"
            orientation="horizontal"
            sx={{
              width: '100%',
              direction: 'rtl',
              '--StepIndicator-size': '3rem',
              '--Step-connectorInset': '0px',
              display: 'flex',
              mt: 5,
              justifyContent: 'space-between', // Add space between steps
              [`& .${stepIndicatorClasses.root}`]: {
                borderWidth: 4,
                borderColor: 'white',
                color: 'white',
                bgcolor: 'transparent',
              },
              [`& .${stepClasses.root}::after`]: {
                height: 4,
                bgcolor: 'white',
              },
              [`& .${stepClasses.completed}`]: {
                [`& .${stepIndicatorClasses.root}`]: {
                  borderColor: 'white',
                  color: 'white',
                  bgcolor: 'transparent',
                },
                '&::after': {
                  bgcolor: 'white',
                },
              },
              [`& .${stepClasses.active}`]: {
                [`& .${stepIndicatorClasses.root}`]: {
                  borderColor: 'white',
                  color: 'rgba(26,96,104,255)',
                  bgcolor: 'white',
                },
              },
              [`& .${stepClasses.disabled} *`]: {
                color: 'neutral.outlinedDisabledColor',
              },
            }}
          >
            <Step
              completed={activeStep > 0}
              active={activeStep === 0}
              indicator={
                <StepIndicator
                  variant="outlined"
                  position="right"
                  sx={{
                    bgcolor: activeStep === 0 ? 'white' : 'transparent',
                  }}
                >
                  <ShoppingCartRoundedIcon
                    sx={{ color: activeStep === 0 ? 'rgba(26,96,104,255)' : 'white' }}
                  />
                </StepIndicator>
              }
            />
            <Step
              completed={activeStep > 1}
              active={activeStep === 1}
              indicator={
                <StepIndicator
                  variant="outlined"
                  position="right"
                  sx={{
                    bgcolor: activeStep === 1 ? 'white' : 'transparent',
                  }}
                >
                  <FormatListBulletedRoundedIcon
                    sx={{ color: activeStep === 1 ? 'rgba(26,96,104,255)' : 'white' }}
                  />
                </StepIndicator>
              }
            />
            <Step
              completed={activeStep > 2}
              active={activeStep === 2}
              indicator={
                <StepIndicator
                  variant="outlined"
                  position="right"
                  sx={{
                    bgcolor: activeStep === 2 ? 'white' : 'transparent',
                  }}
                >
                  <CreditCardRoundedIcon
                    sx={{ color: activeStep === 2 ? 'rgba(26,96,104,255)' : 'white' }}
                  />
                </StepIndicator>
              }
            />
            <Step
              disabled={activeStep < 3}
              active={activeStep === 3}
              indicator={
                <StepIndicator
                  variant="outlined"
                  position="right"
                  sx={{
                    bgcolor: activeStep === 3 ? 'white' : 'transparent',
                  }}
                >
                  <CheckCircleRoundedIcon
                    sx={{ color: activeStep === 3 ? 'rgba(26,96,104,255)' : 'white' }}
                  />
                </StepIndicator>
              }
            />
          </Stepper>
        </Col>
      </Row>
    </Container>
  );
}
