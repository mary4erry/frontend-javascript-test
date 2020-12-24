import { useState, useEffect } from 'react'


export const Table = () => {
   const [contacts, setContacts] = useState([])
   const [isLoading, setIsLoading] = useState(true)
   const [isError, setIsError] = useState(false)

   useEffect(() => {
      const getContacts = async() => {
         setIsLoading(true)
         try {
            const response = await fetch("http://www.filltext.com/?rows=32&id={number|1000}&firstName={firstName}&lastName={lastName}&email={email}&phone={phone|(xxx)xxx-xx-xx}&address={addressObject}&description={lorem|32}")
            const results = await response.json()
            setContacts(results)
            setIsLoading(false)
            setIsError(false)
         } catch (e) {
            setIsLoading(false)
            setIsError(true)
         }
      }
      getContacts()
   }, [])

   if (isLoading) {
      return <div> ...loading </div>
   }
   if (isError) {
      return <div> ...error </div>
   }

   return ( 
      <div>
         <div>search</div>
         <div>Table</div>
         <div>Contacts: {contacts[0].firstName}</div>
         <div>Full Info</div>
         <div>Pagination</div>
      </div>
   )
}