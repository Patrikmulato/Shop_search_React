import React, { Component } from 'react';
import './App.css';
import { PageHeader } from 'react-bootstrap';
import Search from '../components/Search.js';
import Card from '../components/Card';
import { products } from '../components/products.js';


class App extends Component {
  constructor() {
    super();
    this.state = {
      values: products,
      searchfield: '',
    };
  }

  onSearchChange = (e) => {
    this.setState({ searchfield: e.target.value });
  }


  render() {
    const { values , searchfield } = this.state;
    const filteredProducts = values.filter(value  => {
      return (
      value.name.toLocaleLowerCase().includes(searchfield.toLocaleLowerCase()) ||
      value.brand.toLocaleLowerCase().includes(searchfield.toLocaleLowerCase()) ||
      value.description.toLocaleLowerCase().includes(searchfield.toLocaleLowerCase()) ||
      value.price.toLocaleLowerCase().includes(searchfield.toLocaleLowerCase())
      )
    });

    console.log(filteredProducts);

    let validationState = null;
    if(filteredProducts.length === 0) validationState = 'error';
    else if(values.length > filteredProducts.length) validationState = 'success';
    console.log(validationState);

    return (
      <div>
        <PageHeader className="text-center title">
          Skateboard Wheels
        </PageHeader>
        <Search
          handleChange={this.onSearchChange}
          validationState
        />
        <Card products={filteredProducts}/>
      </div>
    );
  }
}

export default App;
