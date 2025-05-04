<template>
  <div class="home">
    <div class="content">
      <img src="@/assets/profile.jpg" alt="Profile Image" class="profile-image" />
      <div class="text">
        <h1>Hello, I'm Chris!</h1>
        <p>
          I am a well regarded, and valued team player, working in the financial services sector for over 15 years, I am now
          seeking a new challenge following the succesful completion of a BEng in Software Engineering (Hons).
        </p>
          
        <p>
          I have proven and demonstrable stakeholder management, organisational and team working skills, capable of learning new abiltiies, 
          and have a lot of experience working within a demanding high pressure environment, all while studying and working full time.
        </p>
        
      </div>
    </div>
  </div>
</template>

<style scoped>
.home {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 80vh;
  text-align: center;
  opacity: 0;
  animation: fadeIn 1s ease-in-out forwards;
}

@keyframes fadeIn {
  from { opacity: 0; }
  to { opacity: 1; }
}


.content {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.profile-image {
  width: 150px;
  height: 150px;
  border-radius: 50%;
  object-fit: cover;
  margin-bottom: 20px;
  width: 150px;
  height: 150px;
  border-radius: 50%;
  object-fit: cover;
  margin-top: 20px;
  opacity: 0;
  animation: fadeInImage 1s ease-in-out 1s forwards;
}
/* Image Fade-in Animation (delayed) */
@keyframes fadeInImage {
  from { opacity: 0; }
  to { opacity: 1; }
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
</style>