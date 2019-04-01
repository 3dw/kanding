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
                li(v-for='x in p.xs', v-bind:key='x') {{x}}
            td
              ol
                li(v-for='r in p.rs', v-bind:key='r') {{r}}
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
        {n: '孫浩剛', i: '孫浩剛.jpg', url: 'https://www.facebook.com/profile.php?id=100011497422460', s: '龍騰區', xs: ['物業經驗20年，擔任過保全、總幹事、物業主管及工地主任、物業案場點交主任等', '現職為淡水其他社區的總幹事。'], rs: ['從18屆的發現社區可以借由共同參與而改變。', '因19屆採購滅火器，發現自己的物業、法規、土木營造等經驗，可以貢獻社區。', '希望喚醒冷漠的居民，共同改造家園']},
        {n: '李雅卿', i: '李雅卿.jpg', url: 'https://www.facebook.com/groups/1722266604770327/', s: '龍騰區', xs: ['曾任職新聞及教育，具法律背景，擅長團隊整合、資訊處理、合作討論', '17屆副主委', '18屆主委'], rs: ['感謝有機會在18屆實現透明、開放、協力、共好的社區經營理念。', '繼續參與團隊，打造敬老愛幼的宜居社區。']},
        {n: '陳纓元', s: '龍騰區', xs: ['在金融業服務。'], rs: ['發現18.19屆的管理差異太大。', '希望提昇住戶的公德心。', '改善管理制度，以提昇居住品質。']},
        {n: '崔樂勇', i: '崔樂勇.jpg', url: 'https://www.facebook.com/profile.php?id=100000133802005', s: '龍騰區', xs: ['具法律背景有社區管理服務人員證照，曾任本社區多屆管理委員會委員。', '18屆財務委員'], rs: ['支持透明、開放、協力、共好的精神，為提昇生活品質參選。', '致力督促社區住戶按時繳交管理費，以維社區正常運作。']},
        {n: '鍾宛庭', s: '龍騰區', xs: ['社福', '幼保', '現任職喜憨兒基金會'], rs: ['社區是家庭之外，最重要的生活圈。希望能夠讓社區成為健康、友善、充滿愛和希望的宜居樂園。']},
        {n: '蘇錦樑', i: '蘇錦樑.jpg', url: 'https://www.facebook.com/profile.php?id=100028912431066', s: '鯉躍區', xs: ['商場女強人，退休後關心居住正義、環境美化。', '18屆環保委員。'], rs: ['18屆親力親為，整頓環境、美化社區甚有成就感，希望有機會號召住戶繼續努力。']},
        {n: '李寶章', i: '李寶章.jpg', url: 'https://www.facebook.com/profile.php?id=100002521454137', s: '鯉躍區', xs: ['研究生物科學，從事整廠輸出。', '18屆機電委員。'], rs: ['18屆親力親為，率領雜工從頂樓、迴廊修到地下室，根治拖延十餘年的嚴重滲漏問題。', '社區管理需要熱忱、清廉和智慧。', '自己的社區自己救啦！']},
        {n: '羅崇恩', i: '羅崇恩.jpg', url: 'https://www.facebook.com/amannameken', s: '鯉躍區', xs: ['上校退役軍法官，並參與國家重要採購案合約起草。'], rs: ['認同開放丶透明的精神。', '社區需要制度化，尤其是採購和財務部份。', '希望協助社區規約修正、並對B1棟外牆訴訟提供法律意見。']},
        {n: '黃歆梅', i: '黃歆梅.jpg', url: 'https://www.facebook.com/profile.php?id=100005160729942', s: '鯉躍區', xs: ['退休公職人員'], rs: ['經過歷屆管委會的治理，認同開放、協力才是王道。', '做事要有章法，退休後願將心力貢獻社區，協力改造管理制度。']},
        {n: '邱秀蘭', i: '邱秀蘭.jpg', s: '鯉躍區', xs: ['旅遊業', '18屆委員。'], rs: ['社區環境確實適合父母終老，為人子女有責任參與社區提昇工程。', '信任此次聯合競選團隊，會認真作事，值得共事。']},
        {n: '張崇賢', i: '張崇賢.jpg', url: 'https://www.facebook.com/profile.php?id=100000724232874', s: '鯉躍區', xs: ['驗光師'], rs: ['在意社區資訊的流通和透明。', '18屆開放透明的作法，應進一步延續。']},
        {n: '陳順吉', s: '鯉躍區', url: 'https://www.facebook.com/grace.wong.946517', xs: ['裝修工程', '18屆委員'], rs: ['作事要有一群理念相同的人一起努力，才能成功。', '管理社區要大公無私、有效能，願意認真做事。', '信任此團隊符合上述條件，願盡一己之力。']},
        {n: '林政勳', i: '林政勳.jpg', url: 'https://www.facebook.com/profile.php?id=100003675928305', s: '鯉躍區', xs: ['建築設計師'], rs: ['社區建築極具特色，實應妥善經營。', '發現每人出一點聲，用一點力，社區就會變好，希望喚醒住戶共同參與。']},
        {n: '翁碧襄', s: '鳳翔區', url: 'https://www.facebook.com/profile.php?id=100000270732921', xs: ['環境改造', '宅修', '仲介'], rs: ['社區若不改造，在新建案林立下，將無競爭力。信任此團隊有方案、有能力、有意志，足以改造社區。', '身為B1訴訟戶，認為管委會應提供各項資訊。']},
        {n: '王端毅', i: '王端毅.jpg', url: 'https://www.facebook.com/tuanyih', s: '鳳翔區', xs: ['生命禮儀師', '19屆管委'], rs: ['很抱歉在第19屆無所作為，相信此團隊會勇於任事，改變社區。']},
        {n: '吳廷桐', i: '吳廷桐.jpg', url: 'https://www.facebook.com/profile.php?id=1221489647', s: '鳳翔區', xs: ['常年在中國銷售化工原料，現已退休。'], rs: ['建立廉能、效率的管理中心團隊，支持不增加管理費用，確能為打造美麗社區委員會、讓社區房價年年增高。']},
        {n: '謝錫欽', s: '鳳翔區', xs: ['警政、移民署外事退休', '18屆委員'], rs: ['社區人情溫暖，若能更進一步，實為終老宜居之所。', '垃圾問題應有解決之道。']}
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
