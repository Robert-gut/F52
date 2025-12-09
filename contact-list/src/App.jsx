import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import { useState } from 'react';

import ContactList from "./pages/ContactList/ContactList"
import NewContact from "./pages/NewContact/NewContact"
import UpdateContact from "./pages/UpdateContact/UpdateContact"
import NotFound from "./pages/NotFound/NotFound"
import Header from './components/Header/Header';



function App() {
  const [stor, setStor] = useState(
    [
      {
        avatar: "66",
        email: "ADMIN@ADMIN.COM",
        favorite: true,
        firstName: "Robssdfgsdfgert",
        gender: "women",
        id: "0ade6e5f-07ef-4ed2-85de-b940aabea656",
        lastName: "Barnabishvili",
        phone: "0680423116",
        status :"family",
      },
      {
        avatar: "77",
        email: "ADMIN@ADMIN.COM",
        favorite: true,
        firstName: "Robsdfgsdfgerert",
        gender: "women",
        id: "0ade6e5f-07ef-4e72-85de-b940aafea656",
        lastName: "Barnabishvili",
        phone: "0680423116",
        status :"family",
      },
      {
        avatar: "33",
        email: "ADMIN@ADMIN.COM",
        favorite: true,
        firstName: "Robert",
        gender: "women",
        id: "0ade6e5f-07ef-4e72-85de-b940agbea656",
        lastName: "Barnabishvili",
        phone: "0680423116",
        status :"family",
      },
    ]
  )
  
  //! create
  const handleNewContact = (newContact) => {
    setStor(prevStor => [...prevStor, newContact])
  }
  //!del
  const handleDeleteContact = (id) => {
    setStor(prevStor => prevStor.filter(contact => contact.id !== id))
  }

  return (
    <Router>
      <Header/>
      <Routes>
        <Route path="/" element={<ContactList stor={stor} onDeleteContact={handleDeleteContact}/>}/>
        <Route path="/new-contact" element={<NewContact onNewContact={handleNewContact}/>}/>
        <Route path="/update-contact" element={<UpdateContact/>}/>
        <Route path="*" element={<NotFound/>}/>
      </Routes>
    </Router>
  )
}

export default App
