<template>
<nav class="menu-bar">
  <ul class="list">
    <router-link to="/">
        <li class="btn">
            <img calss="imgMenu" src="/menuBar/home.svg"/>
            <div class="contentF">home</div>   
        </li>   
    </router-link>
    <router-link to="/Recommend/">
        <li class="btn">
            <img calss="imgMenu" src="/menuBar/fish.svg"/>
            <div class="contentF">product</div>    
        </li>
    </router-link>
    <router-link to="/About/">
        <li class="btn">
            <img calss="imgMenu" src="/menuBar/team.svg"/>
            <div class="contentF">about</div>   
        </li class="btn">
    </router-link>
    <a href="mailto:ytxzq@vip.163.com?subject=Product Information">
        <li class="btn">
            <img calss="imgMenu" src="/menuBar/mobile.svg"/>
            <div class="contentF">contact</div>  
        </li>
    </a>
    <router-link to="/zh/">
        <li class="btn">
            <img calss="imgMenu" src="/menuBar/language.svg"/>
            <div class="contentF">Language</div>  
        </li>
    </router-link>
  </ul>
</nav>

</template>

<style>

a {
    text-decoration: none;
    color:inherit;
}
.menu-bar,.list,.btn,.contentF {
  margin: 0;
  padding: 0;
  /* border: 1px solid #123; */
}

.contentF {
    font-size: 12px
}

.imgMenu{
    margin-top: 1rem;
}

.menu-bar {
  width: 100%;
  position: fixed;
  bottom: 0px;
  background-color: #fff;
  left: -0.1%;
  border-top: 1px solid #4e6e8e;
}

.menu-bar .list {
  list-style-type: none;
  display: flex;
  width: 100%;
  justify-content: space-around;
}

.menu-bar .list .btn {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  margin-top: 0.5rem;
  margin-bottom: 0.2rem;
}

.icons {
  height: 2rem;
  width: 2rem;
  background-color: #123;
  border-radius: 50%;
  margin: 0.5rem 0.5rem;
  margin-bottom: 0;
}

.icons:hover {
  background-color: blu;
}
.page-nav {
    padding-top: 1rem;
    padding-bottom: 2rem;
}

@media (min-width: 650px){
  .menu-bar {
    display:  none;
  }

.page-nav {
    position: fixed;
}
}
</style>

