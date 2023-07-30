<template lang="pug">
.container 
  |
  h2 常見問題
  h3 我想詢問配鏡問題
  .section
    p.question Q1.請問可否自備鏡框單配鏡片？
    p.answer 
      |
      | A1.我牌鏡框搭配薄型非球面鏡片 1480 元，搭配功能型鏡片則依鏡片種類加價購買。
      br 
      | 當日購買JINS盒裝眼鏡，搭配薄型非球面鏡片 980 元（隔日後則為 1480 元），搭配功能型鏡片則依鏡片種類加價購買。
      br
      | 他牌鏡框，搭配薄型非球面鏡片 1980 元，搭配功能型鏡片則依鏡片種類加價購買。
  .section
    p.question Q2.眼鏡都可以20分鐘取件嗎？
    p.answer 
      |
      | A1.我牌鏡框搭配薄型非球面鏡片 1480 元，搭配功能型鏡片則依鏡片種類加價購買。
      br 
      | 當日購買JINS盒裝眼鏡，搭配薄型非球面鏡片 980 元（隔日後則為 1480 元），搭配功能型鏡片則依鏡片種類加價購買。
      br
      | 他牌鏡框，搭配薄型非球面鏡片 1980 元，搭配功能型鏡片則依鏡片種類加價購買。
  .section
    p.question Q3.散光鏡片需要額外加價嗎？
    p.answer
      | A1.我牌鏡框搭配薄型非球面鏡片 1480 元，搭配功能型鏡片則依鏡片種類加價購買。
      br 
      | 當日購買JINS盒裝眼鏡，搭配薄型非球面鏡片 980 元（隔日後則為 1480 元），搭配功能型鏡片則依鏡片種類加價購買。
      br
      | 他牌鏡框，搭配薄型非球面鏡片 1980 元，搭配功能型鏡片則依鏡片種類加價購買。
  .section
    p.question Q4.我可以使用舊眼鏡的度數配鏡片嗎？
    p.answer 
      |
      | A1.我牌鏡框搭配薄型非球面鏡片 1480 元，搭配功能型鏡片則依鏡片種類加價購買。
      br 
      | 當日購買JINS盒裝眼鏡，搭配薄型非球面鏡片 980 元（隔日後則為 1480 元），搭配功能型鏡片則依鏡片種類加價購買。
      br
      | 他牌鏡框，搭配薄型非球面鏡片 1980 元，搭配功能型鏡片則依鏡片種類加價購買。
  .section
    p.question Q5.請問可以單購買鏡框嗎？
    p.answer 
      |
      | A1.我牌鏡框搭配薄型非球面鏡片 1480 元，搭配功能型鏡片則依鏡片種類加價購買。
      br 
      | 當日購買JINS盒裝眼鏡，搭配薄型非球面鏡片 980 元（隔日後則為 1480 元），搭配功能型鏡片則依鏡片種類加價購買。
      br
      | 他牌鏡框，搭配薄型非球面鏡片 1980 元，搭配功能型鏡片則依鏡片種類加價購買。
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
  margin: 20px -12px;
  font-size: 48px;
  position: relative;
  padding-left: 16px;
  font-weight: bold;
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
h3 {
  margin: 12px -12px;
  font-size: 24px;
  font-weight: bold;
}
.section {
  margin: 24px -12px;
  .question {
    font-size: 20px;
    font-weight: bold;
  }
  .answer {
    margin: 8px 0;
    font-weight: 600;
  }
}
@media (max-width: 576px) {
  .container {
    margin: 40px auto;
  }
  h2 {
    font-size: 24px;
    margin: 12px 0;
  }
  h3 {
    margin: 0;
    padding: 12px 0;
  }
  .section {
    margin: 24px 0;
  }
}
</style>