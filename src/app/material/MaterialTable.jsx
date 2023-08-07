"use client"

import { useState } from "react";
import pdfImage from "../../../public/images/pdf1.png"
import docImage from "../../../public/images/doc1.png"
import pptImage from "../../../public/images/ppt1.png"
import excelImage from "../../../public/images/xls1.png"


export default function MaterialTable({ filteredList, setFilteredList }) { //Props passed from parent element

  const [nameSort, setNameSort] = useState()
  const [tagSort, setTagSort] = useState()
  const [currentPage, setCurrentPage] = useState(1);

  // Calculate the start and end index of the files to display based on the current page
  const itemsPerPage = 6; // Number of items to display per page
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const paginatedList = filteredList.slice(startIndex, endIndex);

  const handlePrevPage = () => {
    setCurrentPage((prevPage) => Math.max(prevPage - 1, 1));
  };

  const handleNextPage = () => {
    setCurrentPage((prevPage) => Math.min(prevPage + 1, Math.ceil(filteredList.length / itemsPerPage)));
  };

  // Create a slice of the fileList based on the current page

  const handleNameSort = () => {
    // makes copy so we don't alter state directly
    const list = [...filteredList]

    // Will sort descending on first sort or if already in ascending order
    if (!nameSort || nameSort === 'asc') {
      list.sort((a, b) => {
        // Changes to lowercase so all letters are treated equal
        // otherwise all caps are up top and all lower are on the bottom
        const nameA = a.name.toLowerCase()
        const nameB = b.name.toLowerCase()
        if (nameA > nameB) return 1
        if (nameA < nameB) return -1
        return 0
      })
      // changes nameSort state which determines icon and sort behavior
      setNameSort("des")
    } else {
      list.sort((a, b) => {
        const nameA = a.name.toLowerCase()
        const nameB = b.name.toLowerCase()
        if (nameA < nameB) return 1
        if (nameA > nameB) return -1
        return 0
      })
      setNameSort("asc")
    }

    setFilteredList(list)
  }

  const handleTagSort = () => {
    // makes copy so we don't alter state directly
    const list = [...filteredList]

    // Will sort descending on first sort or if already in ascending order
    if (!tagSort || tagSort === 'asc') {
      list.sort((a, b) => {
        // Changes to lowercase so all letters are treated equal
        // otherwise all caps are up top and all lower are on the bottom
        const tagA = a.tag.toLowerCase()
        const tagB = b.tag.toLowerCase()
        if (tagA > tagB) return 1
        if (tagA < tagB) return -1
        return 0
      })
      // changes nameSort state which determines icon and sort behavior
      setTagSort("des")
    } else {
      list.sort((a, b) => {
        const tagA = a.tag.toLowerCase()
        const tagB = b.tag.toLowerCase()
        if (tagA < tagB) return 1
        if (tagA > tagB) return -1
        return 0
      })
      setTagSort("asc")
    }

    setFilteredList(list)
  }


  const handleDocumentClick = (documentUrl) => {
    window.open(documentUrl, "_blank"); // Opens the document in a new window or tab
  };


  // const getDefaultImage = (format, url) => {
  //   if(format) {

  //     return fileTypeImages[format].src

  //   }else{
  //     return url
  //   }
  // }
  const fileTypeImages = {
    pdf: pdfImage,
    txt: docImage,
    rtf: docImage,
    doc: docImage,
    docm: docImage,
    docx: docImage,
    pages: docImage,
    html: docImage,
    ppt: pptImage,
    ppsx: pptImage,
    pptx: pptImage,
    key: pptImage,
    xlsx: excelImage,
    xls: excelImage,
    xlsb: excelImage,
    xltm: excelImage,
    xlsm: excelImage,
    xml: excelImage,
    numbers: excelImage,

  }

  function formatDate(date) {
    const formatDate = new Date(
      date._seconds * 1_000 + date._nanoseconds / 1_000_000
    );
    return formatDate.toLocaleTimeString('en-us', { year: 'numeric', month: 'long', day: 'numeric' });
  }

  return (
    <>
      <div className="container ">
        {/* px-4 mx-auto sm:px-8 */}
        <div className="">
          {/* py-8 */}
          <div className="flex flex-row justify-between">
            {/* w-full mb-1 sm:mb-0 */}
            <h2 className="text-xl font-semibold leading-tight">
              All Files
            </h2>
            <div className="text-end">
              <form className="flex flex-col justify-center md:w-3/4 md:max-w-sm space-y-3 md:flex-row md:w-full md:space-x-3 md:space-y-0">
                <button onClick={() => setFilteredList()} className="whitespace-nowrap flex-shrink-0 px-4 py-2 text-base font-semibold text-zinc-800 bg-zinc-200 rounded-lg shadow-md hover:bg-zinc-300 focus:outline-none focus:ring-2 focus:ring-violet-500 focus:ring-offset-2 focus:ring-offset-zinc-200">
                  Show All
                </button>
              </form>
            </div>
          </div>
          <div className="py-4 overflow-x-auto">
            <div className="inline-block min-w-full overflow-hidden rounded-lg shadow">
              <table className="min-w-full leading-normal">
                <thead>
                  <tr>
                    <th scope="col" className="flex items-center px-5 py-3 text-sm font-normal text-left text-gray-800 uppercase bg-white border-b border-gray-200">
                      Name
                      <div className="ml-2">
                        {/* Only shows when name sort is asc */}
                        {nameSort === 'asc' &&
                          <svg onClick={handleNameSort} xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 320 512"><path d="M177 159.7l136 136c9.4 9.4 9.4 24.6 0 33.9l-22.6 22.6c-9.4 9.4-24.6 9.4-33.9 0L160 255.9l-96.4 96.4c-9.4 9.4-24.6 9.4-33.9 0L7 329.7c-9.4-9.4-9.4-24.6 0-33.9l136-136c9.4-9.5 24.6-9.5 34-.1z" /></svg>
                        }
                        {/* Shows all other cases */}
                        {nameSort !== 'asc' &&
                          <svg onClick={handleNameSort} className="cursor-pointer" xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 320 512"><path d="M143 352.3L7 216.3c-9.4-9.4-9.4-24.6 0-33.9l22.6-22.6c9.4-9.4 24.6-9.4 33.9 0l96.4 96.4 96.4-96.4c9.4-9.4 24.6-9.4 33.9 0l22.6 22.6c9.4 9.4 9.4 24.6 0 33.9l-136 136c-9.2 9.4-24.4 9.4-33.8 0z" /></svg>
                        }
                      </div>
                    </th>
                    <th scope="col" className="hidden md:table-cell px-5 py-3 text-sm font-normal text-left text-gray-800 uppercase bg-white border-b border-gray-200">
                      Type
                    </th>
                    <th scope="col" className="hidden md:table-cell px-5 py-3 text-sm font-normal text-left text-gray-800 uppercase bg-white border-b border-gray-200">
                      Last Modified
                    </th>
                    <th scope="col" className="hidden md:flex items-center px-5 py-3 text-sm font-normal text-left text-gray-800 uppercase bg-white border-b border-gray-200">
                      tag
                      <div className="ml-2">
                        {/* Only shows when name sort is asc */}
                        {tagSort === 'asc' &&
                          <svg onClick={handleTagSort} xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 320 512"><path d="M177 159.7l136 136c9.4 9.4 9.4 24.6 0 33.9l-22.6 22.6c-9.4 9.4-24.6 9.4-33.9 0L160 255.9l-96.4 96.4c-9.4 9.4-24.6 9.4-33.9 0L7 329.7c-9.4-9.4-9.4-24.6 0-33.9l136-136c9.4-9.5 24.6-9.5 34-.1z" /></svg>
                        }
                        {/* Shows all other cases */}
                        {tagSort !== 'asc' &&
                          <svg onClick={handleTagSort} className="cursor-pointer" xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 320 512"><path d="M143 352.3L7 216.3c-9.4-9.4-9.4-24.6 0-33.9l22.6-22.6c9.4-9.4 24.6-9.4 33.9 0l96.4 96.4 96.4-96.4c9.4-9.4 24.6-9.4 33.9 0l22.6 22.6c9.4 9.4 9.4 24.6 0 33.9l-136 136c-9.2 9.4-24.4 9.4-33.8 0z" /></svg>
                        }
                        {/* <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 320 512"><path d="M177 159.7l136 136c9.4 9.4 9.4 24.6 0 33.9l-22.6 22.6c-9.4 9.4-24.6 9.4-33.9 0L160 255.9l-96.4 96.4c-9.4 9.4-24.6 9.4-33.9 0L7 329.7c-9.4-9.4-9.4-24.6 0-33.9l136-136c9.4-9.5 24.6-9.5 34-.1z"/></svg>
                        <svg onClick={() => handleTagSort()} className="cursor-pointer" xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 320 512"><path d="M143 352.3L7 216.3c-9.4-9.4-9.4-24.6 0-33.9l22.6-22.6c9.4-9.4 24.6-9.4 33.9 0l96.4 96.4 96.4-96.4c9.4-9.4 24.6-9.4 33.9 0l22.6 22.6c9.4 9.4 9.4 24.6 0 33.9l-136 136c-9.2 9.4-24.4 9.4-33.8 0z" /></svg> */}
                      </div>
                    </th>
                    <th scope="col" className="hidden md:table-cell px-5 py-3 text-sm font-normal text-left text-gray-800 uppercase bg-white border-b border-gray-200">
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {paginatedList?.map((file, i) => (
                    <tr key={`material-table-${i}`}>
                      <td className="px-5 py-5 text-sm bg-white border-b border-gray-200">
                        <div className="flex items-center">
                          <div className="flex-shrink-0">
                            <a href="#" className="relative block" onClick={() => handleDocumentClick(file.url)}>
                              {fileTypeImages[file.format.toLowerCase()] ? (

                                <img alt="profil" src={fileTypeImages[file.format.toLowerCase()].src} className="mx-auto object-cover rounded-lg h-10 w-10 " />

                              ) : (
                                <>
                                  <img
                                    alt="profil"
                                    src={file.url}
                                    className="mx-auto object-cover rounded-lg h-10 w-10"
                                  />
                                </>
                              )}
                            </a>
                          </div>
                          <div className="ml-3">
                            <p className="text-gray-900 whitespace-no-wrap">
                              <a href="#" onClick={() => handleDocumentClick(file.url)} style={{ cursor: "pointer" }} />
                              {file.name}
                            </p>
                          </div>
                        </div>
                      </td>
                      <td className="hidden md:table-cell px-5 py-5 text-sm bg-white border-b border-gray-200">
                        <p className="text-gray-900 whitespace-no-wrap">
                          {file.format}
                        </p>
                      </td>
                      <td className="hidden md:table-cell px-5 py-5 text-sm bg-white border-b border-gray-200">
                        <p className="text-gray-900 whitespace-no-wrap">
                          {/* {new Date(file.createdAt._seconds).toLocaleString("en-US")} */}
                          {formatDate(file.updatedAt || file.createdAt)}
                        </p>
                      </td>
                      <td className="hidden md:table-cell px-5 py-5 text-sm bg-white border-b border-gray-200">
                        <span className="relative inline-block px-3 py-1 font-semibold leading-tight text-violet-900">
                          <span aria-hidden="true" className="absolute inset-0 bg-violet-200 rounded-full opacity-50">
                          </span>
                          <span className="relative">
                            {file.tag}
                          </span>
                        </span>
                      </td>
                      <td className="hidden md:table-cell px-5 py-5 text-sm bg-white border-b border-gray-200">
                        <a href="#" className="text-violet-900 hover:text-violet-600">
                          Edit
                        </a>
                      </td>
                    </tr>

                  ))}
                </tbody>
              </table>
              <div className="flex flex-col items-center px-5 py-5 bg-white xs:flex-row xs:justify-between">
                <div className="flex items-center">
                  <button type="button" className="w-full p-4 text-base text-gray-600 bg-white border rounded-l-xl hover:bg-gray-100"
                    onClick={handlePrevPage}
                    disabled={currentPage === 1}>
                    <svg width="9" fill="currentColor" height="8" className="" viewBox="0 0 1792 1792" xmlns="http://www.w3.org/2000/svg">
                      <path d="M1427 301l-531 531 531 531q19 19 19 45t-19 45l-166 166q-19 19-45 19t-45-19l-742-742q-19-19-19-45t19-45l742-742q19-19 45-19t45 19l166 166q19 19 19 45t-19 45z">
                      </path>
                    </svg>
                  </button>
                  {Array.from({ length: Math.ceil(filteredList.length / itemsPerPage) }, (_, i) => i + 1).map((page, i) => (
                    <button key={`page-${page}-${i}`} type="button" className={`${currentPage === page ? "bg-gray-100" : "bg-white"} w-full px-4 py-2 text-base text-violet-500 border-t border-b hover:bg-gray-100`}
                      onClick={() => setCurrentPage(page)}>
                      {page}
                    </button>
                  ))}
                  <button type="button" className="w-full p-4 text-base text-gray-600 bg-white border-t border-b border-r rounded-r-xl hover:bg-gray-100"
                    onClick={handleNextPage}>
                    <svg width="9" fill="currentColor" height="8" className="" viewBox="0 0 1792 1792" xmlns="http://www.w3.org/2000/svg">
                      <path d="M1363 877l-742 742q-19 19-45 19t-45-19l-166-166q-19-19-19-45t19-45l531-531-531-531q-19-19-19-45t19-45l166-166q19-19 45-19t45 19l742 742q19 19 19 45t-19 45z">
                      </path>
                    </svg>
                  </button>

                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}