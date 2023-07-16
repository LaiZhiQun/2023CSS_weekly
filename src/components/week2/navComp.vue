<template lang="pug"> 
nav
  ul.d-flex.container
    li 
      RouterLink(to="#") WILLIAM LEE
    li 
      RouterLink(to="#") BASED IN TAIWAN
    li 
      RouterLink(to="#")
        | CURRENTLY FRONT END
        br
        | ENGINEER AT HEXSCHOOL
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
  padding-top: 40px;
}
</style>
