const QuestionItem = ({ questionItem }) => {
  const { id, question, content } = questionItem

  return (
    <details
      key={id}
      className="container pb-3 pl-3 flex flex-row items-center max-w-fit flex-wrap"
    >
      <summary className="text-xl font-normal pl-2 my-1 cursor-pointer">
        {question}
      </summary>
      <div className="block w-3/6 min-w-fit max-w-screen-xl bg-blue-300 p-2 rounded-lg cursor-pointer">
        <p
          className="text-1xl pl-3"
          dangerouslySetInnerHTML={{ __html: content }}
        ></p>
      </div>
    </details>
  )
}

export default QuestionItem
