import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Vcard from "./component/Vcard.js";
import React, { useState, useEffect, createContext } from "react";
import Index from "./component/Index.js";
import Event from "./component/Event";
import NavB from "./component/Nav";

export const EventContext = createContext();

const algoliasearch = require("algoliasearch");

const client = algoliasearch("5DGIE39UOX", "2014bcb9d00a8d90fdde4520df78b5b9");
const index = client.initIndex("contact_info");
const e_index = client.initIndex("event_info");

function App() {
  const [contact, setContact] = useState([]);
  const [event, setEvent] = useState([]);
  const [currentEvent, setCurrentEvent] = useState([
    {
      Name: "",
      Description: "",
      EventUniqueId: "16763198-b512-4fc8-ac56-02c29a75c902"
    }
  ]);

    useEffect(() => {
      setCurrentEvent(
        JSON.parse(window.sessionStorage.getItem("currentEvent_1"))
      );
    }, []);

  useEffect(() => {
    window.sessionStorage.setItem("currentEvent_1", JSON.stringify(currentEvent));

    const url = `https://connect.artba.org/api/registrations?eventId="16763198-b512-4fc8-ac56-02c29a75c902`
 
console.log('==========url==========================');
console.log(url);
console.log('====================================');
    //Get all events from the database and send them to algolia
    var myHeaders = new Headers();
    myHeaders.append(
      "Authorization",
      "Basic d2SuLwamTRQfEWqAuwBQ4zSTiSlq34mrICTaMeAIPS4="
    );

    var requestOptions = {
      method: "GET",
      headers: myHeaders,
      redirect: "follow",
    };

    fetch("https://connect.artba.org/api/events", requestOptions)
      .then((response) => response.json())
      .then((result) => {
        setEvent(result);
      })
      .catch((error) => console.log("error", error));

fetch(url,requestOptions)
  .then((response) => response.json())
  .then((result) => {console.log(result["Results"]);
    setContact(result["Results"])})
  .catch((error) => console.log("error", error));
  index.clearObjects();
  index.saveObjects(data, { autoGenerateObjectIDIfNotExist: true });

    //Get contact for the picked event from the database and send them to algolia
  }, [currentEvent]);

   var data = [];

// e_index.clearObjects();
// e_index.saveObjects(event, { autoGenerateObjectIDIfNotExist: true });

for (var i = 0; i < contact.length; i++) {
  data.push(contact[i].Attendees[0]);
}


  const routeComponents = data.map(
    ({
      FullName,
      FirstName,
      AttendeeUniqueID,
      LastName,
      Email,
      Phone,
      CompanyName,
    }) => (
      <Route
        path={FirstName}
        key={AttendeeUniqueID}
        element={
          <Vcard
            FullName={FullName}
            FirstName={FirstName}
            LastName={LastName}
            Email={Email}
            ParentMemberName={CompanyName}
            Phone={Phone}
          />
        }
      />
    )
  );

  return (
    <div className="App">
      <BrowserRouter>
      <NavB/>
      <hr/>
        <h1>{}</h1>
        <Routes>{routeComponents}</Routes>
        <Routes>
          <Route
            path="/"
            element={
              <EventContext.Provider value={{ setCurrentEvent, currentEvent }}>
                <Event />
              </EventContext.Provider>
            }
          />
          <Route
            path="/qr"
            element={
              <EventContext.Provider value={{ setCurrentEvent, currentEvent }}>
                <Index />
              </EventContext.Provider>
            }
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
