<template>
  <div class="container">
    <div class="title row">
      <h2 class="font-weight-bold">熱門歌單</h2>
    </div>
    <div class="row">
      <div
        class="card mb-2"
        style="width: 18rem;"
        v-for="item in hotList"
        :key="item.description"
        @click="goToYTPlayer(item.id, item.title)"
      >
        <img :src="item.images[0].url" class="card-img-top" />
        <div class="card-body p-2">
          <p class="card-text text-center">{{ item.title }}</p>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { mapMutations } from "vuex";
export default {
  data() {
    return {
      hotList: ""
    };
  },
  methods: {
    ...mapMutations(["SET_YTDAYLISTTITLE", "SET_YTDAYLISTID"]),
    goToYTPlayer(daylistID, daylistTitle) {
      this.SET_YTDAYLISTID(daylistID);
      this.SET_YTDAYLISTTITLE(daylistTitle);
      this.$router.push({
        path: "/YTPlayer"
      });
    }
  },
  created() {
    this.$http
      .get(
        "https://api.kkbox.com/v1.1/new-hits-playlists?territory=TW",
        this.$store.state.config
      )
      .then(res => {
        this.hotList = res.data.data;
      });
  }
};
</script>
<style scoped>
.title {
  padding: 50px 0 20px 0;
}
.link {
  text-decoration: none;
}
.card {
  max-width: 23%;
  margin-right: 2%;
  cursor: pointer;
  background: none;
  border: 5px solid transparent;
  opacity: 1;
  -webkit-transition: 0.3s ease-in-out;
  transition: 0.3s ease-in-out;
}
.card:hover {
  opacity: 0.5;
}
.card-body {
  background: #733195;
}
.card-text {
  font-weight: bold;
  font-size: 16px;
  color: white;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI",
    "Microsoft JhengHei", Roboto, "Helvetica Neue", Arial, sans-serif;
}

h2 {
  color: #e331a0;
}
@media (max-width: 575.98px) {
  h2 {
    font-size: 30px;
  }
  .container {
    padding: 0 40px;
  }
  .card-text {
    font-size: 13px;
  }
}
</style>
