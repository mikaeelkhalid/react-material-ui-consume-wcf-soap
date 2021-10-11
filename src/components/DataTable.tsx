import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import IconButton from '@material-ui/core/IconButton';
import DeleteOutlined from '@material-ui/icons/DeleteOutlined';
import EditOutlined from '@material-ui/icons/EditOutlined';

const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
});
const DataTable = (props: any) => {
  const classes = useStyles();
  return (
    <>
      <TableContainer component={Paper}>
        <Table className={classes.table} aria-label='customer data'>
          <TableHead>
            <TableRow>
              <TableCell>Name</TableCell>
              <TableCell align='right'>Account #</TableCell>
              <TableCell align='right'>Active Date</TableCell>
              <TableCell align='right'>Customer Rank</TableCell>
              <TableCell align='right'>Customer Type</TableCell>
              <TableCell align='right'>Customer Status</TableCell>
              <TableCell align='right'>Action</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {props.customers.map((customer: any) => (
              <TableRow key={customer.id}>
                <TableCell component='th' scope='row'>
                  {customer.name}
                </TableCell>
                <TableCell align='right'>{customer.accountNo}</TableCell>
                <TableCell align='right'>{customer.activeData}</TableCell>
                <TableCell align='right'>{customer.customerRank}</TableCell>
                <TableCell align='right'>{customer.customerType}</TableCell>
                <TableCell align='right'>{customer.customerStatus}</TableCell>
                <TableCell align='right'>
                  <IconButton href={`/update/${customer.id}`}>
                    <EditOutlined />
                  </IconButton>{' '}
                  |
                  <IconButton onClick={() => props.handleDelete(customer.id)}>
                    <DeleteOutlined />
                  </IconButton>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
};

export default DataTable;
