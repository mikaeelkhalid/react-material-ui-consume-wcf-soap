import { useEffect, useState } from 'react';
import DataTable from '../components/DataTable';
import Alert from '@material-ui/lab/Alert';
import Container from '@material-ui/core/Container';
import { useLocation } from 'react-router-dom';

import { getCustomers, deleteCustomer } from '../apis/api';
import { Typography } from '@material-ui/core';

import xml2js from 'xml2js';

const CustomerList = (props: any) => {
  const [customers, setCustomers] = useState<any[]>([]);
  // const [msg, setMsg] = useState<string>('');

  let location = useLocation<string>();

  useEffect(() => {
    fetchCustomers();
  }, []);

  const fetchCustomers = async () => {
    try {
      const result = await getCustomers();

      let parser = new xml2js.Parser();

      let res: any = await result.data.replace(
        /<(\/?)([^:>\s]*:)?([^>]+)>/g,
        '<$1$3>'
      );

      await parser.parseString(res, function (err: any, result: any) {
        setCustomers(
          result.Envelope.Body[0].GetAllCustomerResponse[0]
            .GetAllCustomerResult[0].Customer
        );
      });
    } catch (error) {
      console.log(error);
    }
  };

  const handleDelete = async (id: any) => {
    const res = await deleteCustomer(parseInt(id[0]));
    if (res.status === 200) {
      // setMsg('Customer Deleted Successfully');
      fetchCustomers();
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
        Customer List
      </Typography>
      {location.state ? <Alert severity='success'>{location.state}</Alert> : ''}
      {/* {msg ? <Alert severity='warning'>{msg}</Alert> : ''} */}
      <br />
      <DataTable customers={customers} handleDelete={handleDelete} />
    </Container>
  );
};

export default CustomerList;
