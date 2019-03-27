<template lang="jade">
  .hello
    h1 {{ msg }}
    h2 透明、開放、協力、共好
    doc1
    h4 第20屆管理委員聯合競選名單(草稿待修)
    .ui.row.centered.container
      table.ui.celled.table(border='1')
        tbody
          tr
            th 姓名
            th 選區
            th 經歷與專長
            th.big 參選原因
          tr(v-for='p in people', v-bind:key='p')
            th(v-bind:class = "{'lo': p.s == '龍騰區','li': p.s == '鯉躍區', 'fo' : p.s == '鳳翔區'} ")
              a(v-if="p.url", :href='p.url', target='_blank')
                img(v-if='p.i', :src="'./static/img/' + p.i")
                h2 {{p.n}}
              span(v-else)
                img(v-if='p.i', :src="'./static/img/' + p.i")
                h2 {{p.n}}
            td(v-bind:class = "{'lo': p.s == '龍騰區','li': p.s == '鯉躍區', 'fo' : p.s == '鳳翔區'} ") {{p.s}}
            td
              ol
                li(v-show="p.n == '李雅卿'" v-for='x in p.xs', v-bind:key='x') {{x}}
            td {{p.r}}
    .ui.row
      vedio1

</template>

<script>

import doc1 from './doc1.vue'
import vedio1 from './vedio1.vue'

export default {
  name: 'Welcome',
  components: { doc1, vedio1 },
  data () {
    return {
      msg: '崁頂社區國家新都',
      people: [
        {n: '孫浩剛', i: '孫浩剛.jpg', url: '', s: '龍騰區', xs: ['物業20年', '保全', '總幹事', '物業法規', '土木營造', '網購', '消防']},
        {n: '李雅卿', i: '李雅卿.jpg', url: 'https://www.facebook.com/groups/1722266604770327/', s: '龍騰區', xs: ['法律碩士', '曾任職新聞及教育界', '擅長團隊整合、資訊處理、合作討論'], r: '打造透明、開放、協力、共好、敬老愛幼的宜居社區'},
        {n: '陳纓元', s: '龍騰區', xs: ['銀行', '金融業']},
        {n: '崔樂勇', i: '崔樂勇.jpg', s: '龍騰區', xs: ['法律', '社區運作']},
        {n: '唐光華', i: '唐光華.jpg', url: 'https://www.facebook.com/naturetang', s: '龍騰區', xs: ['新聞', '政治', '教育', '在地']},
        {n: '鍾宛庭', s: '龍騰區'},
        {n: '蘇錦樑', s: '鯉躍區', xs: ['生意', '公關', '環境']},
        {n: '李寶章', s: '鯉躍區', xs: ['工程', '雜工', '生物']},
        {n: '羅崇恩', s: '鯉躍區', xs: ['法律']},
        {n: '黃歆梅', s: '鯉躍區', xs: ['軍公教', '行政', '心理']},
        {n: '邱秀蘭', s: '鯉躍區', xs: ['旅遊業', '業務', '公關', '英語']},
        {n: '張崇賢', s: '鯉躍區', xs: ['網路']},
        {n: '陳順吉', s: '鯉躍區'},
        {n: '林政勳', s: '鯉躍區', xs: ['建設公司', '裝修設計']},
        {n: '翁碧襄', s: '鳳翔區', xs: ['仲介', '環境', '宅修']},
        {n: '王端毅', s: '鳳翔區', xs: ['生命禮儀師']},
        {n: '吳廷桐', s: '鳳翔區', xs: ['業務']},
        {n: '謝錫欽', s: '鳳翔區', xs: ['警察', '翻譯']},
        {n: '黃元彩', s: '鳳翔區'}
      ]
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

.container {
}

p {
  text-align: left;
  font-size: 18px;
}

table {
}

th img {
  height: 7em;
  border-radius: 50%;
}

th.big {
  width: 45%;
}

th {
  background-color: #f9f;
}

th.li {
  background-color: #fc9;
}

th.fo {
  background-color: #f99;
}

td.lo {
  background-color: #fcf;
}

td.li {
  background-color: #fda;
}

td.fo {
  background-color: #fcc;
}
th, td {
  padding: .5em;
  text-align: center;
  font-size: 16px;
}

li {
  display: inline-block;
  margin: 0.5em 1em;
}

li::before {
  content: '*'
}

</style>
