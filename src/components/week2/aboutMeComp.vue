<template lang="pug">
.about-me  
  .container.d-flex.jcsb.aic
    .card
      .d-flex
        .card-1.border.wd-50.me-24.mb-24 
          .text-padding
            p 01
            p Attention to Detail
            p Meticulous code analysis and optimization.
        .card-2.border.wd-50.mb-24 
          .text-padding
            p 02
            p Adaptability
            p Swift learning of new technologies.
      .d-flex
        .card-3.border.wd-50.me-24 
          .text-padding
            p 03
            p Problem Solver
            p Identifying and resolving issues.
        .card-4.border.wd-50 
          .text-padding
            p 04
            p Team Player
            p Collaborates and shares ideas.
    .title
      p About Me
      p With over 5 years of experience, I'm proficient in HTML, CSS, JavaScript, jQuery, and React. I have a strong understanding of user experience design and accessibility. I'm always learning new technologies and techniques to stay up-to-date in the field.
</template>

<style scoped>
.border {
  border: 1px solid rgba(128, 128, 128, 0.1);
  box-shadow: 0px 2px 10px rgba(0, 0, 0, 0.1);
}
.wd-50 {
  width: 50%;
}
.me-24 {
  margin-right: 24px;
}
.mb-24 {
  margin-bottom: 24px;
}
.about-me {
  padding: 160px 0;
}
.card {
  width: 636px;
}
.text-padding {
  padding:16px
}
.text-padding p:nth-child(1), p:nth-child(2) {
  font-size: 20px;
}
.title {
  width: 526px;
}
.title p:nth-child(1) {
  font-size: 64px;
  margin-bottom: 36px;
}
.title p:nth-child(2) {
  font-size: 24px;
}
</style>