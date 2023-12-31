"use client"
import UploadModal from "./UploadModal"
import React, { useState } from "react"

export default function MaterialBigCard({fileList, setFileList, setFilteredList}) {

  const handlePdf = () => {
    const pdfs = fileList.filter(file => file.format === "pdf")
    setFilteredList(pdfs)
  }

  const handleDoc = () => {
    const docTypes = {
      txt:true,
      rtf: true,
      doc: true,
      docm: true,
      docx: true,
      pages: true,
      html: true,
    }
    const docs = fileList.filter(file => docTypes[file.format])
    setFilteredList(docs)
  }

  const handlePpt = () => {
    const pptTypes = {
      ppt: true,
      ppsx:true,
      pptx: true,
      key: true,
    }
    const ppt = fileList.filter(file => pptTypes[file.format])
    setFilteredList(ppt)
  }

  const handleExcel = () => {
    const excelTypes = {
      xlsx: true,
      xls:true,
      xlsb: true,
      xltm: true,
      xlsm: true,
      xml: true,
      numbers: true,

    }
    const excel = fileList.filter(file => excelTypes[file.format])
    setFilteredList(excel)
  }

  return (
    <>
      <div className="flex w-full justify-between">
        {/* px-4 pt-10 */}
        <h1 className="text-2xl font-semibold">Materials</h1>
        <div>
          {/* Your page content here */}
          <UploadModal updateList={(file)=> {
            setFileList( prev => ([...prev, file]))
            setFilteredList()
          }}/>
        </div>
      </div >
      {/* Big Cards */}
      < section className="text-gray-800 body-font py-10" >
        <div className="container">
          <h3 className="text-xl font-semibold">
              File Type
          </h3>

          <div className="flex flex-wrap md:m-4 w-full justify-evenly">
          {/* PDF Card */}
            <div onClick={handlePdf} className="w-1/4 lg:w-1/6 md:w-1/2 md:p-4 rounded-lg bg-zinc-50 hover:bg-zinc-100 cursor-pointer">
              <div className="flex items-center relative md:h-36 rounded overflow-hidden">
                <img alt="ecommerce" className="mx-auto md:w-28 md:h-28 block" src="/images/pdf1.png" />
              </div>
              <div className="mt-4">
                <h3 className="hidden md:block text-gray-500  text-xs tracking-widest title-font mb-1">CATEGORY</h3>
                <h2 className="hidden md:block text-gray-900 title-font text-lg font-medium">PDF Files</h2>
                {/* <p className="mt-1">$21.15</p> */}
              </div>
            </div>
           {/* Document Card */}
            <div onClick={handleDoc} className="w-1/4 lg:w-1/6 md:w-1/2 md:p-4 rounded-lg bg-zinc-50 hover:bg-zinc-100 cursor-pointer">
              <a className="flex items-center relative md:h-36 rounded overflow-hidden">
                <img alt="ecommerce" className="mx-auto md:w-28 md:h-28 block" src="/images/doc1.png" />
              </a>
              <div className="mt-4">
                <h3 className="hidden md:block text-gray-500 text-xs tracking-widest title-font mb-1">CATEGORY</h3>
                <h2 className="hidden md:block text-gray-900 title-font text-lg font-medium">Word</h2>
                {/* <p className="mt-1">$16.00</p> */}
              </div>
            </div>
           {/* PowerPoint Card */}
            <div onClick={handlePpt} className="w-1/4 lg:w-1/6 md:w-1/2 md:p-4 w rounded-lg bg-zinc-50 hover:bg-zinc-100 cursor-pointer">
              <a className="flex items-center relative md:h-36 rounded overflow-hidden">
                <img alt="ecommerce" className="mx-auto md:w-28 md:h-28 block" src="/images/ppt1.png" />
              </a>
              <div className="mt-4">
                <h3 className="hidden md:block text-gray-500 text-xs tracking-widest title-font mb-1">CATEGORY</h3>
                <h2 className="hidden md:block text-gray-900 title-font text-lg font-medium">PowerPoint</h2>
                {/* <p className="mt-1">$12.00</p> */}
              </div>
            </div>
             {/* Excel Card */}
            <div onClick={handleExcel} className="w-1/4 lg:w-1/6 md:w-1/2 md:p-4 rounded-lg bg-zinc-50 hover:bg-zinc-100 cursor-pointer">
              <a className="flex items-center relative md:h-36 rounded overflow-hidden">
                <img alt="ecommerce" className="mx-auto md:w-28 md:h-28 block" src="/images/xls1.png" />
              </a>
              <div className="mt-4">
                <h3 className="hidden md:block text-gray-500 text-xs tracking-widest title-font mb-1">CATEGORY</h3>
                <h2 className="hidden md:block text-gray-900 title-font text-lg font-medium">Excel</h2>
                {/* <p className="mt-1">$18.40</p> */}
              </div>
            </div>
          </div>
        </div>
      </section >
    </>
  )
};

