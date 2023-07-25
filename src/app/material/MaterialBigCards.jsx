"use client"
import UploadModal from "./UploadModal"
import React, { useState } from "react"



export default function MaterialBigCard() {

  return (
    <>
      <div className="flex w-full justify-between px-4 pt-10">
        <h1 className="text-2xl">Material</h1>
        <div>
          {/* Your page content here */}
          <UploadModal />
        </div>
      </div >
      {/* Big Cards */}
      < section className="text-gray-600 body-font" >
        <div className="container px-5 py-10 mx-auto">
          File Type
          <div className="flex flex-wrap -m-4">
          <div className="lg:w-1/4 md:w-1/2 p-4 w-full bg-zinc-50">
              <a className="block relative h-48 rounded overflow-hidden">
                <img alt="ecommerce" className="object-cover object-center w-full h-full block" src="/images/pdf1.png" />
              </a>
              <div className="mt-4">
                <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">CATEGORY</h3>
                <h2 className="text-gray-900 title-font text-lg font-medium">PDF Files</h2>
                {/* <p className="mt-1">$21.15</p> */}
              </div>
            </div>
            <div className="lg:w-1/4 md:w-1/2 p-4 w-full bg-zinc-50">
              <a className="block relative h-48 rounded overflow-hidden">
                <img alt="ecommerce" className="object-cover object-center w-full h-full block" src="/images/doc1.png" />
              </a>
              <div className="mt-4">
                <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">CATEGORY</h3>
                <h2 className="text-gray-900 title-font text-lg font-medium">Document</h2>
                {/* <p className="mt-1">$16.00</p> */}
              </div>
            </div>
            <div className="lg:w-1/4 md:w-1/2 p-4 w-full bg-zinc-50">
              <a className="block relative h-48 rounded overflow-hidden">
                <img alt="ecommerce" className="object-cover object-center w-full h-full block" src="/images/ppt1.png" />
              </a>
              <div className="mt-4">
                <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">CATEGORY</h3>
                <h2 className="text-gray-900 title-font text-lg font-medium">PowerPoint</h2>
                {/* <p className="mt-1">$12.00</p> */}
              </div>
            </div>
            <div className="lg:w-1/4 md:w-1/2 p-4 w-full bg-zinc-50">
              <a className="block relative h-48 rounded overflow-hidden">
                <img alt="ecommerce" className="object-cover object-center w-full h-full block" src="/images/xls1.png" />
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

