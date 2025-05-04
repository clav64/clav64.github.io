<template>
  <div class="contact">
    <div class="content">
      <div class="text">
        <p>If you have any questions or would like to get in touch, feel free to reach out!</p>
      </div>
      <h3>Contact Me</h3>
      <p>
        <a href="mailto:github@clav64.anonaddy.me" target="_blank">
          <i class="fas fa-envelope"></i> Email: github@clav64.anonaddy.me
        </a>
      </p>
      <p>
        <a href="https://signal.me/#p/holdmyfinger.64" target="_blank">
          <i class="fab fa-signal"></i> Signal: holdmyfinger.64
        </a>
      </p>
      <p>
        <a href="https://discord.com/users/holdmyfinger" target="_blank">
          <i class="fab fa-discord"></i> Discord: holdmyfinger
        </a>
      </p>
    </div>
  </div>
</template>

<style scoped>
.contact {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 80vh;
  text-align: center;
  opacity: 0;
  animation: fadeIn 1s ease-in-out forwards;
}

@keyframes fadeIn {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}

.content {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.text {
  max-width: 550px;
}

h1 {
  font-size: 2rem;
  color: #007bff;
}

p {
  font-size: 1.2rem;
  color: #444;
}

a {
  text-decoration: none;
  color: #007bff;
  transition: color 0.3s ease-in-out;
}

a:hover {
  color: #0056b3;
}

i {
  margin-right: 8px;
}
</style>