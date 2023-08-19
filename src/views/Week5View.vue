<template lang="pug">
.container
  .row
    .col-3.d-flex.flex-column.justify-content-between
      .nav.d-flex.flex-column.align-items-start
        img(src="https://raw.githubusercontent.com/hexschool/2022-web-layout-training/053bcf3afe88348b79971d2ea8de28f179cba5c5/week5/logo-ANSWER.svg" alt="answer")
        ul.ps-0
          li
            i.bi.bi-speedometer
            a(href="#") Dashboard
          li
            i.bi.bi-chat-square-dots-fill
            a(href="#") Question
          li
            i.bi.bi-file-earmark-bar-graph-fill
            a(href="#") Assignment
          li
            i.bi.bi-play-btn-fill
            a(href="#") Course
          li
            i.bi.bi-people-fill
            a(href="#") Admin
          li
            i.bi.bi-gear-fill
            a(href="#") Settings
      .user.d-flex.align-items-center
        img(src="https://github.com/hexschool/2022-web-layout-training/blob/main/week5/andychen.jpeg?raw=true")
        .user__info.ms-3 
          p.fw-bold.mb-1 Andy Chen
          p.text-secondary.fw-light.fs-7.mb-0 andy0401@mail.com
    .col-9
      .headers.d-flex.justify-content-between.align-items-center 
        .admin.d-flex.align-items-center 
          h1.fw-bold.h4.mb-0 Admin 
          a.fw-bold.text-black(href="#")
            i.bi.bi-plus-lg
            span Add New Admin
        .icon
          a(href="")
            i.bi.bi-search.me-4
          a(href="")
            i.bi.bi-bell-fill
      .main
        table.table.table-hover
          thead
            tr 
              th(scope="col") 
                span ID
                span.bi.bi-arrow-down
              th(scope="col") Name 
              th(scope="col") Email 
              th(scope="col") Verified
              th(scope="col") 
          tbody
            tr
              th(scope="row") #1
              th Emir Wicks
              th emir.wicks@mail.com
              th Yes
              th.text-end
                i.bi.bi-eye-fill
                i.bi.bi-pencil-fill.ms-4
            tr
              th(scope="row") #2
              th Emir Wicks
              th emir.wicks@mail.com
              th Yes
              th.text-end
                i.bi.bi-eye-fill
                i.bi.bi-pencil-fill.ms-4
            tr
              th(scope="row") #3
              th Emir Wicks
              th emir.wicks@mail.com
              th Yes
              th.text-end
                i.bi.bi-eye-fill
                i.bi.bi-pencil-fill.ms-4
            tr
              th(scope="row") #4
              th Emir Wicks
              th emir.wicks@mail.com
              th Yes
              th.text-end
                i.bi.bi-eye-fill
                i.bi.bi-pencil-fill.ms-4
            tr
              th(scope="row") #5
              th Emir Wicks
              th emir.wicks@mail.com
              th Yes
              th.text-end
                i.bi.bi-eye-fill
                i.bi.bi-pencil-fill.ms-4
            tr
              th(scope="row") #6
              th Emir Wicks
              th emir.wicks@mail.com
              th Yes
              th.text-end
                i.bi.bi-eye-fill
                i.bi.bi-pencil-fill.ms-4
            tr
              th(scope="row") #7
              th Emir Wicks
              th emir.wicks@mail.com
              th Yes
              th.text-end
                i.bi.bi-eye-fill
                i.bi.bi-pencil-fill.ms-4
            tr
              th(scope="row") #8
              th Emir Wicks
              th emir.wicks@mail.com
              th Yes
              th.text-end
                i.bi.bi-eye-fill
                i.bi.bi-pencil-fill.ms-4
            tr
              th(scope="row") #9
              th Emir Wicks
              th emir.wicks@mail.com
              th Yes
              th.text-end
                i.bi.bi-eye-fill
                i.bi.bi-pencil-fill.ms-4
            tr
              th(scope="row") #10
              th Emir Wicks
              th emir.wicks@mail.com
              th Yes
              th.text-end
                i.bi.bi-eye-fill
                i.bi.bi-pencil-fill.ms-4
                nav(aria-label="Page navigation example")
        ul.pagination.d-flex.justify-content-end.pagination-sm
          li.page-item
            a.page-link(href="#").bi.bi-chevron-left
          li.page-item
            a.page-link(href="#") 1
          li.page-item
            a.page-link(href="#") 2
          li.page-item
            a.page-link(href="#") 3
          li.page-item
            a.page-link(href="#").bi.bi-chevron-right



</template>

<style lang="scss" scoped>
* {
  font-family: 'Lato', sans-serif;
  text-decoration: none;
  a {
    color:black;
  }
  // outline: solid;
}
.fs-7 {
  font-size: 14px;
}

// section-left
.col-3 {
  background-color: #F8F9FA;
}
.nav {
  margin-left: 32px;
  img {
    margin: 40px 0;
  }
  ul {
    margin-left: 0;
  }
  li {
    margin-bottom: 30px;
    a {
      margin-left: 16px;
      font-weight: 700;
    }
    &:hover {
      a, i {
        color: #198754;
      }
    }
  }
}
.user {
  margin-left: 32px;
  background-color: #F8F9FA;
  img {
    width: 40px;
    height: 40px;
    border-radius: 50%;
  }
}

// section-right
.col-9 {
  padding: 32px;
}
.headers {
  h1 {
    margin-right: 40px;
  }
  a {
    span:hover {
      color: #198754;
    }
    i {
      margin-right: 8px;
      &:hover {
      color: #198754;
    }
    }
  }
}
.main {
  margin-top: 48px;
  tbody th {
    font-weight: lighter;
  }
}

.pagination {
  margin-top: 65px;
}
.page-link {
  border: 2px solid #198754;
  &:hover {
    background-color: #198754;
    color: white;
  }
}

</style>

<script>
// import '../assets/base.css'
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
</script>