<template lang="jade">
  .hello
    h1 {{ msg }}
    h2 透明、開放、協力、共好
    h4 社區改造管理團隊聯合聲明(草稿待修)
    .ui.segment.container
      p 各位親愛的芳鄰 : 大家好！

      p 國家新都成立於二十年前，時為內政部營建署所建，以成為全國示範社區為願景。二十年後，不但設備老化，需要汰舊換新 ; 許多制度面上的問題，如物業服務、清潔服務、垃圾處理都需革新 ; 此外，B1棟的訴訟還在進行 ; 增進鄰居互動的活動，政府相關補助申請及提昇社區便捷性等等，都待辦理。

      p 經過19年來各屆管理委員會不同的治理模式，我們深信揚棄派系的攻訐文化，捥起袖子，用開放透明，協力共好的心態，塑建廉、能、效率的團隊，真正動手打造美麗社區更為重要。

      p 孫浩剛與羅崇恩先生，用了半年多的時間，和我們一起討論出了社區三年改造藍圖，希望芳鄰能把社區託付三年，讓我們團隊有機會逐步完成這些政策和計畫。

      p 第一年，以「改善物業管理、節能節流」為目標，體檢一切設備和管理措施，擬出最經濟合理的汰換期程 ; 第二年，「除舊佈新」，在區大修改規約、處理垃圾問題、完成制度改造。第三年之後則致力「增進社區動能，塑造和諧溫暖的永續宜居文化」。

      p 「不增加管理費」是我們的前提。而「執掌管委會」則是必要的途徑。籲請各位芳鄰支持本團隊候選人，並配合選情，隨時更新「配票呼籲」。

      p 若非取得管委會過半席次，說什麼都沒用~~~~所以期待各位芳鄰的是:

      p ~~~~落實我們的配票呼籲，請用選票支持我們。
      p ~~~~不要把出席委託書交給我們團隊以外的任何人。
      p ~~~~請出席區權人會議，關心自己的社區。
      p ~~~~請不要相信任何對團隊成員的造謠、抹黑的假訊息。

    h4 第20屆管理委員聯合競選名單
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
      iframe(src="https://drive.google.com/file/d/1BtjlAsvmW7JA2orEsHQZcjiHkfriCH4m/preview" width="640" height="480")

</template>

<script>
export default {
  name: 'Welcome',
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
  margin: 0 1em;
}

li::before {
  content: '*'
}

</style>
