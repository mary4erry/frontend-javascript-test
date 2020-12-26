import { useState, useEffect } from 'react'

const urlSmall = "http://www.filltext.com/?rows=32&id={number|1000}&firstName={firstName}&lastName={lastName}&email={email}&phone={phone|(xxx)xxx-xx-xx}&address={addressObject}&description={lorem|32}"
const url = "http://www.filltext.com/?rows=1000&id={number|1000}&firstName={firstName}&delay=3&lastName={lastName}&email={email}&phone={phone|(xxx)xxx-xx-xx}&address={addressObject}&description={lorem|32}"

export const useContacts = () => {
   const [data, setData] = useState([])
   const [isLoading, setIsLoading] = useState(true)
   const [isError, setIsError] = useState(false)
   const [sortDirection, setSortDirection] = useState(true)

   useEffect(() => {
      const getContacts = async() => {
         try {
            setIsLoading(true)
            const response = await fetch(urlSmall)
            const results = await response.json()
            setData(results)
            setIsError(false)
         } catch (e) {
            setIsError(true)
         } finally {
            setIsLoading(false)
         }
      }
      getContacts()
   }, [])

   return {
      data,
      isLoading,
      isError,
      setData,
      sortDirection, 
      setSortDirection
   }
}