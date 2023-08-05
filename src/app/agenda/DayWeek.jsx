"use client"
import React, { useState, useEffect } from "react"
import MaterialModal from "./MaterialModal" //component import
import ContentCards from "./ContentCards"; //component import

export default function AgendaPage() {
  const [agendaId, setAgendaId] = useState(); //initial state value 
  const [agenda, setAgenda] = useState(
    [ // Big container
      [ // week 1
        [] // day 1
      ]
    ]) //initialize state using nested arrays
  const [currentWeek, setCurrentWeek] = useState(0); //initial state value with inital value of 0

  useEffect(() => {
    const setup = async () => {
      try {

        const res = await fetch(`${process.env.NEXT_PUBLIC_ENDPOINT}/agendas`);
        //fetching data from specified end point

        if (res.status === 404) {
          throw new Error()
        }
        const data = await res.json();
        //parsing response as json

        if (!data.length) return
        //no data then stop do not continue

        setAgenda(JSON.parse(data[0].agenda)); //updating agenda with parse data
        setAgendaId(data[0].id) //updating state with ID from data

      } catch (err) {
        alert(err.message);
        //catches any errors in fetch and logs them.
      }
    }
    !agendaId && setup();
    //agendaID not set it will call the setup function

  }, [])

  return (
    <div className="py-2 overflow-x-hidden flex flex-col flex-grow h-screen">
      <div className="px-2 md:px-8">
        <div className="flex w-full justify-between py-8">
          <h1 className="text-2xl font-semibold">Agenda </h1>
        </div >
        {/* Week Plus Sign */}
        <section className="flex w-full justify-between items-center ">
          <svg className="cursor-pointer w-9 h-9 stroke-slate-500 mr-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"
            onClick={() => setAgenda([...agenda, [[]]])}>
            <path stroke-linecap="round" stroke-linejoin="round" d="M12 9v6m3-3H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
          <div className="flex items-center">
            <div className="w-px h-8 bg-gray-300">
            </div>
          </div>
          {/* Add Weeks */}
          <div className="flex w-full justify-between px-8">
            <div className="border-b border-gray-200 dark:border-gray-700">
              <ul className="flex flex-wrap -mb-px text-sm font-medium text-center" id="myTab" data-tabs-toggle="#myTabContent" role="tablist">
                {agenda?.map((week, i) => (
                  <li key={`add-week-${i}`} className="mr-2" role="presentation">
                    <button onClick={() => setCurrentWeek(i)} className={`${currentWeek === i && "border-blue-600" } inline-block py-4 px-2 mx-1 border-b-2 rounded-t-lg`} id="profile-tab" data-tabs-target="#profile" type="button" role="tab" aria-controls="profile" aria-selected="false">Week {i + 1} </button>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>
      </div>
      <section className="flex overflow-y-scroll h-full bg-zinc-100 pt-4">
        {/* width 33%, min width some pixels, overflow-y scroll */}
        {
          agenda?.[currentWeek]?.map((day, i) => (
            <React.Fragment key={`day-card-${i}`}>
              <div className="flex flex-col w-[250px] min-w-[250px] md:w-[350px] md:min-w-[350px] p-2 md:p-4">
                <h2 className="text-xl font-semibold">Day {i + 1}</h2>
                <div className="pt-8">
                  {
                    day?.map((item, i) => (
                      <ContentCards key={`material-card-${i}`} item={item} />
                    ))
                  }

                </div>
                {/* Your page content here */}
                <MaterialModal agenda={agenda} agendaId={agendaId} setAgenda={setAgenda} day={i} week={currentWeek} />
              </div>
            </React.Fragment>
          ))
        }
        {
          agenda?.[currentWeek].length < 7 &&
          <div className="flex flex-col w-[250px] min-w-[250px] md:w-[350px] md:min-w-[350px] p-2 md:p-4">
            <button
              onClick={() => {
                const updated = [...agenda]
                if (updated[currentWeek].length === 7) return
                updated[currentWeek] = [...agenda[currentWeek], []]
                setAgenda(updated)
              }}
              className="max-w-sm w-full mt-[56px] text-white  text-zinc-600 bg-white border-dashed border-2 border-gray-300 hover:bg-gray-300 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">
              + Add A Day
            </button>
          </div>
        }
      </section>

    </div >
  )
}