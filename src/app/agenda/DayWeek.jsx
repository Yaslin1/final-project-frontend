"use client"
import React, { useState, useEffect, useContext } from "react"
import { AuthContext } from '@/app/contexts/AuthContext'
import MaterialModal from "./MaterialModal" //component import
import ContentCards from "./ContentCards"; //component import

export default function AgendaPage() {
  const {user} = useContext(AuthContext);
  const [agendaId, setAgendaId] = useState(); //initial state value 
  const [agenda, setAgenda] = useState(
    [ // Big container
      [ // week 1
        [] // day 1
      ]
    ]) //initialize state using nested arrays
  const [currentWeek, setCurrentWeek] = useState(0); //initial state value with inital value of 0

  const copyShareableLink = async () => {
    try {
      await navigator.clipboard.writeText(`https://lms-web-yc.web.app/trainee-view/${agendaId}`)
      alert("Link has been copied to clipboard.")
    } catch (err) {
      console.error(err)
    }
  }

  const handleDelete = async (item) => {
    const confirmation = confirm("Are you sure you want to delete "+item.topic);
    if (!confirmation) return;

    const newDay = agenda[currentWeek][item.dayIndex];
    newDay.splice(item.itemIndex, 1);
    const newAgenda = [...agenda];
    newAgenda[currentWeek][item.dayIndex] = newDay;

    try {
      const res = await fetch(`${process.env.NEXT_PUBLIC_ENDPOINT}/agendas/${agendaId}`, { //request  from api
        method: "PATCH", //update new agenda item
        body: JSON.stringify({
          agenda: JSON.stringify(newAgenda)
        }), //
        headers: {
          "Content-Type": "application/json",
          "Authorization": user.stsTokenManager.accessToken //passing fire the firebase token in authorization header
        }
      })
      if (199 > res.status > 299) throw new error

      setAgenda(JSON.parse(JSON.stringify(newAgenda)));

      //catches any errors in fetch and logs them.
    } catch (err) {
      console.error(err)
    }

  }

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
          <button onClick={copyShareableLink} type="button" className=" py-2 px-4 flex justify-center items-center  bg-zinc-200 hover:bg-zinc-300 focus:ring-violet-500 focus:ring-offset-zinc-200 text-zinc w-2rem transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg ">
            <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 448 512" className="mr-1">
              <path d="M352 320c-22.608 0-43.387 7.819-59.79 20.895l-102.486-64.054a96.551 96.551 0 0 0 0-41.683l102.486-64.054C308.613 184.181 329.392 192 352 192c53.019 0 96-42.981 96-96S405.019 0 352 0s-96 42.981-96 96c0 7.158.79 14.13 2.276 20.841L155.79 180.895C139.387 167.819 118.608 160 96 160c-53.019 0-96 42.981-96 96s42.981 96 96 96c22.608 0 43.387-7.819 59.79-20.895l102.486 64.054A96.301 96.301 0 0 0 256 416c0 53.019 42.981 96 96 96s96-42.981 96-96-42.981-96-96-96z" /></svg>
            Share
          </button>
        </div >
        {/* Week Plus Sign */}
        <section className="flex w-full justify-between items-center ">
          <svg className="cursor-pointer w-9 h-9 stroke-slate-500 mr-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor"
            onClick={() => setAgenda([...agenda, [[]]])}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v6m3-3H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
          <div className="flex items-center">
            <div className="w-px h-8 bg-gray-300">
            </div>
          </div>
          {/* Add Weeks */}
          <div className="flex w-full justify-between px-8">
            <div className="border-b border-gray-200 ">
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
                    day?.map((item, j) => (
                      <ContentCards key={`material-card-${j}`} item={{ ...item, dayIndex: i, itemIndex: j }} handleDelete={handleDelete} />
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
              className="max-w-sm w-full mt-[56px] text-white  text-zinc-600 bg-white border-dashed border-2 border-gray-300 hover:bg-violet-200 focus:ring-4 focus:ring-violet-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 focus:outline-none ">
              + Add A Day
            </button>
          </div>
        }
      </section>

    </div >
  )
}