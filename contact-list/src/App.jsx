import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import { Provider } from 'react-redux';
import store from './store';

import ContactList from "./pages/ContactList/ContactList"
import NewContact from "./pages/NewContact/NewContact"
import UpdateContact from "./pages/UpdateContact/UpdateContact"
import NotFound from "./pages/NotFound/NotFound"
import Header from './components/Header/Header';



function App() {
  return (
    <Provider store={store}>
      <Router>
      <Header/>
      <Routes>
        <Route path="/" element={<ContactList/>}/>
        <Route path="/new-contact" element={<NewContact/>}/>
        <Route path="/update-contact/:id" element={<UpdateContact/>}/>
        <Route path="*" element={<NotFound/>}/>
      </Routes>
    </Router>
    </Provider>
  )
}

export default App
