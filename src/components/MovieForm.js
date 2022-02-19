import React, { useState } from "react";

const Form = ({ addMovie, removeMovie }) => {
    const [title, setTitle] = useState("");
    const [year, setYear] = useState("");

    const resetForm = () => {
        setTitle("");
        setYear("");
    }

    const onSubmit = (event) => {
        event.preventDefault();
        addMovie({
            id: Date.now(),
            title: title,
            year: year
        });
        resetForm();
    };

  return(
    <form onSubmit={onSubmit}>
        <input
            type="text"
            value={title}
            placeholder="제목"
            onChange={e => setTitle(e.target.value)}
        />
        <br/>
        <input
            type="text"
            value={year}
            placeholder="개봉년도"
            onChange={e => setYear(e.target.value)}
        />
        <br/>
        <button type='submit'>영화 추가</button>
    </form>
)
};

export default Form;