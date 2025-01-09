import { FaHeart } from "react-icons/fa";
import axios from "axios";
import "./App.css";
import { useEffect, useState } from "react";

function App() {
  const [quote, setQuote] = useState("");
  const [author, setAuthor] = useState("");

  const fetchQuote = async () => {
    const response = await axios.get(
      "https://quotes-api-self.vercel.app/quote"
    );
    setQuote(response.data.quote);
    setAuthor(response.data?.author);
  };

  useEffect(() => {
    fetchQuote();
  }, []);

  return (
    <main className="flex flex-col justify-center items-center min-h-screen">
      <section className="w-full md:w-2/3 flex flex-col justify-center items-center gap-10 px-4 lg:px-8">
        <div className="flex flex-col items-center gap-2 my-4 md:my-8">
          <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl text-gray-700 tracking-tight text-center font-bold">
            Quotopia
          </h1>
          <p className="text-sm md:text-base lg:text-lg xl:text-xl text-gray-500 tracking-tight font-normal text-center w-full sm:w-4/5">
            A utopia of quotes and wisdom.
          </p>
        </div>
        <div className="text-center bg-indigo-50 rounded-md p-4">
          <h1 className="text-balance font-light text-lg md:text-xl w-full md:w2/3 xl:w-4/5">
            {quote}
          </h1>
          <p className="text-balance tracking-tight font-normal text-xs md:text-sm mb-4 text-gray-600">
            -{author}
          </p>
          <button
            onClick={fetchQuote}
            className="bg-gray-900 rounded-md p-2 h-10 text-white"
          >
            Get New Quote
          </button>
        </div>
      </section>

      <footer className="mt-10 md:mt-20 mb-4">
        <h2 className="text-center text-gray-800 font-semibold">
          Made with <FaHeart className="inline" color="red" /> by{" "}
          <a
            href="https://sameer-frontend-dev.vercel.app/"
            target="_blank"
            className="link"
          >
            Sameer
          </a>
        </h2>
      </footer>
    </main>
  );
}

export default App;
