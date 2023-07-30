<template lang="pug">
nav
  .header
    h1
      img(src="https://raw.githubusercontent.com/hexschool/2022-web-layout-training/main/week3-4/logo-white.png" alt="h1")
    ul
      li
        a(href="#") 系列鏡框
        RouterLink(to='/week4Branches') 門市據點
      li
        a(href="#") 部落格
        RouterLink(to='/week4Problems') 常見問題
</template>

<style scoped>
nav {
  background-color: #aa0601;
}
.header {
  max-width: 1296px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 16px 0;
}
h1 {
  margin: 0 -12px;
}
ul {
  display: flex;
  justify-content: space-between;
  margin: 0 -12px;
}
li {
  display: flex;
}
a {
  color:white;
  font-size: 20px;
  display: block;
  margin-left: 64px;
}
a:hover {
  opacity: 0.8;
}
img {
  width: 80px;
  height: 49px;
}
@media (max-width:576px) {
  .header {
    flex-direction: column;
    align-items: start;
    padding-bottom: 0;
  }
  .header h1 {
    padding-left: 12px;
    padding-bottom: 16px;
    margin: 0;
  }
  ul {
    flex-wrap: wrap;
    width: 100%;
    justify-content: center;
    margin: 0;
  }
  li {
    width: 100%;
    justify-content: center;
  }
  a {
    margin-left: 0;
    text-align: center;
    padding: 12px;
    width: 50%;
    border: 1px solid rgba(255, 255, 255, 0.6);
  }
}
</style>