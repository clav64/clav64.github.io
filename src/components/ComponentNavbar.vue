<template>
  <nav class="navbar">
    <ul>
      <li><router-link to="/">Home</router-link></li>
      <li><router-link to="/contact">Contact</router-link></li>
    </ul>
  </nav>
</template>

<style scoped>
.navbar {
  background: linear-gradient(90deg, #007bff, #0056b3);
  padding: 15px;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
  opacity: 0;
  transform: translateY(-20px);
  animation: fadeIn 0.6s ease-in-out forwards;
}

@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translateY(-20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}


ul {
  list-style: none;
  display: flex;
  gap: 30px;
  justify-content: center;
}

li {
  position: relative;
}

a {
  text-decoration: none;
  color: white;
  font-size: 18px;
  font-weight: bold;
  transition: all 0.3s ease-in-out;
}

a:hover {
  color: #ffcc00;
  transform: scale(1.1);
}

/* Animation: Underline Slide Effect */
li::after {
  content: "";
  position: absolute;
  width: 100%;
  height: 3px;
  background-color: #ffcc00;
  left: 0;
  bottom: -5px;
  transform: scaleX(0);
  transition: transform 0.3s ease-in-out;
}

li:hover::after {
  transform: scaleX(1);
}
</style>