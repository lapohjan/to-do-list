import React from 'react';
import Todo from './containers/Todo';
import "./App.css";
import Header from './containers/Header';
import Footer from './containers/Footer';

const App = () => {
  return <div>
    <Header/>
    <Todo/>
    <Footer/>
  </div>;
}

export default App;
