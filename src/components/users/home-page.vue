<template>
  <el-container class="container">
    <div class="navbar">
      <img class="logo" src="../../assets/logo.png"/>
      <nav>
        <ul>
          <li><a href="#">HOME</a></li>
          <li><a href="#">REGION</a></li>
          <li><a href="#">ABOUT</a></li>
        </ul>
      </nav>
      <img class="menu-icon" src="../../assets/menu.png"/>
    </div>
    <div class="row">
      <div class="col">
        <h1>ArtMind</h1>
        <p>
          Until 2020, no other member state of the United Nations had ever officially recognized Moroccan sovereignty
          over parts of Western Sahara.[14][15][16] In 2020, the United States recognized Moroccan sovereignty over
          Western Sahara in exchange for Moroccan normalization of relations with
          Israel.
        </p>
        <router-link to="/api/admin/login" tag="button">Start</router-link>
      </div>
      <div class="col">
        <div class="card1 card">
          <h5>Western Desert</h5>
          <p>no other member state of the United Nations had ever officially recognized</p>
        </div>
        <div class="card2 card">
          <h5>AI Bagawat</h5>
          <p>no other member state of the United Nations had ever officially recognized</p>
        </div>
        <div class="card3 card">
          <h5>Pyramid of Giza</h5>
          <p>no other member state of the United Nations had ever officially recognized</p>
        </div>
        <div class="card4 card">
          <h5>Kalahari Desert</h5>
          <p>no other member state of the United Nations had ever officially recognized</p>
        </div>
      </div>
    </div>
  </el-container>
</template>

<script>
export default {
  data () {
    return {}
  }
}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,200;1,100&display=swap');

* {
  margin: 0;
  padding: 0;
  font-family: 'Poppins', sans-serif;
}

.container {
  width: 100%;
  height: 100vh;
  background-image: linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.3)), url(../../assets/bg.jpg);
  background-position: center;
  background-size: cover;
  padding-left: 8%;
  padding-right: 8%;
  box-sizing: border-box;
  position:absolute;left:0;right:0;top:0;bottom:0;
  overflow:auto;
  display: block;
}

.navbar {
  height: 12%;
  display: flex;
  align-items: center;
}

.logo {
  width: 50px;
  cursor: pointer;
}

.menu-icon {
  width: 30px;
  cursor: pointer;
  margin-left: 40px;
}

nav {
  flex: 1;
  text-align: right;
}

nav ul li {
  list-style: none;
  display: inline-block;
  margin-left: 60px;
}

nav ul li a {
  text-decoration: none;
  color: #fff;
  font-size: 13px;
}

.row {
  display: flex;
  height: 88%;
  align-items: center;
}

.col {
  flex-basis: 50%;
  margin-left: 100px;
}

h1 {
  color: #fff;
  font-size: 100px;
}

p {
  color: #fff;
  font-size: 11px;
  line-height: 15px;
}

button {
  width: 180px;
  color: #000;
  font-size: 12px;
  padding: 12px 0;
  background: #fff;
  border: 0;
  border-radius: 20px;
  outline: none;
  margin-top: 30px;
  cursor: pointer;
}

.card {
  width: 240px;
  height: 230px;
  display: inline-block;
  border-radius: 10px;
  padding: 15px 25px;
  box-sizing: border-box;
  cursor: pointer;
  margin: 10px 15px;
  background-position: center top;
  background-size: cover;
  transition: transform 0.5s;
}

.card1 {
  background-image: url(../../assets/133.jpg);
}

.card2 {
  background-image: url(../../assets/5.jpg);
}

.card3 {
  background-image: url(../../assets/6.jpg);
}

.card4 {
  background-image: url(../../assets/11.jpg);
}

.card:hover {
  transform: translateY(-10px);
}

h5 {
  color: #fff;
  text-shadow: 0 0 5px #999;
}

.card p {
  text-shadow: 0 0 5px #000;
  font-size: 8px;
}
</style>
