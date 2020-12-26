import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

const useStyles = makeStyles({
   table: {
   },
 })

export const ContactsTable = ({data, onSort}) => {
   const classes = useStyles()

   return (
      <TableContainer component={Paper}>
      <Table className={classes.table} size="small" aria-label="contacts table">
        <TableHead>
          <TableRow>
            <TableCell onClick={() => {onSort('id')}}>id</TableCell>
            <TableCell onClick={() => {onSort('firstName')}}>firstName</TableCell>
            <TableCell onClick={() => {onSort('lastName')}}>lastName</TableCell>
            <TableCell onClick={() => {onSort('email')}}>email</TableCell>
            <TableCell onClick={() => {onSort('phone')}}>phone</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map((contact) => (
            <TableRow key={contact.id + contact.phone}>
              <TableCell component='th' scope='row'>{contact.id}</TableCell>
              <TableCell>{contact.firstName}</TableCell>
              <TableCell>{contact.lastName}</TableCell>
              <TableCell>{contact.email}</TableCell>
              <TableCell>{contact.phone}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
   )   
}