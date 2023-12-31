import { useState, useRef } from "react";
import { AiOutlineClose } from "react-icons/ai";
import { useData } from "../hooks/useData";
import { add_Store } from "../api/Stores";
import { showToastMessage } from "../utils/Toasts";

const AddStore = (props) => {
  const { userId, setStores } = useData();
  const buttonRef = useRef(null);
  const [input, setInput] = useState({
    store: "",
    address: "",
  });

  const handleChange = (event) => {
    const { name, value } = event.target;

    setInput((prevInput) => {
      return {
        ...prevInput,
        [name]: value,
      };
    });
  };

  const handleSubmit = async (e) => {
    buttonRef.current.disabled = true;
    e.preventDefault();
    if (!input.store && !input.address) {
      showToastMessage("error", "fill all input fields");
      return;
    }
    console.log("pressed");
    const newStore = {
      store: input.store,
      address: input.address,
    };

    try {
      const { data } = await add_Store(userId, newStore);
      console.log(data.addStore, "a");

      setStores((prev) => {
        return [...prev, data.addStore];
      });

      setInput({ store: "", address: "" });
      showToastMessage("success", data.message);
    } catch (error) {
      showToastMessage("error", error);
    }

    props.setShowModal(false);
    // window.location.reload();
  };
  return (
    <>
      <div
        id="small-modal"
        tabindex="-1"
        class="fixed z-50 h-[calc(100%-1rem)] w-full  overflow-y-auto  overflow-x-hidden p-4 md:inset-0 md:h-full lg:top-20 lg:left-1/3 lg:bottom-1/4"
      >
        <div class="relative h-full w-full max-w-md md:h-auto">
          {/* Modal content  */}
          <div class="relative rounded-lg bg-white shadow ">
            {/* Modal header  */}
            <div class="flex items-center justify-center rounded-t border-b p-5 ">
              <h3 class="text-xl  font-medium text-gray-900 ">Add Store</h3>
              <button
                onClick={() => props.setShowModal(false)}
                type="button"
                class="ml-auto inline-flex items-center rounded-lg bg-transparent p-1.5 text-sm text-gray-400 hover:bg-gray-200 hover:text-gray-900 "
                data-modal-hide="small-modal"
              >
                <AiOutlineClose class="h-5 w-5" />
              </button>
            </div>
            {/* Modal body */}
            <form>
              <div class="space-y-6 p-6">
                <div class="group relative z-0 mb-6 w-full">
                  <input
                    type="text"
                    name="store"
                    id="floating_email"
                    class="peer block w-full appearance-none border-0 border-b-2 border-gray-300 bg-transparent py-2.5 px-0 text-sm text-gray-900 focus:border-blue-600 focus:outline-none focus:ring-0"
                    placeholder=" "
                    required
                    value={input.store}
                    onChange={handleChange}
                  />
                  <label
                    for="floating_email"
                    class="absolute top-3 -z-10 origin-[0] -translate-y-6 scale-75 transform text-sm text-gray-500 duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:left-0 peer-focus:-translate-y-6 peer-focus:scale-75 peer-focus:font-medium peer-focus:text-blue-600 dark:text-gray-400 peer-focus:dark:text-blue-500"
                  >
                    Store Name
                  </label>
                </div>
                <div class="group relative z-0 mb-6 w-full">
                  <input
                    type="text"
                    name="address"
                    id="floating_password"
                    class="peer block w-full appearance-none border-0 border-b-2 border-gray-300 bg-transparent py-2.5 px-0 text-sm  text-gray-900 focus:border-blue-600 focus:outline-none focus:ring-0"
                    placeholder=" "
                    required
                    value={input.address}
                    onChange={handleChange}
                  />
                  <label
                    for="floating_password"
                    class="absolute top-3 -z-10 origin-[0] -translate-y-6 scale-75 transform text-sm text-gray-500 duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:left-0 peer-focus:-translate-y-6 peer-focus:scale-75 peer-focus:font-medium peer-focus:text-blue-600 dark:text-gray-400 peer-focus:dark:text-blue-500"
                  >
                    address
                  </label>
                </div>
              </div>
              {/* Modal footer */}
              <div class="flex items-center justify-center space-x-2 rounded-b border-t border-gray-200 p-6 ">
                <button
                  ref={buttonRef}
                  data-modal-hide="small-modal"
                  type="submit"
                  onClick={handleSubmit}
                  disabled={!input.store || !input.address}
                  class="w-full  rounded-lg bg-blue-700 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 disabled:bg-slate-400 "
                >
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default AddStore;
