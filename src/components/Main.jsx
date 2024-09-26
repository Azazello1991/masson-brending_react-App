import React from "react";
import Hero from "./mainComponents/Hero";
import About from "./mainComponents/About";
import Example from "./mainComponents/Example";
import Sale from "./mainComponents/Sale";
import Top from "./mainComponents/Top";
import Video from "./mainComponents/Video";
import Form from "./mainComponents/Form";
import Contacts from "./mainComponents/Contacts";
import Comments from "./mainComponents/Comments";
import Catalog from "./mainComponents/Catalog";

const Main = () => {
  return (
    <main class="main">
      <Hero />
      <About />
      <Example />
      <Sale />
      <Top />
      <Catalog />
      <Comments />
      <Video />
      <Form />
      <Contacts />
    </main>
  );
};

export default Main;
