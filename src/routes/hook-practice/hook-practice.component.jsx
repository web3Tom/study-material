import UseStateEx1 from '../../components/use-state-ex1.component'
import UseEffectEx1 from '../../components/use-effect-ex1.component'

const HookPractice = () => {
  return (
    <div className="flex flex-col content-start gap-6 w-screen mx-auto p-10">
      <h1 className="text-5xl text-sky-300 self-center mb-5 font-bold">
        Hook Practice
      </h1>
      <UseStateEx1 />
      <UseEffectEx1 />
    </div>
  )
}

export default HookPractice
