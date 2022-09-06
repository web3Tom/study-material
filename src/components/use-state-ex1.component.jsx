import { useState } from 'react'

import ArrowSVG from '../assets/arrow.component'

const UseStateEx1 = () => {
  const [count, setCount] = useState(0)

  return (
    <div className="flex flex-col content-start gap-5 p-10">
      <h2 className="text-2xl text-stone-400 decoration-solid font-black">
        Counter
      </h2>
      <div className="flex flex-row mx-auto gap-5 justify-center">
        <div
          className="rotate-90 scale-150"
          onClick={() => setCount(count - 1)}
        >
          <ArrowSVG />
        </div>
        <p className="text-lg font-semibold select-none">{count}</p>
        <div
          className="-rotate-90 scale-150"
          onClick={() => setCount(count + 1)}
        >
          <ArrowSVG />
        </div>
      </div>
      <snippet-highlight
        theme="light"
        language="react"
        content=" import { useState } from 'react'
    import ArrowSVG from '../assets/arrow.component'
    const UseStateEx1 = () => {
        const [count, setCount] = useState(0)
        <div onClick={() => setCount(count - 1)}>
          <ArrowSVG />
        </div>
            <p>{count}</p>
        <div onClick={() => setCount(count + 1)}>"
      />
    </div>
  )
}

export default UseStateEx1
