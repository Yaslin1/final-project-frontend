"use client"
import React, { useState, useEffect } from "react"
import MaterialModal from "./MaterialModal"

export default function AgendaPage() {
  const [agendaId, setAgendaId] = useState();
  const [agenda, setAgenda] = useState(
    [ // Big container
      [ // week 1
        [] // day 1
      ]
    ])
  const [currentWeek, setCurrentWeek] = useState(0);

  useEffect(()=>{
    const setup = async () => {
      try {

        const res = await fetch(`${process.env.NEXT_PUBLIC_ENDPOINT}/agendas`);
        
        if (res.status === 404){
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

  },[])

  return (
    <div className="px-6 ">
      <div className="flex w-full justify-between pt-10">
        <h1 className="text-2xl">Agenda </h1>
      </div >
      {/* Week Plus Sign */}
        <svg className="cursor-pointer w-8 h-8" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"
        onClick={() => setAgenda([...agenda, [[]]])}>
        <path stroke-linecap="round" stroke-linejoin="round" d="M12 9v6m3-3H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>

      <section className="flex w-full justify-between">
        <div className="mb-4 border-b border-gray-200 dark:border-gray-700">
          <ul className="flex flex-wrap -mb-px text-sm font-medium text-center" id="myTab" data-tabs-toggle="#myTabContent" role="tablist">
            {agenda?.map((week, i) => (
              <li key={`add-week-${i}`} className="mr-2" role="presentation">
                <button onClick={() => setCurrentWeek(i)} className="inline-block p-4 border-b-2 rounded-t-lg" id="profile-tab" data-tabs-target="#profile" type="button" role="tab" aria-controls="profile" aria-selected="false">Week {i + 1} </button>
              </li>
            ))}
            {/* <li class="mr-2" role="presentation">
              <button class="inline-block p-4 border-b-2 border-transparent rounded-t-lg hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300" id="dashboard-tab" data-tabs-target="#dashboard" type="button" role="tab" aria-controls="dashboard" aria-selected="false">Week 2</button>
            </li>
            <li class="mr-2" role="presentation">
              <button class="inline-block p-4 border-b-2 border-transparent rounded-t-lg hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300" id="settings-tab" data-tabs-target="#settings" type="button" role="tab" aria-controls="settings" aria-selected="false">Week 3</button>
            </li> */}
            {/* <li role="presentation">
              <button class="inline-block p-4 border-b-2 border-transparent rounded-t-lg hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300" id="contacts-tab" data-tabs-target="#contacts" type="button" role="tab" aria-controls="contacts" aria-selected="false">Week 4</button>
            </li> */}
          </ul>
        </div>
      </section>
      <section className="flex">
        {/* width 33%, min width some pixels, overflow-y scroll */}
        {
          agenda?.[currentWeek]?.map((day, i) => (
            <React.Fragment key={`day-card-${i}`}>
              <div className="flex flex-col">
                <h2>Day {i + 1}</h2>
                <div>
                  {
                    day?.map((item, i) => (
                      <div key={`single-item-${i}`} className="max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                        <a href="#">
                          <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{item.topic}</h5>
                        </a>
                        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">{item.time}</p>
                        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">{item.description}</p>
                        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400"><a href={item.material.url} target="_blank" rel="noreferer" className="text-decoration-none">
                          {item.material.name}
                        </a></p>
                        {/* <a href="#" className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                          Save
                          <svg className="w-3.5 h-3.5 ml-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
                          </svg>
                        </a>
                        <a href="#" className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                          Cancel
                          <svg className="w-3.5 h-3.5 ml-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
                          </svg>
                        </a> */}
                      </div>
                    ))
                  }

                </div>
                <div>
                  {/* Your page content here */}
                  <MaterialModal agenda={agenda} agendaId={agendaId} setAgenda={setAgenda} day={i} week={currentWeek} />
                </div>
              </div>
            </React.Fragment>
          ))
        }
        {
          agenda?.[currentWeek].length < 7 &&
          <div>
            <button onClick={() => {
              const updated = [...agenda]
              if (updated[currentWeek].length === 7) return
              updated[currentWeek] = [...agenda[currentWeek], []]
              setAgenda(updated)
            }} type="button" className="max-w-sm text-white bg-gray-200 hover:bg-gray-400 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">➕</button>
          </div>
        }
      </section>

    </div>
  )
}