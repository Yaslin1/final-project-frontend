"use client"
import React, { useState, useEffect } from "react"
import ContentCards from "@/app/trainee-view/[agenda]/PublicContentCards"; //component import

export default function AgendaPage({ agendaId: _agendaId }) {
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

        if(_agendaId !== data[0].id) return

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
      <div className="px-2 md:px-4">
        <div className="flex w-full justify-between py-8">
          <h1 className="text-2xl font-semibold">Trainee Agenda </h1>
        </div >
        {/* Week Plus Sign */}
        <section className="flex w-full justify-between items-center ">
          <div className="flex w-full justify-between pr-8">
            <div className="border-b border-gray-200">
              <ul className="flex flex-wrap -mb-px text-sm font-medium text-center" id="myTab" data-tabs-toggle="#myTabContent" role="tablist">
                {agenda?.map((week, i) => (
                  <li key={`add-week-${i}`} className="mr-2" role="presentation">
                    <button onClick={() => setCurrentWeek(i)} className={`${currentWeek === i && "border-violet-700 border-b-4"} inline-block py-4 px-2 mx-1 rounded-t-lg`} id="profile-tab" data-tabs-target="#profile" type="button" role="tab" aria-controls="profile" aria-selected="false">Week {i + 1} </button>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>
      </div>
      <section className="flex overflow-y-scroll h-full bg-zinc-100 pt-10">
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
              </div>
            </React.Fragment>
          ))
        }
      </section>

    </div >
  )
}