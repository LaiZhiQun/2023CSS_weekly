<template lang="pug">
.home
  RouterLink(to='/week2') week2 作業
</template>

<style scoped>
body {
  display: flex;
  justify-content: center;
  align-items: center;
}
.home a {
  padding: 1rem;
  text-decoration: none;
  font-size: 25px;
}
.home a:hover {
  color: rgb(109, 216, 109);
}
</style>