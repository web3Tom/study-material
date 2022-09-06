import QuestionItem from '../../components/question-item.component'

import {
  UIQuestionBank,
  ReactQuestionBank,
} from '../../components/question-bank'

const Home = () => {
  return (
    <>
      <section className="flex flex-col mx-auto pl-12 py-10 box-border border-b-2 border-blue-700">
        <h1 className="text-3xl underline text-blue-700 text-left mb-5 font-bold">
          UI Interview Questions
        </h1>
        {UIQuestionBank.map((questionItem) => (
          <QuestionItem key={questionItem.id} questionItem={questionItem} />
        ))}
      </section>
      <section className="flex flex-col mx-auto pl-12 py-10 box-border border-b-2 border-blue-700">
        <h1 className="text-3xl underline text-blue-700 text-left mb-5 font-bold">
          React Interview Questions
        </h1>
        {ReactQuestionBank.map((questionItem) => (
          <QuestionItem key={questionItem.id} questionItem={questionItem} />
        ))}
      </section>
    </>
  )
}

export default Home
