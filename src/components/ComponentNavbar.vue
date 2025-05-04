<template>
    <nav>
      <ul>
        <li><router-link to="/">Home</router-link></li>
        <li><router-link to="/contact">Contact</router-link></li>
      </ul>
    </nav>
  </template>
  
  <style scoped>
  nav {
    background-color: #007bff;
    padding: 10px;
  }
  ul {
    list-style: none;
    display: flex;
    gap: 20px;
  }
  li {
    color: white;
  }
  </style>