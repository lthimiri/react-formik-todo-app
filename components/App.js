import React from "react";
import Footer from "./Footer";
import AddTodo from "../containers/AddTodo";
import VisibleTodoList from "../containers/VisibleTodoList";
import { object, string, number, date } from "yup";
import Header from "./Header";

const App = () => (
  <div>
    <Header />
  </div>
);

const contactSchema = object({
  name: string().required(),
  age: number().integer()
});

contactSchema
  .validate(
    {
      age: "avinash"
    },
    { abortEarly: false }
  )
  .then(data => {
    console.log(data);
  })
  .catch(error => {
    console.log(error);
  });

export default App;
