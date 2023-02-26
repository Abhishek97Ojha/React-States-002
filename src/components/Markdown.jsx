import React from "react";
import ReactMarkdown from 'react-markdown'
import './Markdown.css'

const Markdown = ({ input, setInput }) => {
  return (
    <div className="markDown">
      <div className="text">
        <textarea value={input}
          onChange={(e) => {
            const updatedValue = e.target.value;
            setInput(updatedValue);
          }}
        ></textarea>
      </div>
      <div className="result">
        <ReactMarkdown>{input}</ReactMarkdown>
      </div>
    </div>
  );
};

export default Markdown;
