"use client"
import { useState, useEffect } from "react"
import MaterialBigCard from "./MaterialBigCards"
import MaterialTable from "./MaterialTable"


export default function MaterialPage() {

  const [fileList, setFile] = useState()
  const [filteredList, setFilteredList] = useState([])

  useEffect(() => { // Runs when the page first loads

    const tableInfo = async () => {
      const res = await fetch(`${process.env.NEXT_PUBLIC_ENDPOINT}/files`) //Process .env lets you acces the eviroment variables.API end point where the fetch will make a get request.
      //Default behavior of fetch is get.
      const data = await res.json()
      setFile(data) //setFile (is the action) updates the state so the page rerenders. Data (parameter)
      setFilteredList(data)
    }
    try {

      tableInfo()
    } catch (err) {
      console.error(err)
    }
  }, []) //The array is the dependency array. when empty use effect runs once.
  // Anything you put in the dependency array will cause use effect to run again when the value changes.

  return (
    <>
      <MaterialBigCard //Giving the info below to Material Big Card and then the infoamation is recieved.
        fileList={fileList} //props passing information from the parent to the child.
        setFileList={setFile}
        setFilteredList={setFilteredList} />
      <MaterialTable filteredList={filteredList || fileList} setFilteredList={setFilteredList} />
    </>
  )
}