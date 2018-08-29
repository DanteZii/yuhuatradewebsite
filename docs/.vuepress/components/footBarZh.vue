<template>
<nav class="menu-bar">
  <ul class="list">
    <router-link to="/zh/">
        <li class="btn">
            <img class="imgMenu" src="/menuBar/home.svg"/>
            <div class="contentF">主页</div>   
        </li>   
    </router-link>
    <router-link to="/zh/Recommend/">
        <li class="btn">
            <img class="imgMenu" src="/menuBar/fish.svg"/>
            <div class="contentF">产品</div>    
        </li>
    </router-link>
    <router-link to="/zh/About/">
        <li class="btn">
            <img class="imgMenu" src="/menuBar/team.svg"/>
            <div class="contentF">关于</div>   
        </li class="btn">
    </router-link>
    <a href="tel:0535-6666955">
        <li class="btn">
            <img class="imgMenu" src="/menuBar/mobile.svg"/>
            <div class="contentF">联系</div>  
        </li>
    </a>
    <router-link to="/">
        <li class="btn">
            <img class="imgMenu" src="/menuBar/Language.svg"/>
            <div class="contentF">语言</div>  
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
    font-size: 12px;
    color: #6A8095;
}

.imgMenu{
    width: 26px;
    height: 26px;
}

.menu-bar {
  width: 100%;
  position: fixed;
  bottom: 0px;
  background-color: #fff;
  left: -0.1%;
  border-top: 1px solid #BFD2E5;
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

.icon:hover {
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
  
}
</style>
