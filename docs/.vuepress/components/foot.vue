<template>
  <div class="nav1">
    <ul class="u1">
      <li><router-link to="/">主页</router-link></li>
      <li><router-link to="/Product">产品</router-link></li>
      <li><a href="tel:0535-6666955">联系</a></li>
    </ul>
  </div>

</template>

<script>

</script>

<style>

.nav1 {
  height: 46px;
  width: 120%;
  position: fixed;
  bottom: 0px;
  background-color: #fff;
  border-top: 1px solid #dcdcdc;
  left: -19%;

}
.u1 {
    margin-top: 2%;
    display:flex;
    align-content:center;
    flex-direction: row;
    list-style-type: none;
    justify-content: center;
    align-items: center;
}
.u1 li {
  margin-left: 60px;
}
@media (min-width: 650px){
  .nav1 {
    display:  none;
  }
}
</style>
