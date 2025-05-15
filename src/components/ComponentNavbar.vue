<template>
  <nav class="navbar" @click="closeDropdown">
    <ul>
      <li><router-link to="/">Home</router-link></li>
      <li class="dropdown" @click.stop="toggleDropdown">
        <router-link to="#" class="dropdown-toggle">
          Projects
          <span class="arrow" :class="{ 'arrow-down': isDropdownOpen, 'arrow-right': !isDropdownOpen }"></span>
        </router-link>
        <ul class="dropdown-menu" :key="isDropdownOpen" :class="{ 'show': isDropdownOpen }" @click.stop>
          <li><router-link to="/projects/project1" @click="closeDropdown">Project One - Hacker News Trending</router-link></li>
          <li><router-link to="/projects/project2" @click="closeDropdown">Project Two</router-link></li>
        </ul>
      </li>
      <li><router-link to="/contact">Contact</router-link></li>
    </ul>
  </nav>
</template>

<script>
export default {
  data() {
    return {
      isDropdownOpen: false,
    };
  },
  methods: {
    toggleDropdown() {
      this.isDropdownOpen = !this.isDropdownOpen;
    },
    closeDropdown() {
      this.isDropdownOpen = false;
    },
  },
};
</script>

<style scoped>
.navbar {
  background: linear-gradient(90deg, #007bff, #0056b3);
  padding: 15px;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
}

ul {
  list-style: none;
  display: flex;
  gap: 30px;
  justify-content: center;
  position: relative;
}

li {
  position: relative;
}

a, span {
  text-decoration: none;
  color: white;
  font-size: 18px;
  font-weight: bold;
  transition: all 0.3s ease-in-out;
  cursor: pointer;
}

/* Highlight words on hover */
a:hover, span:hover {
  color: #ffcc00; /* Change to your desired highlight color */
}

.dropdown-toggle {
  display: flex;
  align-items: center;
  gap: 5px;
}

.dropdown-menu {
  z-index: 1000; /* Ensure dropdown is above other elements */
}

.arrow {
  display: inline-block;
  width: 0;
  height: 0;
  border-style: solid;
  transition: transform 0.3s ease-in-out;
}

.arrow-right {
  border-width: 5px 0 5px 8px;
  border-color: transparent transparent transparent white;
}

.arrow-down {
  border-width: 8px 5px 0 5px;
  border-color: white transparent transparent transparent;
}

/* Dropdown Menu Styling */
.dropdown-menu {
  position: absolute;
  top: 100%;
  left: 0;
  background: rgba(255, 255, 255, 0.95);
  border-radius: 5px;
  padding: 10px;
  display: none;
  flex-direction: column;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  opacity: 0;
  transform: translateY(-10px);
  transition: opacity 0.3s ease-in-out, transform 0.3s ease-in-out;
}

.dropdown-menu.show {
  display: flex;
  opacity: 1;
  transform: translateY(0);
}

.dropdown-menu li {
  padding: 5px 10px;
}

.dropdown-menu a {
  color: #007bff;
  transition: color 0.3s ease-in-out;
}

/* Highlight dropdown links on hover */
.dropdown-menu a:hover {
  color: #ff5733; /* Change to your desired highlight color */
}
</style>