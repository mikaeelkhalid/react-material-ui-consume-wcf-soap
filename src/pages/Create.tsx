import React, { useState } from 'react';
import {
  Container,
  Typography,
  Button,
  makeStyles,
  Grid,
} from '@material-ui/core';

import KeyboardArrowRightIcon from '@material-ui/icons/KeyboardArrowRight';

import TextField from '@material-ui/core/TextField';

import { useHistory } from 'react-router-dom';

// import { DatePicker } from '@material-ui/pickers';

import axios from 'axios';

const useStyles = makeStyles({
  field: {
    marginTop: 20,
    marginBottom: 10,
    display: 'block',
  },
  saveBtn: {
    float: 'right',
    marginRight: 180,
    marginTop: 20,
    padding: 10,
  },
});

const Create = () => {
  const classes = useStyles();
  const history = useHistory();
  const [name, setName] = useState('');
  const [accountNo, setAccountNo] = useState('');
  const [activeData, setActiveData] = useState('');
  const [customerRank, setCustomerRank] = useState('');
  const [customerType, setCustomerType] = useState('');
  const [customerStatus, setCustomerStatus] = useState('');
  const [DOB, setDOB] = useState('');
  const [gender, setGender] = useState('');
  const [ntn, setNtn] = useState('');

  const [nameError, setNameError] = useState(false);
  const [accountNoError, setAccountNoError] = useState(false);
  const [activeDateError, setActiveDateError] = useState(false);
  const [customerRankError, setCustomerRankError] = useState(false);
  const [customerTypeError, setCustomerTypeError] = useState(false);
  const [customerStatusError, setCustomerStatusError] = useState(false);
  const [DOBError, setDOBError] = useState(false);
  const [genderError, setGenderError] = useState(false);
  const [ntnError, setNtnError] = useState(false);

  // const [selectedDate, handleDateChange] = useState(new Date());

  const handleSubmit = (e: any) => {
    e.preventDefault();

    setNameError(false);
    setAccountNoError(false);
    setActiveDateError(false);
    setCustomerRankError(false);
    setCustomerTypeError(false);
    setCustomerStatusError(false);
    setDOBError(false);
    setGenderError(false);
    setNtnError(false);

    if (name === '') {
      setNameError(true);
    }
    if (accountNo === '') {
      setAccountNoError(true);
    }
    if (activeData === '') {
      setActiveDateError(true);
    }
    if (customerRank === '') {
      setCustomerRankError(true);
    }
    if (customerType === '') {
      setCustomerTypeError(true);
    }
    if (customerStatus === '') {
      setCustomerStatusError(true);
    }
    if (DOB === '') {
      setDOBError(true);
    }
    if (gender === '') {
      setGenderError(true);
    }
    if (ntn === '') {
      setNtnError(true);
    }

    if (
      name &&
      accountNo &&
      activeData &&
      customerRank &&
      customerType &&
      customerStatus &&
      DOB &&
      gender &&
      ntn
    ) {
      var xmlData = `<s:Envelope xmlns:s="http://schemas.xmlsoap.org/soap/envelope/">
          <s:Body>
        <InsertCustomer xmlns="http://tempuri.org/">
          <c xmlns:d4p1="http://schemas.datacontract.org/2004/07/CustomerWcf" xmlns:i="http://www.w3.org/2001/XMLSchema-instance">
            <d4p1:DOB>${DOB}</d4p1:DOB>
            <d4p1:accountNo>${accountNo}</d4p1:accountNo>
            <d4p1:activeData>${activeData}</d4p1:activeData>
            <d4p1:customerRank>${customerRank}</d4p1:customerRank>
            <d4p1:customerStatus>${customerStatus}</d4p1:customerStatus>
            <d4p1:customerType>${customerType}</d4p1:customerType>
            <d4p1:gender>${gender}</d4p1:gender>
            <d4p1:name>${name}</d4p1:name>
            <d4p1:ntn>${ntn}</d4p1:ntn>
          </c>
        </InsertCustomer>
      </s:Body>
    </s:Envelope>`;
      axios
        .post(`http://localhost:58629/CustomerService.svc`, xmlData, {
          headers: {
            'Content-Type': 'text/xml',
            SOAPAction: 'http://tempuri.org/ICustomerService/InsertCustomer',
          },
        })
        .then(() => history.push('/customers', `${name} successfully added!`));
    }
  };

  return (
    <Container>
      <Typography
        variant='h6'
        color='textSecondary'
        component='h2'
        gutterBottom
      >
        Create a New Customer
      </Typography>

      <form noValidate autoComplete='off' onSubmit={handleSubmit}>
        <Grid container spacing={3}>
          <Grid item xs={6} sm={4} md={4}>
            <TextField
              onChange={(e) => setName(e.target.value)}
              className={classes.field}
              label='Name'
              variant='outlined'
              color='secondary'
              size='small'
              required
              error={nameError}
            />
          </Grid>
          <Grid item xs={6} sm={4} md={4}>
            <TextField
              onChange={(e) => setAccountNo(e.target.value)}
              className={classes.field}
              label='Account #'
              variant='outlined'
              color='secondary'
              size='small'
              required
              error={accountNoError}
            />
          </Grid>
          <Grid item xs={6} sm={4} md={4}>
            <TextField
              onChange={(e) => setActiveData(e.target.value)}
              className={classes.field}
              label='Active Date'
              variant='outlined'
              color='secondary'
              size='small'
              required
              error={activeDateError}
            />
          </Grid>

          <Grid item xs={6} sm={4} md={4}>
            <TextField
              onChange={(e) => setCustomerRank(e.target.value)}
              className={classes.field}
              label='Customer Rank'
              variant='outlined'
              color='secondary'
              size='small'
              required
              error={customerRankError}
            />
          </Grid>
          <Grid item xs={6} sm={4} md={4}>
            <TextField
              onChange={(e) => setCustomerType(e.target.value)}
              className={classes.field}
              label='Customer Type'
              variant='outlined'
              color='secondary'
              size='small'
              required
              error={customerTypeError}
            />
          </Grid>
          <Grid item xs={6} sm={4} md={4}>
            <TextField
              onChange={(e) => setCustomerStatus(e.target.value)}
              className={classes.field}
              label='Customer Status'
              variant='outlined'
              color='secondary'
              size='small'
              required
              error={customerStatusError}
            />
          </Grid>
          <Grid item xs={6} sm={4} md={4}>
            <TextField
              onChange={(e) => setDOB(e.target.value)}
              className={classes.field}
              label='DOB'
              variant='outlined'
              color='secondary'
              size='small'
              required
              error={DOBError}
            />
          </Grid>
          <Grid item xs={6} sm={4} md={4}>
            <TextField
              onChange={(e) => setGender(e.target.value)}
              className={classes.field}
              label='Gender'
              variant='outlined'
              color='secondary'
              size='small'
              required
              error={genderError}
            />
          </Grid>
          <Grid item xs={6} sm={4} md={4}>
            <TextField
              onChange={(e) => setNtn(e.target.value)}
              className={classes.field}
              label='NTN'
              variant='outlined'
              color='secondary'
              size='small'
              required
              error={ntnError}
            />
          </Grid>
        </Grid>

        <Button
          className={classes.saveBtn}
          type='submit'
          color='secondary'
          variant='contained'
          endIcon={<KeyboardArrowRightIcon />}
        >
          Create
        </Button>
      </form>
    </Container>
  );
};

export default Create;
