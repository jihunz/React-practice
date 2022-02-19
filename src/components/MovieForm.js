import React, { useState } from "react";
import InputField from "./InputField";

const Form = ({ addMovie, removeMovie }) => {
  const [title, setTitle] = useState("");
  const [year, setYear] = useState("");
  const [titleError, setTitleError] = useState("");
  const [yearError, setYearError] = useState("");

  const resetForm = () => {
    setTitle("");
    setYear("");
  };

  const validateForm = () => {
    let validated = true;
    if (!title) {
      setTitleError("영화 제목을 입력해주세요");
      validated = false;
    }

    if (!year) {
      setYearError("개봉년도를 입력해주세요");
      validated = false;
    }

    return validated;
  };

  const resetErros = () => {
    setTitleError("");
    setYearError("");
  };

  const onSubmit = (event) => {
    event.preventDefault();
    if (validateForm()) {
      addMovie({
        id: Date.now(),
        title: title,
        year: year,
      });
      resetErros();
      resetForm();
    }
  };

  return (
    <form onSubmit={onSubmit}>
        <InputField
            type="text"
            value={title}
            placeholder="영화 제목"
            onChange={e => setTitle(e.target.value)}
            errorMsg={titleError}
        />
        <InputField
            type="number"
            value={year}
            placeholder="개봉 년도"
            onChange={e => setYear(e.target.value)}
            errorMsg={yearError}
        />
      <button type="submit">영화 추가</button>
    </form>
  );
};

export default Form;
