"use client"
import { useState, useEffect } from "react"
import MaterialBigCard from "./MaterialBigCards"
import MaterialTable from "./MaterialTable"


export default function MaterialPage() {

  const [fileList, setFile] = useState()
  const [filteredList, setFilteredList] = useState()

  useEffect(() => {

    const tableInfo = async () => {
      const res = await fetch(`${process.env.NEXT_PUBLIC_ENDPOINT}/files`)
      const data = await res.json()
      setFile(data)
    }
    try {

      tableInfo()
    } catch (err) {
      console.error(err)
    }
  }, [])


  return (
    <>
      <MaterialBigCard fileList={fileList} setFilteredList={setFilteredList}/>
      <MaterialTable filteredList={filteredList || fileList} setFilteredList={setFilteredList}/>
    </>
  )
}