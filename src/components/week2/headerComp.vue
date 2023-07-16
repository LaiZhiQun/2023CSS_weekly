<template lang="pug">
.rectangle4 
  .container.d-flex.aic
    .people
      img(src="https://github.com/hexschool/2022-web-layout-training/blob/main/2023week2/people.png?raw=true" alt="people")
    .title 
      p Hi
      p 
        | I’m a front-end
        br
        | developer
      p William
      .d-flex.jce
        RouterLink(to="#").aLink
          span contact me
            img(src="https://github.com/hexschool/2022-web-layout-training/blob/main/2023week2/arrow_outward.png?raw=true" alt="arrow")
</template>

<style scoped>
* {
  background-color: black;
  color: white;
}
.title {
  margin-left: 24px;
  width: 100%;
}
.title > p {
  font-size: 64px;
}
.title p:nth-child(3) {
  font-size: 128px;
  color: #00FFA3;
  text-align: end;
}
.aLink:hover {
  opacity: 0.8;
}
.aLink span {
  border: 1px solid white;
  background-color: #fff;
  color: black;
  border-radius: 28px;
  padding: 12px 24px;
}
.aLink span img {
  background-color: #fff;
  vertical-align: top;
  
}

</style>