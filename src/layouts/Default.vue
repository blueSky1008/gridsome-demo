<template>
  <div class="layout">
    <header class="header">
      <div class="cont">
        <g-link to="/"><img class="logo_img" src="/img/logo.svg" /></g-link>
        <nav class="nav">
          <g-link class="nav__link" to="/journal">journal</g-link>
          <g-link class="nav__link" to="/contact">Say Hi!</g-link>
        </nav>
      </div>
    </header>
    <slot/>
    <footer class="footer">
      Copyright © 2021
    </footer>
  </div>
</template>

<static-query>
query {
  metadata {
    siteName
  }
}
</static-query>

<style>
body{
  padding: 0;
  font-size: 16px;
  font-family: -apple-system,system-ui,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,sans-serif;
}
.layout{
  width: 1200px;
  margin: 0 auto;
  padding: 90px 96px 0;
  box-sizing: border-box;
}
.header{
  position: fixed;
  left: 0;
  top: 0;
  right: 0;
  height: 90px;
  background-color: transparent;
}
.header .cont{
  width: 1200px;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 0 auto;
  padding: 0 96px;
  box-sizing: border-box;
}
.header .logo_img{
  width: 60px;
  height: 24px;
}
.header .nav .nav__link{
  font-size: 16px;
  color: #333333;
  font-weight: bold;
  margin-right: 40px;
  text-decoration: none;
  padding-bottom: 3px;
  border-bottom: 1px solid;
  border-bottom-color: transparent;
}
.header .nav .nav__link.active--exact,
.header .nav .nav__link:hover{
  border-bottom-color: #333333;
}
.footer{
  padding: 96px;
  font-size: 14px;
}
</style>
