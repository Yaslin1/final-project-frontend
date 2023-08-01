"use client" // use clients is because we are using a hook. Rendered client side and cannot use hooks on servers.
import { useState, useContext, useEffect } from "react";
import { AuthContext } from "../contexts/AuthContext";

const MaterialModal = ({ agenda, agendaId, setAgenda, week, day }) => { //Upload modal component
  const { user } = useContext(AuthContext);
  const [showModal, setShowModal] = useState(false);
  const [files, setFiles] = useState();
  // controls dropdown with files
  const [selectMaterial, setSelectMaterial] = useState(false);

  const [formData, setFormData] = useState({
    time: '',
    description: '',
    material: {},
  });

  const handleChange = (e) => { //on event
    const { name, value } = e.target; // getting name and value  from the event
    setFormData((prevFormData) => ({ ...prevFormData, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Handle form submission here (e.g., send data to the server)
    // Close the modal after form submission

    try {
      const bodyRequest = { //Info that I am trying to save
        ...formData, //Putting all form data into my new object
        uid: user.uid, //getting uid from the object in firebase auth
      }

      const updatedAgenda = [...agenda]
      updatedAgenda[week][day].push(bodyRequest)

      setAgenda(updatedAgenda)



      setFormData({
        time: '',
        description: '',
        material: {},
      })

      setShowModal();

      if (!agendaId) {
        const res = await fetch(`${process.env.NEXT_PUBLIC_ENDPOINT}/agendas`, {
          method: "POST",
          body: JSON.stringify({
            agenda: JSON.stringify(updatedAgenda)
          }), //
          headers: {
            "Content-Type": "application/json",
            "Authorization": user.stsTokenManager.accessToken //passing fire the firebase token in authorization header
          }
        })

        if (199 > res.status > 299) throw new error

      } else {
        const res = await fetch(`${process.env.NEXT_PUBLIC_ENDPOINT}/agendas/${agendaId}`, { //request  from api
          method: "PATCH",
          body: JSON.stringify({
            agenda: JSON.stringify(updatedAgenda)
          }), //
          headers: {
            "Content-Type": "application/json",
            "Authorization": user.stsTokenManager.accessToken //passing fire the firebase token in authorization header
          }
        })
        if (199 > res.status > 299) throw new error
      }


    } catch (err) {
      console.error(err)
    }
  };

  useEffect(() => {
    const setup = async () => {
      try {

        const res = await fetch(`${process.env.NEXT_PUBLIC_ENDPOINT}/files`);
        const data = await res.json();
        // sorts by name
        data.sort((a, b) => {
          // lowercase so uppercase and lowercase are sorted equally
          const first = a.name.toLowerCase()
          const second = b.name.toLowerCase()
          if (first > second) return 1
          if (first < second) return -1
          return 0;
        });
        setFiles(data);
      } catch (err) {
        alert(err.message);
      }
    }

    !files && setup();
  }, [])

  return (
    <>
      <button onClick={() => setShowModal(true)} type="button" className="max-w-sm text-white bg-gray-200 hover:bg-gray-400 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">
        ➕
      </button>
      {showModal &&
        <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50">
          <div className="bg-white p-6 rounded-md shadow-lg  w-2/6">
            <h2 className="text-xl font-semibold mb-4">Select Material</h2>
            <form onSubmit={handleSubmit}>
              <label className="block mb-2 mt-4">
                Topic
                <input
                  type="text"
                  name="topic"
                  value={formData.topic || ''}
                  onChange={handleChange}
                  className="w-full border rounded px-3 py-2"
                  required
                />
              </label>
              <label className="block mb-2 mt-4">
                Time
                <input
                  type="text"
                  name="time"
                  value={formData.time || ''}
                  onChange={handleChange}
                  className="w-full border rounded px-3 py-2"
                  required
                />
              </label>
              <label className="block mb-2 mt-4">
                Description
                <textarea
                  name="description"
                  value={formData.description || ''}
                  onChange={handleChange}
                  className="w-full border rounded px-3 py-2 resize-none"
                  rows="4"
                  required
                />
              </label>
              <label className="block mb-2 mt-4">
                Choose material:

                <button
                  onClick={() => {
                    setSelectMaterial(!selectMaterial)
                  }}
                  id="dropdownUsersButton"
                  data-dropdown-toggle="dropdownUsers"
                  data-dropdown-placement="bottom"
                  className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" type="button">
                  Select
                  <svg className="w-2.5 h-2.5 ml-2.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 4 4 4-4" />
                  </svg>
                </button>
                {/* <!-- Dropdown menu --> */}
                {
                  // Conditional rendering. {} switching this to JavaScript, if selectMaterial is true then show the drop down.
                  selectMaterial &&
                  <div id="dropdownUsers" className="z-10 bg-white rounded-lg shadow w-60 dark:bg-gray-700">
                    <ul className="h-48 py-2 overflow-y-auto text-gray-700 dark:text-gray-200" aria-labelledby="dropdownUsersButton">
                      <li className="font-bold w-full flex justify-between px-2">
                        <span>Name</span>
                        <span>Format</span>
                      </li>
                      {
                        files?.map((file, i) => (
                          <li key={`file-select-list-${i}`} className="w-full flex justify-between px-2 cursor-pointer"
                            onClick={() => {
                              setFormData({
                                ...formData, material: {
                                  name: file.name,
                                  url: file.url
                                }
                              })
                            }}>
                            {/* <img className="w-6 h-6 mr-2 rounded-full" src="/docs/images/people/profile-picture-1.jpg" alt="Jese image" /> */}
                            <span>{file.name}</span>
                            <span>{file.format}</span>
                          </li>
                        ))
                      }
                    </ul>
                    <a href="#" className="flex items-center p-3 text-sm font-medium text-blue-600 border-t border-gray-200 rounded-b-lg bg-gray-50 dark:border-gray-600 hover:bg-gray-100 dark:bg-gray-700 dark:hover:bg-gray-600 dark:text-blue-500 hover:underline">
                      <svg className="w-4 h-4 mr-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 18">
                        <path d="M6.5 9a4.5 4.5 0 1 0 0-9 4.5 4.5 0 0 0 0 9ZM8 10H5a5.006 5.006 0 0 0-5 5v2a1 1 0 0 0 1 1h11a1 1 0 0 0 1-1v-2a5.006 5.006 0 0 0-5-5Zm11-3h-2V5a1 1 0 0 0-2 0v2h-2a1 1 0 1 0 0 2h2v2a1 1 0 0 0 2 0V9h2a1 1 0 1 0 0-2Z" />
                      </svg>
                      Add new File
                    </a>
                  </div>
                }
              </label>

              <a href={formData.material.url} target="_blank" rel="noreferer" className="text-decoration-none">
                {formData.material.name}
              </a>
              <div className="flex w-full justify-around">
                <button
                  onClick={() => setShowModal(false)}
                  className="bg-blue-500 text-white px-4 py-2 rounded mt-4">
                  Cancel
                </button>
                <button
                  type="submit"
                  className="bg-blue-500 text-white px-4 py-2 rounded mt-4">
                  Submit
                </button>

              </div>
            </form>
          </div>
        </div >
      }
    </>
  );
};

export default MaterialModal;