<script setup></script>

<template>
  <div class="footer">
    <div class="number">
      <p>Questions? Call 1-857-039-732 ( Not a real number)</p>
    </div>

    <div class="links">
      <a href="">FAQ</a>
      <a href="">Help Center</a>
      <a href="">Account</a>
      <a href="">Media Center</a>
      <a href="">Investor Relations</a>
      <a href="">Jobs</a>
      <a href="">Redeem Gift Cards</a>
      <a href="">Buy Gift Cards</a>
      <a href="">Ways to Watch</a>
      <a href="">Terms of Use</a>
      <a href="">Privacy</a>
      <a href="">Cookie Preferences</a>
      <a href="">Corporate Information</a>
      <a href="">Contact Us</a>
      <a href="">Speed Test</a>
      <a href="">Legal Notices</a>
      <a href="">Only on Not Netflix</a>
    </div>
  </div>
</template>

<style scoped>
.number {
  text-align: center;
}
.links {
  display: grid;
  position: relative;
  left: 60px;
  grid-template-columns: 200px 200px 200px 200px;
  grid-template-rows: 30px 30px 30px 30px;
  font-size: 12px;
}
.footer {
  color: aliceblue;
  display: grid;
  justify-content: center;

  background-color: rgb(0, 0, 0);
  width: 100vw;
  height: 45vh;
}
a {
  color: rgb(251, 250, 246);
}
a:link {
  text-decoration: none;
}
</style>
