"use client"
import React, { useState, useEffect } from "react"
import MaterialModal from "./MaterialModal"
import ContentCards from "./ContentCards";

export default function AgendaPage() {
  const [agendaId, setAgendaId] = useState();
  const [agenda, setAgenda] = useState(
    [ // Big container
      [ // week 1
        [] // day 1
      ]
    ])
  const [currentWeek, setCurrentWeek] = useState(0);

  useEffect(() => {
    const setup = async () => {
      try {

        const res = await fetch(`${process.env.NEXT_PUBLIC_ENDPOINT}/agendas`);

        if (res.status === 404) {
          throw new Error()
        }
        const data = await res.json();

        if (!data.length) return

        setAgenda(JSON.parse(data[0].agenda));
        setAgendaId(data[0].id)

      } catch (err) {
        alert(err.message);
      }
    }
    !agendaId && setup();

  }, [])

  return (
    <div className="p-2 md:p-8 overflow-x-hidden">
      <div className="flex w-full justify-between pt-10">
        <h1 className="text-2xl">Agenda </h1>
      </div >
      {/* Week Plus Sign */}
      <section className="flex w-full justify-between items-center ">
        <svg className="cursor-pointer w-9 h-9 stroke-slate-500 mr-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"
          onClick={() => setAgenda([...agenda, [[]]])}>
          <path stroke-linecap="round" stroke-linejoin="round" d="M12 9v6m3-3H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
        <div className="flex w-full justify-between">
          <div className="mb-4 border-b border-gray-200 dark:border-gray-700">
            <ul className="flex flex-wrap -mb-px text-sm font-medium text-center" id="myTab" data-tabs-toggle="#myTabContent" role="tablist">
              {agenda?.map((week, i) => (
                <li key={`add-week-${i}`} className="mr-2" role="presentation">
                  <button onClick={() => setCurrentWeek(i)} className="inline-block p-4 border-b-2 rounded-t-lg" id="profile-tab" data-tabs-target="#profile" type="button" role="tab" aria-controls="profile" aria-selected="false">Week {i + 1} </button>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>
      <section className="flex overflow-y-scroll">
        {/* width 33%, min width some pixels, overflow-y scroll */}
        {
          agenda?.[currentWeek]?.map((day, i) => (
            <React.Fragment key={`day-card-${i}`}>
              <div className="flex flex-col w-[250px] min-w-[250px] md:w-[350px] md:min-w-[350px] p-2 md:p-4">
                <h2>Day {i + 1}</h2>
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
              className="max-w-sm w-full mt-[56px] text-white bg-gray-200 hover:bg-gray-400 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">
              Add A Day
            </button>
          </div>
        }
      </section>

    </div >
  )
}