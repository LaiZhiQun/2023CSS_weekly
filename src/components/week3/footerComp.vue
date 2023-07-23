<template lang="pug">
.footer 
  .content
    .info
      .info-detail
        ul
          li
            a(href='#') 首頁
          li
            a(href='#') 系列鏡框
          li
            a(href='#') 門市據點
          li
            a(href='#') 部落格
          li
            a(href='#') 常見問題
        .tel
          span.material-icons-outlined local_phone
          span
            a(href='#') 0800-000-000
        .email
          span.material-icons-outlined email
          span
            a(href='#') glasses@business.com
      .info-icon
        img(
          src='https://raw.githubusercontent.com/hexschool/2022-web-layout-training/main/week3-4/ic-social-fb.png',
          alt='fb'
        )
        img(
          src='https://raw.githubusercontent.com/hexschool/2022-web-layout-training/main/week3-4/ic_social_ig.png',
          alt='ig'
        )
        img(
          src='https://raw.githubusercontent.com/hexschool/2022-web-layout-training/main/week3-4/ic_social_line.png',
          alt='line'
        )
    hr
    .copyright
      .copyright-left
        p Copyright © 2020 Glasses.All rights reserved.
      .copyright-right
        p
          a(href='#') 隱私權政策
        p
          a(href='#') 服務條款
</template>

<style scoped>
.footer {
  margin-top: 1rem;
  background-color: #aa0601;
}
.content {
  max-width: 1296px;
  margin: 0 auto;
}
.info {
  display: flex;
  justify-content: space-between;
  padding-top: 45px;
}
.info-detail {
  padding: 15px 0;
}
.material-icons-outlined {
  color: white;
}
.tel {
  margin-top: 36px;
}
.email {
  margin-top: 8px;
}
.tel span,
.email span {
  font-size: 36px;
  margin-right: 22px;
}
.info-icon img {
  margin-left: 32px;
}
.copyright {
  display: flex;
  justify-content: space-between;
  color: white;
  padding: 32px 0;
}
.copyright-left {
  margin-bottom: 8px;
}
.copyright-right {
  display: flex;
}
.copyright-right p {
  margin-left: 48px;
  margin-bottom: 8px;
}
ul {
  display: flex;
}
a {
  color: white;
}
a:hover {
  opacity: 0.8;
}
img {
  width: 48px;
  height: 48px;
}
li a {
  margin-right: 48px;
}
hr {
  opacity: 0.5;
}

@media (max-width: 576px) {
  .content {
    padding: 0 14px;
  }
  .info {
    padding-top: 0px;
  }
  .info-detail {
    padding: 0;
  }
  .info-detail ul {
    display: none;
  }
  .info-icon {
    margin-top: 20px;
    margin-bottom: 24px;
  }
  .info-icon img {
    width: 24px;
    height: 24px;
    margin-left: 8px;
  }
  .tel {
    margin-top: 24px;
  }
  .tel span,
  .email span {
    font-size: 16px;
    margin-right: 8px;
  }
  .copyright {
    display: block;
    padding: 0;
    padding-bottom: 16px;
  }
  .copyright-right {
    display: block;
  }
  .copyright-right p {
    margin-left: 0px;
    margin: 16px 0;
  }
  hr {
    margin-top: 24px;
    margin-bottom: 16px;
  }
}
</style>