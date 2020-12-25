import { useState, useEffect } from 'react'

export const useContacts = () => {
   const [data, setData] = useState([])
   const [isLoading, setIsLoading] = useState(true)
   const [isError, setIsError] = useState(false)

   useEffect(() => {
      const getContacts = async() => {
         try {
            setIsLoading(true)
            const response = await fetch("http://www.filltext.com/?rows=32&id={number|1000}&firstName={firstName}&lastName={lastName}&email={email}&phone={phone|(xxx)xxx-xx-xx}&address={addressObject}&description={lorem|32}")
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
      isError
   }
}