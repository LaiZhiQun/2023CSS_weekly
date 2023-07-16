<template lang="pug">
.project 
  .container
    p.fs-64.text-center.ms-title.mb-16 My Projects
    .d-flex
      .rectangle10
        img(src="https://github.com/hexschool/2022-web-layout-training/blob/main/2023week2/Rectangle%2010.png?raw=true" alt="rectangle10")
      .my-project.ms-24 
        .frame4.mb-24 
          .frame3.d-flex
            img(src="https://github.com/hexschool/2022-web-layout-training/blob/main/2023week2/Rectangle%2015.png?raw=true" alt="rectangle15")
            .d-flex.flex-direction-column.jcsb.ms-24
              p I've worked on a variety of websites, including e-commerce sites, blogs, and landing pages. I take pride in creating clean, efficient, and user-friendly code.
              .d-flex.jcs
                RouterLink(to="#").aLink
                  span contact me
                    img(src="https://github.com/hexschool/2022-web-layout-training/blob/main/2023week2/arrow_outward-white.png?raw=true" alt="arrow")
        .frame5 
          img(src="https://github.com/hexschool/2022-web-layout-training/blob/main/2023week2/Rectangle%2014.png?raw=true" alt="rectangle14")
          img.ms-24(src="https://github.com/hexschool/2022-web-layout-training/blob/main/2023week2/Rectangle%2029.png?raw=true" alt="rectangle29")
</template>

<style scoped>
.fs-64 {
  font-size: 64px;
}
.ms-24 {
  margin-left: 24px;
}
.mb-24 {
  margin-bottom: 24px;
}
.mb-16 {
  margin-bottom: 16px;
}
.project {
  padding: 160px 0;
}
.ms-title {
  margin-left: 312px;
}
.text-center {
  text-align: center;
}
.flex-direction-column {
  flex-direction: column;
}
.frame3 a {
  border: 1px solid black;
  background-color: black;
  color: white;
  border-radius: 28px;
  padding: 12px 24px;
}

</style>