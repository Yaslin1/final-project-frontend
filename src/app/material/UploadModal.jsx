//TODO: Add button modal in file manager that opens the modal

export default function UploadModal() {

  //   <script>
  //     function openModal(key) {
  //         document.getElementById(key).showModal(); 
  //         document.body.setAttribute('style', 'overflow: hidden;'); 
  //         document.getElementById(key).children[0].scrollTop = 0; 
  //         document.getElementById(key).children[0].classList.remove('opacity-0'); 
  //         document.getElementById(key).children[0].classList.add('opacity-100')
  //     }

  //     function modalClose(key) {
  //         document.getElementById(key).children[0].classList.remove('opacity-100');
  //         document.getElementById(key).children[0].classList.add('opacity-0');
  //         setTimeout(function () {
  //             document.getElementById(key).close();
  //             document.body.removeAttribute('style');
  //         }, 100);
  //     }
  // </script>

  return (
    <><div class="flex justify-center items-start h-full absolute top-0 w-full mt-7">
      <button type="button" onclick="openModal('mymodalcentered')" class="px-4 py-2 bg-blue-500 text-white rounded mr-3">Open Modal Centered</button>
    </div>

      <dialog id="mymodalcentered" class="bg-transparent z-0 relative w-screen h-screen">
        <div class="p-7 flex justify-center items-center fixed left-0 top-0 w-full h-full bg-gray-900 bg-opacity-50 z-50 transition-opacity duration-300 opacity-0">
          <div class="bg-white flex rounded-lg w-1/2 relative">
            <div class="flex flex-col items-start">
              <div class="p-7 flex items-center w-full">
                <div class="text-gray-900 font-bold text-lg">Modal Centered</div>
                <svg onclick="modalClose('mymodalcentered')" class="ml-auto fill-current text-gray-700 w-5 h-5 cursor-pointer" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 18 18">
                  <path d="M14.53 4.53l-1.06-1.06L9 7.94 4.53 3.47 3.47 4.53 7.94 9l-4.47 4.47 1.06 1.06L9 10.06l4.47 4.47 1.06-1.06L10.06 9z" />
                </svg>
              </div>

              <div class="px-7 overflow-x-hidden overflow-y-auto" style="max-height: 40vh;">
                <p>First Line</p>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                <p>Last Line</p>
              </div>

              <div class="p-7 flex justify-end items-center w-full">
                <button type="button" class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mr-3">
                  Ok
                </button>
                <button type="button" onclick="modalClose('mymodalcentered')" class="bg-transparent hover:bg-gray-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded">
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      </dialog>

    </>
  )
}