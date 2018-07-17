<template>
  <div class="wrapper">
    <div class="header">
      <div class="h-left">云蚂蚁官网</div>
      <div class="h-user">
        Hi,<a>云蚂蚁1234</a>
          <span>退出</span>
      </div>
      <div class="h-right">
        <ul>
          <li>会员中心</li>
          <li>当面付申请</li>
          <li>快递代收</li>
          <li>进货单</li>
          <li>收藏夹</li>
          <li>帮助中心</li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HomeHeader'
}
</script>

<style lang="stylus" scoped>
  @import '~style/varible.styl'
  .wrapper
      background-color:$bgColor
      height:30px
      .header
          margin: 0 auto
          position:relative
          display:flex
          line-height:30px
          width:1190px
          font-size:12px
          font-family:PingFang-SC
          font-weight:Regular
          color:rgba(0,0,0,0.5)
          .h-left
              padding-left:6px
              padding-right:34px
          .h-user a
              color:rgba(230,45,45,1)
          .h-user span
              float:right
              padding-left:10px
          .h-right
              position:absolute
              right:0
            .h-right ul
                padding:0
                margin:0
                font-size:0;
              .h-right ul li
                  display:inline-block
                  padding-left:20px
                  font-size:12px
</style>
