import { useState } from 'react'
import { Grid, Paper, 
         Container } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles';
import { useContacts } from './useContacts'
import { ContactsTable } from '../Components/Table/ContactsTable'
import { ContactInfo } from '../Components/ContactInfo/ContactInfo'
import Switch from '../Components/Switch/Switch';

const useStyles = makeStyles((theme) => ({
   root: {
     marginTop: theme.spacing(3),
   },
 }))

export const Contacts = () => {
   const classes = useStyles()
   const [ isDataSelected, setIsDataSelected ] = useState(false)
   const [ isRowSelected, setIsRowSelected ] = useState(false)
   const [sortDirection, setSortDirection] = useState(true)
   const [fieldData, setfieldData] = useState('')
   const [contactInfo, setContactInfo] = useState('')
   const [url, setUrl] = useState('')
   const contacts = useContacts( url )

   const onSort = (field) => {
      const copyData = contacts.data.concat()
      setSortDirection(!sortDirection)

      let sort 
      if (sortDirection) {
         sort = copyData.sort(
            (a, b) => { return a[field] > b[field] ? 1 : -1 }
         )
      } sort = copyData.reverse(
         (a, b) => { return a[field] > b[field] ? 1 : -1 }
      )
      contacts.setData(sort)
   }
   const showInfo = (field) => {
      setContactInfo(field)
      setIsRowSelected(true)
   }
   const handleSwitch = (url) => {
      setUrl(url)
      setIsDataSelected(true)
   }

   return ( 
      <Container className={classes.root}>
         <Grid container spacing={3} style={{display: "flex", justifyContent: "center"}}>
            {(!isDataSelected) ? <Switch handleSwitch={handleSwitch}/>
               : <>
                  <Grid item xs={12}>
                     <Paper> Add contact </Paper>
                  </Grid>
                  <Grid item xs={12}>
                     <Paper> Search </Paper>
                  </Grid>
                  <Grid item xs={12}>
                     {(() => {
                        if (contacts.isLoading) {
                           return <div> ...loading </div>
                        }
                        if (contacts.isError) {
                           return <div> error! </div>
                        }
                        return <ContactsTable 
                           data = {contacts.data}
                           onSort = {onSort}
                           sortDirection = {sortDirection}
                           showInfo = {showInfo}
                           setfieldData ={setfieldData}
                           fieldData ={fieldData}
                           />
                     })()}
                  </Grid>
                  <Grid item xs={12}>
                     <Paper> Pagination </Paper>
                  </Grid>
                  { isRowSelected ? <Grid item xs={12}>
                     <ContactInfo contactInfo={contactInfo}/> 
                  </Grid> : null }
               </>}
         </Grid> 
      </Container>
   )
}