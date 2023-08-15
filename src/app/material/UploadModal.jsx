"use client" // use clients is because we are using a hook. Rendered client side and cannot use hooks on servers.
import { useState, useContext } from "react";
import { initializeApp } from "firebase/app"; //importing functions from library
import { getStorage, ref, uploadBytes } from "firebase/storage"; //importing functions from library
import creds from "../../../creds";
import { AuthContext } from "../contexts/AuthContext";


//connecting to firebase using credentials
const app = initializeApp(creds);

//connect to default bucket
const storage = getStorage(app);


const UploadModal = ({updateList}) => { //Upload modal component
  const { user } = useContext(AuthContext);
  const [showModal, setShowModal] = useState(false);
  const [files, setFiles] = useState(null);

  const [formData, setFormData] = useState({
    name: '',
    tag: '',
    description: '',
  });

  const handleChange = (e) => { //on event
    const { name, value } = e.target; // getting name and value  from the event
    setFormData((prevFormData) => ({ ...prevFormData, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    return alert("Disabled for Demo")
    // Handle form submission here (e.g., send data to the server)
    // Close the modal after form submission

    try {
      const url = await handleFile()
      const typeInfo = files[0].type.split('/')
      const format = files[0].name.split('.')[1]

      const bodyRequest = { //Info that I am trying to save
        ...formData, //Putting all form data into my new object
        uid: user.uid, //getting uid from the object in firebase auth
        url, // url from handle file function
        type:typeInfo[0], //value will be image or file
        format //value will be format such as pdf or png etc.
      }
      // const res = await fetch(`${process.env.NEXT_PUBLIC_ENDPOINT}/files`, { //request  from api
      //   method: "POST",
      //   body: JSON.stringify(bodyRequest), //
      //   headers: {
      //     "Content-Type": "application/json",
      //     "Authorization": user.stsTokenManager.accessToken //passing fire the firebase token in authorization header
      //   }
      // })

      const data = await res.json()
      updateList(bodyRequest)

    } catch (err) {
      console.error(err)
    }
    setShowModal(false)
  };

  const handleFile = async () => {
    const filename = files[0].name //taking an array of files and starting with the first index and getting name of file

    //create a reference to our file in storage
    const imageRef = files[0].type.includes("image")
      ? ref(storage, `images/${filename}`) //ref is a function and () is a parameter if file is an image then store it in the image folder
      : ref(storage, `files/${filename}`) //else put it in file.

    //Todd's quick cheat- create URL from reference
    const url = files[0].type.includes("image")
      ? `https://firebasestorage.googleapis.com/v0/b/lms-web-yc.appspot.com/o/images%2F${encodeURI(filename)}?alt=media` //encode URI turns the file name into URL
      : `https://firebasestorage.googleapis.com/v0/b/lms-web-yc.appspot.com/o/files%2F${encodeURI(filename)}?alt=media`

    // //upload file to bucket
    await uploadBytes(imageRef, files[0]); //
    return url
  }

  return (
    <>
      <button onClick={() => setShowModal(true)} type="button" className=" py-2 px-4 flex justify-center items-center  bg-zinc-200 hover:bg-zinc-300 focus:ring-violet-500 focus:ring-offset-zinc-200 text-zinc w-2rem transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg ">
        <svg width="20" height="20" fill="currentColor" className="mr-2" viewBox="0 0 1792 1792" xmlns="http://www.w3.org/2000/svg">
          <path d="M1344 1472q0-26-19-45t-45-19-45 19-19 45 19 45 45 19 45-19 19-45zm256 0q0-26-19-45t-45-19-45 19-19 45 19 45 45 19 45-19 19-45zm128-224v320q0 40-28 68t-68 28h-1472q-40 0-68-28t-28-68v-320q0-40 28-68t68-28h427q21 56 70.5 92t110.5 36h256q61 0 110.5-36t70.5-92h427q40 0 68 28t28 68zm-325-648q-17 40-59 40h-256v448q0 26-19 45t-45 19h-256q-26 0-45-19t-19-45v-448h-256q-42 0-59-40-17-39 14-69l448-448q18-19 45-19t45 19l448 448q31 30 14 69z">
          </path>
        </svg>
        Upload
      </button>
      {showModal &&
        <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50">
          <div className="bg-white p-6 rounded-md shadow-lg  max-w-[450px] w-11/12">
            <h2 className="text-xl font-semibold mb-4">Upload Files</h2>
            <form 
            onSubmit={handleSubmit}
            >
              <div>
                {/* <p>Drag and drop your files here</p> */}
                {/* <img className="object-center w-28 h-28 block" src="/images/cloudicon2.png"></img> */}
                {
                  files
                    ? <div className="flex justify-between items-center p-2 bg-gray-100 rounded-lg shadow-sm">
                        <img src="/images/docs.png" alt="document image" className="w-6" />{files[0].name}
                        <span onClick={()=>setFiles(null)}>
                          <svg className="fill-gray-600" xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 352 512"><path d="M242.72 256l100.07-100.07c12.28-12.28 12.28-32.19 0-44.48l-22.24-22.24c-12.28-12.28-32.19-12.28-44.48 0L176 189.28 75.93 89.21c-12.28-12.28-32.19-12.28-44.48 0L9.21 111.45c-12.28 12.28-12.28 32.19 0 44.48L109.28 256 9.21 356.07c-12.28 12.28-12.28 32.19 0 44.48l22.24 22.24c12.28 12.28 32.2 12.28 44.48 0L176 322.72l100.07 100.07c12.28 12.28 32.2 12.28 44.48 0l22.24-22.24c12.28-12.28 12.28-32.19 0-44.48L242.72 256z"/></svg>
                        </span></div>
                    : <div className="flex items-center justify-center w-full">
                      <label htmlFor="dropzone-file" className="flex flex-col items-center justify-center w-full h-32 md:h-64 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 hover:bg-gray-100">
                        <div className="flex flex-col items-center justify-center pt-5 pb-6">
                          <svg className="w-8 h-8 mb-4 text-gray-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 16">
                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2" />
                          </svg>
                          <p className="mb-2 text-sm text-gray-500"><span className="font-semibold">Click to upload</span></p>
                          <p className="text-xs text-gray-500"> DOC, PDF, PPT, XLS (MAX. 800x400px)</p>
                        </div>
                        <input onChange={(e) => { setFiles(e.target.files) }} id="dropzone-file" type="file" className="hidden" />
                      </label>
                    </div>
                }
              </div>
              <label className="block mb-2 mt-4">
                Name
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full border rounded px-3 py-2"
                // required
                />
              </label>
              <label className="block mb-2 mt-4">
                Tag
                <input
                  type="text"
                  name="tag"
                  value={formData.tag}
                  onChange={handleChange}
                  className="w-full border rounded px-3 py-2"
                // required
                />
              </label>
              <label className="block mb-2 mt-4">
                Description
                <textarea
                  name="description"
                  value={formData.description}
                  onChange={handleChange}
                  className="w-full border rounded px-3 py-2 resize-none"
                  rows="4"
                // required
                />
              </label>
              <div className="flex w-full justify-around">
              <button
                  onClick={() => setShowModal(false)}
                  className="bg-violet-700 text-white px-4 py-2 rounded mt-4">
                  Cancel
                </button>
                <button
                  type="submit"
                  className="bg-violet-700 text-white px-4 py-2 rounded mt-4">
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

export default UploadModal;