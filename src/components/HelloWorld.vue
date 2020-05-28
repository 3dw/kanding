<template lang="jade">
  .hello
    h1.ui.header 崁頂里巷弄長照站(淡水區)
      .sub.header 崁頂里巷弄長照站是大家的好厝邊
    .ui.grid.container
      .ui.two.column.stackable.row
        .column
          img#main(src="/static/img/work001.jpg")
        .column
          p 想要增進社交關係嗎？想要ㄧ起腦力激盪嗎？想要動動身體做運動嗎？巷弄長照站ㄧ次滿足您，提供動態、靜態各式活動，歡迎大家立馬報名
          p 🔆🔆🔆🔆🔆🔆
          p 服務地址 ：
            a(href="https://www.google.com.tw/maps/place/251%E6%96%B0%E5%8C%97%E5%B8%82%E6%B7%A1%E6%B0%B4%E5%8D%80%E5%BE%8C%E6%B4%B2%E8%B7%AF%E4%B8%80%E6%AE%B5163%E8%99%9F1/@25.1994629,121.4260218,17z/data=!3m1!4b1!4m5!3m4!1s0x3442bab978bb775b:0x8ac06e1034a0cae!8m2!3d25.1994629!4d121.4282105", target = "blank") 淡水區後洲路一段163號1樓
          p 服務電話 ：
            a(href="tel:0228057560") 02-2805-7560
          p 服務時間：星期一～星期五 9:00-16:00

</template>

<script>

export default {
  name: 'Welcome',
  data () {
    return {
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

img#main {
  width: 95%;
}

p {
  font-size: 18px;
}

</style>
