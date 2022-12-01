import React from "react";

const FaqChilde = (props) => {
  const { question, answer } = props.faq;
  
  return (
    <>
      <details className="detailsFaq">
        <summary className="summaryFaq">{question}</summary>
        <p className="pFaq">{answer}</p>
      </details>
    </>
  );
};

export default FaqChilde;
