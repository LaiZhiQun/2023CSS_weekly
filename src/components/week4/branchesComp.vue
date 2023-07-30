<template lang="pug">
.container
  h2 門市據點
  .area
    label(for='地區選擇') 選擇地區
    select 選擇地區(name='選擇地區')
      option(value='台北市') 台北市
      option(value='台中市') 台中市
      option(value='高雄市') 高雄市
  .branchesInfo 
    |
    |
    ul
      li
        img(
          src='https://github.com/hexschool/2022-web-layout-training/blob/main/week3-4/store-1.png?raw=true',
          alt='中山'
        )
        .description
          h3 台北中山旗艦店
          .detail
            p
              span.material-symbols-outlined call
              span 電話：(02)000-1234
            p
              span.material-symbols-outlined schedule
              span 營業時間：10:00-21:00
            p
              span.material-symbols-outlined location_on
              span 地址：台北市中山區南京東路25巷2-1號
          a(href='#')
            p 詳細資訊
      li
        img(
          src='https://github.com/hexschool/2022-web-layout-training/blob/main/week3-4/store-1.png?raw=true',
          alt='中山'
        )
        .description
          h3 台北中山旗艦店
          .detail
            p
              span.material-symbols-outlined call
              span 電話：(02)000-1234
            p
              span.material-symbols-outlined schedule
              span 營業時間：10:00-21:00
            p
              span.material-symbols-outlined location_on
              span 地址：台北市中山區南京東路25巷2-1號
          a(href='#')
            p 詳細資訊
      li
        img(
          src='https://github.com/hexschool/2022-web-layout-training/blob/main/week3-4/store-1.png?raw=true',
          alt='中山'
        )
        .description
          h3 台北中山旗艦店
          .detail
            p
              span.material-symbols-outlined call
              span 電話：(02)000-1234
            p
              span.material-symbols-outlined schedule
              span 營業時間：10:00-21:00
            p
              span.material-symbols-outlined location_on
              span 地址：台北市中山區南京東路25巷2-1號
          a(href='#')
            p 詳細資訊
      li
        img(
          src='https://github.com/hexschool/2022-web-layout-training/blob/main/week3-4/store-1.png?raw=true',
          alt='中山'
        )
        .description
          h3 台北中山旗艦店
          .detail
            p
              span.material-symbols-outlined call
              span 電話：(02)000-1234
            p
              span.material-symbols-outlined schedule
              span 營業時間：10:00-21:00
            p
              span.material-symbols-outlined location_on
              span 地址：台北市中山區南京東路25巷2-1號
          a(href='#')
            p 詳細資訊
      li
        img(
          src='https://github.com/hexschool/2022-web-layout-training/blob/main/week3-4/store-1.png?raw=true',
          alt='中山'
        )
        .description
          h3 台北中山旗艦店
          .detail
            p
              span.material-symbols-outlined call
              span 電話：(02)000-1234
            p
              span.material-symbols-outlined schedule
              span 營業時間：10:00-21:00
            p
              span.material-symbols-outlined location_on
              span 地址：台北市中山區南京東路25巷2-1號
          a(href='#')
            p 詳細資訊
</template>

<style lang="scss" scoped>
body {
  box-sizing: border-box;
}
.container {
  max-width: 1296px;
  margin: 80px auto;
  padding: 0 12px;
  line-height: 1.5;
}
h2 {
  margin: 0 -12px;
  font-size: 48px;
  position: relative;
  padding-left: 16px;
  &:before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: 8px;
    background-color: #9f1213;
  }
}
.area {
  margin: 20px -12px;
  label {
    font-size: 24px;
    font-weight: bold;
  }
  select {
    margin-left: 16px;
    font-size: 20px;
    padding: 6px;
    border: 2px solid rgb(0, 0, 0, 0.1);
    min-width: 23.5%;
  }
}
.branchesInfo {
  margin: 0 -24px;
  ul {
    display: flex;
    flex-wrap: wrap;
  }
  li {
    width: 31.5%;
    padding: 24px 12px;
  }
  img {
    max-width: 100%;
  }
}
.description {
  h3 {
    font-size: 24px;
    border: 1px solid rgb(0, 0, 0, 0.1);
    padding: 8px 24px;
  }
  .detail {
    border: 1px solid rgb(0, 0, 0, 0.1);
    padding: 8px 20px;
    font-weight: 900;
    p {
      padding: 4px;
      font-size: 18px;
      display: flex;
      span {
        display: block;
      }
      span:nth-child(2) {
        padding-left: 8px;
        font-size: 20px;
      }
    }
  }
  a {
    display: block;
    padding: 16px 0;
    background-color: black;
    &:hover {
      opacity: 0.8;
    }
    p {
      text-align: center;
      color: white;
      font-size: 19px;
    }
  }
}
@media (max-width: 576px) {
  .container {
    margin: 40px auto;
  }
  h2 {
    margin: 0;
    font-size: 24px;
  }
  .area {
    margin: 20px 0;
    label {
      font-size: 16px;
    }
    select {
      font-size: 16px;
      width: 78%;
    }
  }
  .branchesInfo {
    margin: 0;
    ul {
      display: block;
    }
    li {
      width: 100%;
      padding: 12px 0;
    }
  }
}
</style>