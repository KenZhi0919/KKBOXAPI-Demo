<template>
  <footer>
    <div class="container">
      <div class="row">
        <div class="col-sm-4">
          <h3>網站介紹</h3>
          <p>
            此作品以 Vue.js 為框架並使用 KKBOX API 和 YouTube Data API
            進行網站的呈現及音樂的播放，僅作為作品上的使用
          </p>
        </div>
        <div class="col-sm-4">
          <h3>主要使用技術</h3>
          <ul>
            <li>KKBOX OPEN API、YouTube Data API</li>
            <li>Vue Cli 3、Vuex</li>
            <li>VueRouter、Vue Components</li>
            <li>Bootstrap、RWD</li>
            <li>JavaScript ES6</li>
          </ul>
        </div>
        <div class="col-sm-4 artist">
          <h3>作者</h3>
          <a href="https://github.com/KenZhi0919" target="_blank">陳健誌 KenZhi</a>
        </div>
      </div>
    </div>
  </footer>
</template>
<script>
export default {};
</script>
<style scoped>
footer {
  margin-top: 40px;
}
.container {
  padding: 20px;
}
a {
  color: white;
}
a:hover {
  color: gray;
  text-decoration: none;
}
footer {
  background-color: #1f1057;
  color: white;
}
ul {
  margin: 0;
  padding: 0;
  list-style: none;
}
ul li:before {
  content: "✓";
  margin-right: 4px;
}

h3 {
  font-size: 24px;
  font-weight: bold;
}
h3:after {
  display: block;
  height: 1.2px;
  background-color: white;
  content: " ";
  width: 100%;
  margin: 18px 0;
}
@media (max-width: 575.98px) {
  .col-sm-4 {
    padding-top: 10px;
  }
  .artist {
    padding-top: 15px;
  }
  h3 {
    font-size: 20px;
  }
  h3:after {
    margin: 10px 0;
  }
  li,
  p,
  a {
    font-size: 15px;
  }
}

@media (min-width: 576px) and (max-width: 767.98px) {
  h3 {
    font-size: 20px;
  }
}

@media (min-width: 768px) and (max-width: 991.98px) {
  h3 {
    font-size: 22px;
  }
}
</style>
