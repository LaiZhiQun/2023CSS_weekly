<template lang="pug">
.container
  .home
    RouterLink(to='/week2') week2 作業
    br
    RouterLink(to='/week3') week3 作業
  </template>

<style scoped>
.container {
  width: 1296px;
  margin: 0 auto;
}
.home {
  text-align: center;
  margin-top: 10rem;
}
.home a {
  display: block;
  padding: 1rem;
  text-decoration: none;
  font-size: 50px;
}
.home a:hover {
  color: rgb(109, 216, 109);
}
</style>