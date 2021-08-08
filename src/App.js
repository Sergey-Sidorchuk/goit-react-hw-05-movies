import React from 'react';
// import { Route, Switch } from 'react-router-dom';
import Container from './components/Container/Container';
import AppBar from './components/AppBar/AppBar';
import SearchBar from './components/SearchBar/SearchBar';



export default function App() {
  return (
    <Container>
      <AppBar />

<SearchBar />
      
    </Container>
  )
}