import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    token: 'xueL7rjb0dGlD-GdJXx4GA==',
    config: {
      headers: {
        Authorization: `Bearer QHpj9vWob4AO4KizHubuwg==`
      }
    },
    YTSongShow: false,
    YTSongTitle: '',
    YTSongID: '',
    YTDayListTitle: '',
    YTDayListID: []
  },
  getters: {},
  mutations: {
    SET_YTSONGSHOW(state, show) {
      state.YTSongShow = show;
    },
    SET_YTSONGTITLE(state, title) {
      state.YTSongTitle = title;
    },
    SET_YTSONGID(state, ID) {
      state.YTSongID = ID;
    },
    SET_YTDAYLISTTITLE(state, title) {
      state.YTDayListTitle = title;
    },
    SET_YTDAYLISTID(state, ID) {
      state.YTDayListID = ID;
    }
  },
  actions: {},
  modules: {}
});
