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
      <div className="flex w-full justify-between px-4 pt-10">
        <h1 className="text-2xl">Material</h1>
        <div>
          {/* Your page content here */}
          <UploadModal updateList={(file)=> {
            setFileList( prev => ([...prev, file]))
            setFilteredList()
          }}/>
        </div>
      </div >
      {/* Big Cards */}
      < section className="text-gray-600 body-font" >
        <div className="container px-5 py-10 mx-auto">
          <div className="mb-6">
            File Type
          </div>
          <div className="flex flex-wrap m-4 w-full justify-evenly">
          {/* PDF Card */}
            <div onClick={handlePdf} className="lg:w-1/6 md:w-1/2 p-4 rounded-lg bg-zinc-50 cursor-pointer">
              <div className="flex items-center relative h-36 rounded overflow-hidden">
                <img alt="ecommerce" className="mx-auto w-28 h-28 block" src="/images/pdf1.png" />
              </div>
              <div className="mt-4">
                <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">CATEGORY</h3>
                <h2 className="text-gray-900 title-font text-lg font-medium">PDF Files</h2>
                {/* <p className="mt-1">$21.15</p> */}
              </div>
            </div>
           {/* Document Card */}
            <div onClick={handleDoc} className="lg:w-1/6 md:w-1/2 p-4 rounded-lg bg-zinc-50 cursor-pointer">
              <a className="flex items-center relative h-36 rounded overflow-hidden">
                <img alt="ecommerce" className="mx-auto w-28 h-28 block" src="/images/doc1.png" />
              </a>
              <div className="mt-4">
                <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">CATEGORY</h3>
                <h2 className="text-gray-900 title-font text-lg font-medium">Document</h2>
                {/* <p className="mt-1">$16.00</p> */}
              </div>
            </div>
           {/* PowerPoint Card */}
            <div onClick={handlePpt} className="lg:w-1/6 md:w-1/2 p-4 w rounded-lg bg-zinc-50 cursor-pointer">
              <a className="flex items-center relative h-36 rounded overflow-hidden">
                <img alt="ecommerce" className="mx-auto w-28 h-28 block" src="/images/ppt1.png" />
              </a>
              <div className="mt-4">
                <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">CATEGORY</h3>
                <h2 className="text-gray-900 title-font text-lg font-medium">PowerPoint</h2>
                {/* <p className="mt-1">$12.00</p> */}
              </div>
            </div>
             {/* Excel Card */}
            <div onClick={handleExcel} className="lg:w-1/6 md:w-1/2 p-4 rounded-lg bg-zinc-50 cursor-pointer">
              <a className="flex items-center relative h-36 rounded overflow-hidden">
                <img alt="ecommerce" className="mx-auto w-28 h-28 block" src="/images/xls1.png" />
              </a>
              <div className="mt-4">
                <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">CATEGORY</h3>
                <h2 className="text-gray-900 title-font text-lg font-medium">Excel</h2>
                {/* <p className="mt-1">$18.40</p> */}
              </div>
            </div>
          </div>
        </div>
      </section >
    </>
  )
};

