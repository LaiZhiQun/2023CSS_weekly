<template lang="pug"> 
nav
  ul.d-flex.container.aic
    li 
      RouterLink(to="#") WILLIAM LEE
    li 
      RouterLink(to="#") BASED IN TAIWAN
    li 
      RouterLink(to="#") CURRENTLY FRONT END ENGINEER AT HEXSCHOOL
    li 
      RouterLink(to="#") CONTACT ME
</template>

<style lang="scss" scoped>
* {
  background-color: black;
  color: white;
}
a:hover {
  color: #D1D1D1
}
ul {
  justify-content: space-between;
  padding-bottom: 24px;
  padding-top: 40px;
}
</style>
