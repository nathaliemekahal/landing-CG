import "./App.css";
import { Currency } from "./currency";

function App() {
  return (
    <div className="w-full h-full">
      <div id="section-1" className="w-full bg-[#FF5722]">
        <div className="w-full">
          <h1 className="p-2 bg-transparent text-white font-bold">
            BlackMediaWeb3
          </h1>
        </div>
        <div>
          <svg
            className="rotate-180"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1840 220"
          >
            <path
              fill="#ffffff"
              fillOpacity="1"
              d="M0,192L120,202.7C240,213,480,235,720,250.7C960,267,1200,277,1320,282.7L1440,288L1440,320L1320,320C1200,320,960,320,720,320C480,320,240,320,120,320L0,320Z"
            ></path>
          </svg>
        </div>
        <div className="flex w-full justify-center">
          <div className="flex flex-col">
            <h2 className="text-white max-w-[50%] flex font-extrabold text-3xl">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Adipisci
              maiores recusandae repellendus exercitationem? Laboriosam tempora
              eligendi provident aperiam
            </h2>

            <button className="mt-8 max-w-[500px] p-4 bg-[#FFEA00] rounded-full hover:bg-sky-700 transition duration-300">
              <p className="text-2xl font-bold text-white">
                Speak to our team today
              </p>
              <span className="text-sm text-gray">
                Schedule your FREE call here
              </span>
            </button>
          </div>
          <div>
            <Currency />
          </div>
        </div>

        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
          <path
            fill="#ffffff"
            fillOpacity="1"
            d="M0,32L480,192L960,64L1440,64L1440,320L960,320L480,320L0,320Z"
          ></path>
        </svg>
      </div>
      <div id="section-2 w-full bg-[#273036]">
        <div className="w-8/12 min-h-[400px] mx-auto">
          <h2 className="text-white w-1/2 font-extrabold text-3xl">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Adipisci
            maiores recusandae repellendus exercitationem? Laboriosam tempora
            eligendi provident aperiam
          </h2>

          <p className="text-white mt-8">Lorem ipsum dolor sit amet.</p>

          <button className="mt-8 max-w-[500px] p-4 bg-sky-400 rounded-full hover:bg-sky-700 transition duration-300">
            <p className="text-2xl font-bold text-white">
              Speak to our team today
            </p>
            <span className="text-sm text-gray">
              Schedule your FREE call here
            </span>
          </button>
        </div>
        {/* <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
          <path
            fill="#ffffff"
            fill-opacity="1"
            d="M0,160L480,224L960,96L1440,32L1440,320L960,320L480,320L0,320Z"
          ></path>
        </svg> */}
      </div>
    </div>
  );
}

export default App;
