<template>
  <div class="home">
    <appHeader></appHeader>
    <rank></rank>
    <hotPlayList></hotPlayList>
    <dayList></dayList>
    <appFooter></appFooter>
  </div>
</template>
<script>
import hotPlayList from "../components/HotPlayList";
import rank from "../components/Rank.vue";
import dayList from "../components/DayList.vue";
import appHeader from "../views/Header.vue";
import appFooter from "../views/Footer.vue";
import { mapMutations } from "vuex";
export default {
  components: { hotPlayList, dayList, rank, appHeader, appFooter },
  methods: {
    ...mapMutations(["SET_YTSONGSHOW", "SET_YTSONGID"])
  },
  //把YT隱藏並清除ID
  created() {
    this.SET_YTSONGID("");
    this.SET_YTSONGSHOW(false);
  }
};
</script>
<style scoped>
.home {
  background-color: #080a1e;
}
</style>
