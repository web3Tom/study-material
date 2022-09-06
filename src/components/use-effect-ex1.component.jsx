import { useState } from 'react'

const UseEffectEx1 = () => {
  const [stockSymbol, setStockSymbol] = useState('')
  const [stockData, setStockData] = useState([])
  const [error, setError] = useState(null)
  const API_KEY = 'E9K5XYHJbR6MPEPxD88CyhvXT8Jt06SEIyPPcp7f'

  async function fetchStockData() {
    setError(null)
    fetch(
      `https://api.stockdata.org/v1/data/quote?symbols=${stockSymbol}&api_token=${API_KEY}`
    )
      .then((response) => {
        if (!response.ok)
          throw new Error(`Problem with server${response.status}`)
        return response.json()
      })
      .then((data) => {
        if (data.data[0] == null)
          throw new Error(`Problem with symbol selection ${data.status}`)
        setStockData(data.data[0])
      })
      .catch((err) => {
        console.error(`${err} 💥💥💥`)
        setError(`💥${err.message}.💥 Try again!`)
      })
  }

  const HandleSubmit = (e) => {
    e.preventDefault()
    fetchStockData()
  }

  return (
    <>
      <div className="flex flex-col content-start gap-5 p-10">
        <h2 className="text-2xl text-stone-400 decoration-solid font-black">
          Controlled Form Component using Async Function
        </h2>
        <div className="grid grid-cols-2 grid-rows-1">
          <form onSubmit={HandleSubmit}>
            <div className="flex flex-col justify-start gap-4">
              <input
                className="w-1/4 outline outline-4 outline-offset-1 outline-blue-500/50 focus:outline-2"
                placeholder="Type symbol here"
                value={stockSymbol}
                type="text"
                onChange={(e) => setStockSymbol(e.target.value)}
              />
              <button
                className="w-fit text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 shadow-lg shadow-blue-500/50 dark:shadow-lg dark:shadow-blue-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"
                type="submit"
              >
                Submit
              </button>
            </div>
          </form>
          <div className="flex flex-col justify-start items-start gap-2">
            {error ? (
              <p>{error}</p>
            ) : (
              <>
                <h3 className="text-xl font-bold">{stockData.name}</h3>
                <p className="text-md">Price: ${stockData.price}</p>
                <p className="text-md">
                  MarketCap: ${(stockData.market_cap / 1000000).toFixed(0)}
                  {''} million
                </p>
                <p className="text-md">Day Change(%): {stockData.day_change}</p>
              </>
            )}
          </div>
        </div>
      </div>
    </>
  )
}

export default UseEffectEx1
