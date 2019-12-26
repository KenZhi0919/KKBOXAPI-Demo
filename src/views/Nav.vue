<template>
  <nav class="navbar navbar-expand-lg navbar-light">
    <div class="container">
      <router-link class="sample" :to="{ name: 'Home' }">KKBOX Sample</router-link>
      <button
        class="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarTogglerDemo02"
        aria-controls="navbarTogglerDemo02"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>

      <div class="collapse navbar-collapse" id="navbarTogglerDemo02">
        <ul class="navbar-nav mr-auto mt-2 mt-lg-0"></ul>

        <div class="form-inline my-2 my-lg-0">
          <input
            class="form-control mr-sm-2"
            type="text"
            placeholder="請輸入關鍵字"
            v-model.trim="text"
            @keydown.enter="search"
          />
        </div>
      </div>
    </div>
  </nav>
</template>
<script>
export default {
  data() {
    return {
      apiData: [],
      text: ""
    };
  },
  methods: {
    //跳入SearchResult頁面
    search() {
      this.$router.push({
        path: "/SearchResult",
        query: { text: this.text }
      });
      this.text = "";
    }
  }
};
</script>

<style scoped>
.navbar {
  margin: 0;
}
nav {
  background-color: #e331a0;
}

nav .sample {
  text-decoration: none;
  color: white;
  font-size: 23px;
}
.container {
  padding: 0;
}
</style>