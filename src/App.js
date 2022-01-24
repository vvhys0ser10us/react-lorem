import React, { useState } from 'react'
import data from './data'
function App() {
  const [text, setText] = useState([])
  const [count, setCount] = useState(0)

  const submitHander = (e) => {
    e.preventDefault()
    if (count < 0) {
      setText(data.slice(0, 1))
      return
    }

    if (count > data.length) {
      setText(data.slice(0, data.length))
      return
    }

    setText(data.slice(0, count))
  }

  return (
    <section className="section-center">
      <h3>tried of boring lorem ipsum?</h3>
      <form className="lorem-form" onSubmit={submitHander}>
        <label htmlFor="amount">paragraphs:</label>
        <input
          type="number"
          name="name"
          id="amount"
          value={count}
          onChange={(e) => {
            setCount(e.target.value)
          }}
        />
        <button className="btn" type="submit">
          generate
        </button>
      </form>

      {text.map((item, index) => {
        return <p key={index}>{item}</p>
      })}
    </section>
  )
}

export default App
