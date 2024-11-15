import React from "react";

import QuestionForm from "@/components/forms/QuestionForm";

const AskAQuestion = () => {
  return (
    <>
      <div className="h1-bold text-dark100_light900">Ask a question</div>
      <div className="mt-9">
        <QuestionForm />
      </div>
    </>
  );
};

export default AskAQuestion;
