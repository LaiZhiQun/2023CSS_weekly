<template lang="pug">
p week2
Nav
Header
Introduction
AboutMe
Contact
Project
Footer
</template>

<script setup>
// eslint-disable-next-line no-unused-vars
import Nav from '@/components/week2/navComp.vue'
// eslint-disable-next-line no-unused-vars
import Header from '@/components/week2/headerComp.vue'
// eslint-disable-next-line no-unused-vars
import Introduction from '@/components/week2/introductionComp.vue'
// eslint-disable-next-line no-unused-vars
import AboutMe from '@/components/week2/aboutMeComp.vue'
// eslint-disable-next-line no-unused-vars
import Contact from '@/components/week2/contactComp.vue'
// eslint-disable-next-line no-unused-vars
import Project from '@/components/week2/projectComp.vue'
// eslint-disable-next-line no-unused-vars
import Footer from '@/components/week2/footerComp.vue'

</script>

<style>
* {
  font-family: 'Bruno Ace SC', cursive;
  text-decoration: none;
  line-height: 1.5;
  box-sizing: border-box;
}
.d-flex {
  display: flex;
}
.container {
  width: 1296px;
  margin: 0 auto;
}
/* justify-content */
.jcc {
  justify-content: center;
}
.jcs {
  justify-content: start;
}
.jce {
  justify-content: end;
}
.jcsb {
  justify-content: space-between;
}
.jcsa {
  justify-content: space-around;
}
.jcse {
  justify-content: space-evenly;
}
/* align-items */
.aic {
  align-items: center;
}
.ais {
  align-items: start;
}
.aie {
  align-items: end;
}
</style>