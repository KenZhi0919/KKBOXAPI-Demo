<template>
  <div class="container">
    <div class="row title">
      <h2 class="font-weight-bold">最新歌曲</h2>
    </div>

    <div
      class="block row"
      v-for="(item, index) in rankList"
      :key="item.description"
      @click="showYT(item.name)"
    >
      <div class="rank col-1">
        <p>{{ index + 1 }}</p>
      </div>
      <div class="img-block col-auto">
        <img :src="item.album.images[0].url" alt />
      </div>
      <div class="description col-6">
        <p class="songName">{{ item.name }}</p>
        <p class="artist">{{ item.album.artist.name }}</p>
      </div>
    </div>
    <YTPlaySong v-if="this.$store.state.YTSongShow"></YTPlaySong>
  </div>
</template>
<script>
import YTPlaySong from "../components/YTPlaySong.vue";
import { mapMutations } from "vuex";
export default {
  components: {
    YTPlaySong
  },
  data() {
    return {
      rankList: [],
      songTitle: "",
      songID: ""
    };
  },
  methods: {
    ...mapMutations(["SET_YTSONGSHOW", "SET_YTSONGTITLE"]),
    getYTData() {
      this.$http
        .get(
          `https://www.googleapis.com/youtube/v3/search?key=AIzaSyDaIXsoNNqYiDFfKQeV_tgBsDbk4uSJSHg&part=snippet&type=video&q=${this.$store.state.YTSongTitle}`
        )
        .then(res => {
          this.$store.state.YTSongID = res.data.items[0].id.videoId;
        });
    },
    showYT(name) {
      this.SET_YTSONGSHOW(true);
      this.SET_YTSONGTITLE(name);
      this.getYTData();
    }
  },
  created() {
    this.$http
      .get(
        "https://api.kkbox.com/v1.1/charts/LZPhK2EyYzN15dU-PT/tracks?territory=TW&limit=5",
        this.$store.state.config
      )
      .then(res => {
        this.rankList = res.data.data;
      });
  }
};
</script>
<style scoped>
h2 {
  color: #e331a0;
  font-size: 35px;
}
.title {
  border-bottom: 1px solid #0fe7ef;
  padding: 20px 0;
}

.block {
  border-bottom: 1px solid #0fe7ef;
}
.block:hover {
  background-color: rgba(44, 44, 44, 0.356);
  cursor: pointer;
}
.rank {
  font-size: 40px;
  font-weight: bold;
  font-family: Kanit;
  display: flex;
  justify-content: center;
  align-self: center;
}

.img-block {
  display: flex;
  justify-content: center;
  align-self: center;
}
.img-block img {
  height: 100px;
  width: 100px;
}
.description {
  padding-top: 24px;
}

.songName {
  width: 100%;
  font-weight: bold;
  font-size: 30px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
.artist {
  font-size: 20px;
}
p {
  color: white;
}
@media (min-width: 768px) and (max-width: 991.98px) {
  .artist {
    font-size: 18px;
  }
  .songName {
    font-weight: bold;
    font-size: 28px;
  }
  .img-block img {
    height: 90px;
    width: 90px;
  }
}
@media (min-width: 576px) and (max-width: 767.98px) {
  .artist {
    font-size: 15px;
  }
  .songName {
    font-weight: bold;
    font-size: 23px;
  }
  .img-block img {
    height: 80px;
    width: 80px;
  }

  .rank {
    font-size: 35px;
  }
}
@media (max-width: 575.98px) {
  .artist {
    font-size: 14px;
  }
  .songName {
    font-weight: bold;
    font-size: 22px;
  }
  .img-block img {
    height: 75px;
    width: 75px;
  }
  h2 {
    font-size: 30px;
  }
  .rank {
    font-size: 32px;
  }
  .container {
    padding: 0 40px;
  }
}
</style>
