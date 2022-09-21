import React from 'react'

import { useState } from 'react'
import ReactMarkdown from 'react-markdown'
// import './App.css'
const Markdown= () => {
  const [markdown, setMarkdown] = useState('## markdown preview')
  return (
 <main>
  <section className="markdown">
   <textarea className="input" value={markdown} onChange={(e)=>setMarkdown(e.target.value)}></textarea>

   <article className="result">
    <ReactMarkdown>
    {markdown}
    </ReactMarkdown>
   
   </article>
  </section>
 </main>
  )
}

export default Markdown