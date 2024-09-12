
// import './App.css';
import { questions } from './Data/faqQuestions'
import { useState } from 'react';
import 'react-notifications/lib/notifications.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'react-toastify/dist/ReactToastify.css';
import Faq from './components/FaqPropDrilling';
import { NotificationContainer, NotificationManager } from 'react-notifications';
import TodoList from './components/TodoList';
import Tabbing from './components/Tabbing';
import ControlledComponent from './components/ControlledComponent';
import RandomPasswordGen from './components/RandomPasswordGen';
import Task from './components/Task';
import Wheather from './components/Wheather';
import { createBrowserRouter, Route, Router, Routes } from 'react-router-dom';
import PersonDetails from './components/PersonDetails';

function App() {
   
  return (
    <div className="App">
      
      {/* <Wheather></Wheather> */}
      {/* <Task></Task> */}
      {/* <RandomPasswordGen></RandomPasswordGen> */}
      {/* <ControlledComponent></ControlledComponent> */}
      {/* <TodoList></TodoList> */}
      {/* <Tabbing></Tabbing>   */}
      {/* <Faq></Faq> */}

    </div>
  );
}

export default App;
