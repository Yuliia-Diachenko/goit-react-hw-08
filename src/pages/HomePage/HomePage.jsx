// import { css } from "@emotion/react";
import PageTitle from "../../components/PageTitle/PageTitle";
import css from "./HomePage.module.css";
import { GiNotebook } from "react-icons/gi";

export default function HomePage() {
  return (
    <div className={css.container}>
      <PageTitle>
      Welcome to the phone book application.
      </PageTitle>
      <p>
      In this web application, you can save your contacts, 
      emergency numbers and have access to the phone book from any device with Internet access.
      </p>
      <GiNotebook className={css.image}/>
      </div>
  );
}