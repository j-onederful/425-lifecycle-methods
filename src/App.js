import React, { Component } from 'react'
import FavoriteFoods from './components/FavoriteFoods'

export default class App extends Component {
  render() {
    return (
      <>
        <h1>React Lifecycle 🌱</h1>

        <FavoriteFoods />
      </>
    )
  }
}