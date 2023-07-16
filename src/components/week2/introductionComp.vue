<template lang="pug">
.introduction 
  .container.d-flex.jcsb
    .section-left.w-526
      p Introduction
      p Hi, I'm William Lee, a Front-End Developer with a passion for building beautiful and responsive websites that provide an optimal user experience.
      div 
        img(src="https://github.com/hexschool/2022-web-layout-training/blob/main/2023week2/sparkle-sm.png?raw=true" alt="sparkle-sm")
        img(src="https://github.com/hexschool/2022-web-layout-training/blob/main/2023week2/sparkle-sm.png?raw=true" alt="sparkle-sm")
        img(src="https://github.com/hexschool/2022-web-layout-training/blob/main/2023week2/sparkle-sm.png?raw=true" alt="sparkle-sm")
    .section-right.d-flex.jcsb
      img.me-24(src="https://github.com/hexschool/2022-web-layout-training/blob/main/2023week2/sparkle.png?raw=true" alt="sparkle")
      img.me-24(src="https://github.com/hexschool/2022-web-layout-training/blob/main/2023week2/photographer.png?raw=true" alt="photographer")
      img(src="https://github.com/hexschool/2022-web-layout-training/blob/main/2023week2/people-2.png?raw=true" alt="people-2")
</template>

<style scoped>
* {
  background-color: black;
  color: white;
}

.section-left p:nth-child(1) {
  font-size: 64px;
}
.section-left p {
  font-size: 24px;
}
.w-526 {
  width: 526px;
}
.me-24 {
  margin-right: 24px;
}
</style>