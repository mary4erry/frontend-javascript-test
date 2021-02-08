import { makeStyles, 
        Table,
        TableBody,
        TableCell,
        TableContainer,
        TableHead,
        TableRow,
        Paper } from '@material-ui/core'
import ArrowDropDownIcon  from '@material-ui/icons/ArrowDropDown'
import ArrowDropUpIcon from '@material-ui/icons/ArrowDropUp'
import { AddForm } from '../AddForm/AddForm'
import { SearchForm } from '../Search/SearchForm'

const useStyles = makeStyles({
  table: {
  },
})

export const ContactsTable = ({data, onSort, sortDirection, showInfo, setfieldData, fieldData, onSearchSend, getInputData}) => {
  const classes = useStyles()

  const Arrow = () => {
    return sortDirection ? <ArrowDropUpIcon/> : <ArrowDropDownIcon/>
  }
  const fieldSort = (field) => {
    onSort(field)
    setfieldData(field)
  }

  return (
    <>
    <AddForm getInputData={getInputData}/>
    <SearchForm onSearchSend={onSearchSend}/>
    <TableContainer component={Paper}>
      <Table className={classes.table} size="small" aria-label="contacts table">
        <TableHead>
          <TableRow>
            <TableCell onClick={() => {fieldSort('id')}}>
              id { fieldData === 'id' ? <Arrow /> : null}
            </TableCell>
            <TableCell onClick={() => {fieldSort('firstName')}}>
              firstName { fieldData === 'firstName' ? <Arrow /> : null}
            </TableCell>
            <TableCell onClick={() => {fieldSort('lastName')}}>
              lastName { fieldData === 'lastName' ? <Arrow /> : null}
            </TableCell>
            <TableCell onClick={() => {fieldSort('email')}}>
              email { fieldData === 'email' ? <Arrow /> : null}
            </TableCell>
            <TableCell onClick={() => {fieldSort('phone')}}>
              phone { fieldData === 'phone' ? <Arrow /> : null}
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map((contact) => (
            <TableRow key={contact.id + contact.phone} 
              onClick = {() => showInfo(contact)}>
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
    </>
  )   
}