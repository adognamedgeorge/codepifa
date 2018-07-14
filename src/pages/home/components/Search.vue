<template>
  <div class="search">
    <div class="s-left">
      <div class="icon-img">
          <img src="@/assets/imgs/new_log.png"/>
      </div>
      <div class="icon-font">
          <img src="@/assets/imgs/04171124.png"/>
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
            <img src=""/>
          </span>
        </li>
      </ul>
    </div>
    <div class="s-code">
        <img src="@/assets/imgs/a.png"/>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HomeSearch'
}
</script>

<style lang="stylus" scoped>
  .search
      display:flex
      background:yellow
      .s-left
          width:193px
          height:76px
          background:red
          .s-left img
              display:inline-block
</style>
