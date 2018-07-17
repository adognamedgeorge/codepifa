<template>
  <div class="wrapper">
    <div class="search">
      <div class="s-left">
        <div class="icon-img">
          <a href="#">
            <img src="@/assets/imgs/new_log.png"/>
          </a>
        </div>
        <div class="icon-font">
          <a href="#">
            <img src="@/assets/imgs/04171124.png"/>
          </a>
        </div>
      </div>

      <div class="s-input">
        <input placeholder="搜索商品关键字，品牌" type="text"/>
        <button type="submit">搜索</button>
      </div>

      <div class="s-cart">
        <ul>
          <li>cart</li>
          <li>进货单</li>
          <li>|</li>
          <li>
            99
            <span>
              <a href="#">
                <img src=""/>
              </a>
            </span>
          </li>
        </ul>
      </div>
      <div class="s-code">
          <img src="@/assets/imgs/a.png"/>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HomeSearch'
}
</script>

<style lang="stylus" scoped>
  .wrapper
      background-color:rgba(255,255,255,1)
      height:150px
      .search
        width:1190px
        margin:0 auto
        position:relative
        display:flex
        .s-left
            margin-left:0
            margin-top:20px
            width:193px
            height:76px
            background:red

</style>
