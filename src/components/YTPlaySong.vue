<template>
  <div class>
    <div class="icon" @click="hideYTSong">
      <font-awesome-icon icon="times-circle" />
    </div>
    <div>
      <object type="text/html" :data="ytlink"></object>
    </div>
  </div>
</template>
<script>
import { mapMutations } from "vuex";
export default {
  methods: {
    ...mapMutations(["SET_YTSONGSHOW"]),
    hideYTSong() {
      this.SET_YTSONGSHOW(false);
    }
  },
  computed: {
    ytlink() {
      return `https://www.youtube.com/embed/${this.$store.state.YTSongID}?autoplay=1&theme=light`;
    }
  }
};
</script>
<style scoped>
object {
  height: 250px;
  width: 350px;
  position: fixed;
  bottom: 10px;
  right: 20px;
  z-index: 999;
  border-radius: 5px;
  opacity: 0.9;
}

font-awesome-icon {
  color: yellow;
  position: fixed;
  bottom: 10px;
  right: 20px;
  z-index: 1000;
}
.icon {
  color: white;
  position: fixed;
  bottom: 235px;
  right: 25px;
  z-index: 1000;
}
</style>
