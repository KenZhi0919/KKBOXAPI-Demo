<template>
  <header>
    <div class="headerTitle">
      <p>KKBOX API Sample</p>
      <a href data-toggle="modal" data-target="#exampleModalLong">立即試聽</a>
    </div>

    <!-- Modal -->
    <div
      class="modal fade"
      id="exampleModalLong"
      tabindex="-1"
      role="dialog"
      aria-labelledby="exampleModalLongTitle"
      aria-hidden="true"
    >
      <div class="modal-dialog" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="exampleModalCenterTitle">立即試聽</h5>
            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div class="modal-body">
            <iframe
              frameborder="0"
              src="https://widget.kkbox.com/v1/?id=9XQCjPMSUFThOaPiaQ&type=playlist&terr=TW}&lang=TC"
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  </header>
</template>

<script>
export default {};
</script>
<style scoped>
.title {
  width: 100px;
}
header {
  background-image: linear-gradient(rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.75)),
    url("https://images.alphacoders.com/995/995676.jpg");
  height: 550px;
  background-size: cover;
  background-position: bottom;
  margin-bottom: 20px;
  display: flex;
  align-items: center;
  text-align: center;
}
.headerTitle {
  margin: auto;
}
p {
  color: white;
  font-size: 70px;
  margin-bottom: 40px;
}
a {
  font-size: 18px;
  letter-spacing: 3px;
  border: solid;
  border-radius: 30px;
  padding: 12px 50px;
  background: linear-gradient(to bottom right, #7a3d96, #e331a0);
  color: white;
}
a:hover {
  color: white;
  text-decoration: none;
  background: linear-gradient(to bottom right, #009bdf, #009bdf);
}
.modal-content {
  overflow: hidden;
}
.modal-header {
  background-color: #e331a0;
}
.modal-body {
  padding: 0;
  margin: -10px;
}
h5 {
  font-weight: bold;
  font: 30px;
  color: white;
  letter-spacing: 2px;
}
iframe {
  width: 100%;
  height: 500px;
  border: 0;
}
@media (min-width: 576px) and (max-width: 767.98px) {
  p {
    font-size: 60px;
  }
}

@media (max-width: 575.98px) {
  p {
    font-size: 50px;
  }
}
</style>
