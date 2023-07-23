<template lang="pug">

Nav
Footer
</template>

<script setup>
// eslint-disable-next-line no-unused-vars
import Nav from '@/components/week3/navComp.vue'
// eslint-disable-next-line no-unused-vars
import Footer from '@/components/week3/footerComp.vue'
</script>

<style>
.container {
  max-width: 1296px;
  margin: 0 auto;
}

.d-flex {
  display: flex;
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