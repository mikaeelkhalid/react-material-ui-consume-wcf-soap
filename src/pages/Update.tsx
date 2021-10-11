import React, { useState, useEffect } from 'react';
import {
  Container,
  Typography,
  Button,
  makeStyles,
  Grid,
} from '@material-ui/core';

import KeyboardArrowRightIcon from '@material-ui/icons/KeyboardArrowRight';

import TextField from '@material-ui/core/TextField';

import { useHistory, useParams } from 'react-router-dom';

import { getCustomerById, editCustomer } from '../apis/api';

import xml2js from 'xml2js';

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

const initialValue = {
  name: '',
  accountNo: '',
  activeData: '',
  customerRank: '',
  customerType: '',
  customerStatus: '',
  gender: '',
  DOB: '',
  ntn: '',
};

const Update = () => {
  const classes = useStyles();

  const [customer, setCustomer] = useState<typeof initialValue>(initialValue);
  const {
    name,
    accountNo,
    activeData,
    customerRank,
    customerType,
    customerStatus,
    gender,
    DOB,
    ntn,
  } = customer;

  const { id } = useParams<any>();

  let history = useHistory();

  useEffect(() => {
    fetchCustomer(id);
  }, [id]);

  const fetchCustomer = async (id: number) => {
    try {
      const result = await getCustomerById(id);

      let parser = new xml2js.Parser();

      let res: any = await result.data.replace(
        /<(\/?)([^:>\s]*:)?([^>]+)>/g,
        '<$1$3>'
      );

      await parser.parseString(res, function (err: any, result: any) {
        setCustomer(
          result.Envelope.Body[0].GetCustomerByIdResponse[0]
            .GetCustomerByIdResult[0].Customer[0]
        );
      });
    } catch (error) {
      console.log(error);
    }
  };

  const onValueChange = (e: any) => {
    setCustomer({ ...customer, [e.target.name]: e.target.value });
  };

  const updateCustomer = async () => {
    try {
      await editCustomer(customer, id);

      history.push('/customers', `${name} successfully updated!`);
    } catch (error) {
      console.log(error);
    }
  };

  console.log(customer);
  return (
    <Container>
      <Typography
        variant='h6'
        color='textSecondary'
        component='h2'
        gutterBottom
      >
        Update {name}
      </Typography>

      <form noValidate autoComplete='off'>
        <Grid container spacing={3}>
          <Grid item xs={6} sm={4} md={4}>
            <TextField
              onChange={(e) => onValueChange(e)}
              className={classes.field}
              label='Name'
              name='name'
              variant='outlined'
              color='secondary'
              size='small'
              value={name}
              required
            />
          </Grid>
          <Grid item xs={6} sm={4} md={4}>
            <TextField
              onChange={(e) => onValueChange(e)}
              className={classes.field}
              label='Account #'
              variant='outlined'
              name='accountNo'
              color='secondary'
              size='small'
              value={accountNo}
              required
            />
          </Grid>
          <Grid item xs={6} sm={4} md={4}>
            <TextField
              onChange={(e) => onValueChange(e)}
              className={classes.field}
              label='Active Date'
              name='activeData'
              variant='outlined'
              color='secondary'
              size='small'
              value={activeData}
              required
            />
          </Grid>

          <Grid item xs={6} sm={4} md={4}>
            <TextField
              onChange={(e) => onValueChange(e)}
              className={classes.field}
              label='Customer Rank'
              name='customerRank'
              variant='outlined'
              color='secondary'
              size='small'
              value={customerRank}
              required
            />
          </Grid>
          <Grid item xs={6} sm={4} md={4}>
            <TextField
              onChange={(e) => onValueChange(e)}
              className={classes.field}
              label='Customer Type'
              name='customerType'
              variant='outlined'
              color='secondary'
              size='small'
              value={customerType}
              required
            />
          </Grid>
          <Grid item xs={6} sm={4} md={4}>
            <TextField
              onChange={(e) => onValueChange(e)}
              className={classes.field}
              label='Customer Status'
              name='customerStatus'
              variant='outlined'
              color='secondary'
              size='small'
              value={customerStatus}
              required
            />
          </Grid>
          <Grid item xs={6} sm={4} md={4}>
            <TextField
              onChange={(e) => onValueChange(e)}
              className={classes.field}
              label='DOB'
              name='DOB'
              variant='outlined'
              color='secondary'
              size='small'
              value={DOB}
              required
            />
          </Grid>
          <Grid item xs={6} sm={4} md={4}>
            <TextField
              onChange={(e) => onValueChange(e)}
              className={classes.field}
              label='Gender'
              name='gender'
              variant='outlined'
              color='secondary'
              size='small'
              value={gender}
              required
            />
          </Grid>
          <Grid item xs={6} sm={4} md={4}>
            <TextField
              onChange={(e) => onValueChange(e)}
              className={classes.field}
              label='NTN'
              name='ntn'
              variant='outlined'
              color='secondary'
              size='small'
              value={ntn}
              required
            />
          </Grid>
        </Grid>

        <Button
          className={classes.saveBtn}
          onClick={() => updateCustomer()}
          color='secondary'
          variant='contained'
          endIcon={<KeyboardArrowRightIcon />}
        >
          Update
        </Button>
      </form>
    </Container>
  );
};

export default Update;
