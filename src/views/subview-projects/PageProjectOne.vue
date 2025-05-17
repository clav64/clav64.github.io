<template>
  <div class="news-container">
    <h1>🔥 Trending on Hacker News</h1>

    <!-- Mobile Swiper Carousel -->
    <div v-if="isMobile">
      <swiper :slidesPerView="1" :spaceBetween="10" pagination>
        <swiper-slide v-for="story in stories.slice(0, 4)" :key="story.id">
          <img :src="story.thumbnail" alt="Thumbnail" class="carousel-image" />
          <h2><a :href="story.url" target="_blank">{{ story.title }}</a></h2>
          <p class="story-meta">By <strong>{{ story.by }}</strong> | Score: <strong>{{ story.score }}</strong></p>
        </swiper-slide>
      </swiper>
    </div>
    <!-- Grid Layout for Remaining Stories -->
    <div class="news-cards">
      <a v-for="story in stories.slice(isMobile ? 4 : 0)"
         :key="story.id"
         :href="story.url"
         target="_blank"
         :class="{ visited: visitedStories.includes(story.id) }"
         @click="markAsVisited(story.id)"
         class="news-card">
        <img :src="story.thumbnail" alt="Thumbnail" class="news-image" />
        <h3>{{ story.title }}</h3>
        <p class="story-meta">By <strong>{{ story.by }}</strong> | Score: <strong>{{ story.score }}</strong></p>
      </a>
    </div>

    <!-- Footer -->
    <footer class="site-footer">
      <p>Data sourced from <a href="https://news.ycombinator.com/" target="_blank">Hacker News</a>.</p>
    </footer>
  </div>
</template>

<script>
import { Swiper, SwiperSlide } from "swiper/vue";
import "swiper/css";
import "swiper/css/pagination";

async function fetchThumbnail(url) {
  try {
    const response = await fetch(url);
    if (!response.ok) throw new Error(`HTTP error! Status: ${response.status}`);

    const html = await response.text();
    const doc = new DOMParser().parseFromString(html, "text/html");
    const ogImage = doc.querySelector('meta[property="og:image"]')?.content;

    return ogImage || `https://picsum.photos/400/300?random=${Date.now()}`;
  } catch (error) {
    console.error("Thumbnail fetch error:", error);
    return `https://picsum.photos/400/300?random=${Date.now()}`;
  }
}

export default {
  components: { Swiper, SwiperSlide },
  data() {
    return {
      stories: [],
      isMobile: window.innerWidth < 768,
      visitedStories: JSON.parse(localStorage.getItem("visitedStories")) || [],
    };
  },
  mounted() {
    window.addEventListener("resize", this.checkMobile);
    this.fetchStories();
  },
  methods: {
    checkMobile() {
      this.isMobile = window.innerWidth < 768;
    },
    async fetchStories() {
      const topStoryIds = await fetch("https://hacker-news.firebaseio.com/v0/topstories.json").then(res => res.json());
      const top12Ids = topStoryIds.slice(0, 12);

      const storyPromises = top12Ids.map(async (id) => {
        const story = await fetch(`https://hacker-news.firebaseio.com/v0/item/${id}.json`).then(res => res.json());
        story.thumbnail = story.url ? await fetchThumbnail(story.url) : "default-thumbnail.jpg";
        return story;
      });

      this.stories = await Promise.all(storyPromises);
    },
    markAsVisited(storyId) {
      if (!this.visitedStories.includes(storyId)) {
        this.visitedStories.push(storyId);
        localStorage.setItem("visitedStories", JSON.stringify(this.visitedStories));
      }
    }
  }
};
</script>

<style>
.news-container {
  max-width: 900px;
  margin: auto;
  text-align: center;
}

h1 {
  font-size: 2rem;
  margin-bottom: 20px;
  color: #333;
}

.news-cards {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(140px, 1fr));
  gap: 10px;
}

.news-card {
  display: flex;
  flex-direction: column;
  background: #fff;
  padding: 10px;
  border-radius: 12px;
  box-shadow: 2px 2px 10px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.news-card:hover {
  transform: translateY(-5px) scale(1.02);
  box-shadow: 6px 6px 20px rgba(0, 0, 0, 0.2);
}

.news-image {
  width: 100%;
  height: 100px;
  object-fit: cover;
}

.carousel-image {
  width: 100%;
  height: 200px;
  object-fit: cover;
  border-radius: 12px;
}

.visited {
  opacity: 0.6;
  filter: grayscale(80%);
}

.site-footer {
  margin-top: 40px;
  padding: 15px;
  text-align: center;
  background: #f8f9fa;
  border-top: 1px solid #ddd;
  font-size: 0.9rem;
}

.site-footer a {
  color: #0077cc;
  text-decoration: none;
}

.site-footer a:hover {
  text-decoration: underline;
}

@media (min-width: 768px) {
  .news-cards {
    grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  }
}
</style>