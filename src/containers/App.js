import React, { Component } from 'react';
import './App.css';
import { PageHeader } from 'react-bootstrap';
import Card from '../components/Card';

class App extends Component {
  render() {
    return (
      <div>
        <PageHeader className="text-center title">
          Skateboard Wheels
        </PageHeader>
        <Card />
      </div>
    );
  }
}

export default App;
