<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <h2>透明、開放、協力、共好</h2>
    <h4>第20屆管理委員聯合競選名單</h4>
    <div class="ui centered container">
      <table border="1" class="ui celled table">
        <tr>
          <th>姓名</th>
          <th>選區</th>
          <th>經歷與專長</th>
          <th>參選原因</th>
        </tr>
        <tr v-for = "p in people" v-bind:key = "p">
          <th>
            <a :href="p.url" target="_blank">
             <img v-if = "p.i" :src = "'./static/img/' + p.i"/>
              <h2>{{p.n}}</h2>
            </a>
          </th>
          <td>{{p.s}}</td>
          <td>
            <ol>
              <li v-for = "x in p.xs" v-bind:key = "x">{{x}}</li>
            </ol>
          </td>
          <td>{{p.r}}</td>
        </tr>
      </table>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Welcome',
  data () {
    return {
      msg: '崁頂社區國家新都',
      people: [
        {n: '李雅卿', i: '李雅卿.jpg', url: 'https://www.facebook.com/profile.php?id=100001542523317', s: '龍騰區', xs: ['新聞', '統整', '教育', '會議', '法律', '文化']},
        {n: '孫浩剛', i: '孫浩剛.jpg', url: 'https://www.facebook.com/profile.php?id=100011497422460', s: '龍騰區', xs: ['物業20年', '保全', '總幹事', '物業法規', '土木營造', '網購', '消防']},
        {n: '陳纓元', s: '龍騰區', xs: ['銀行', '金融業']},
        {n: '崔樂勇', s: '龍騰區', xs: ['法律', '社區運作']},
        {n: '唐光華', s: '龍騰區', xs: ['新聞', '政治', '教育', '在地']},
        {n: '鍾宛庭', s: '龍騰區'},
        {n: '蘇錦樑', s: '鯉躍區', xs: ['生意', '公關', '環境']},
        {n: '黃歆梅', s: '鯉躍區', xs: ['軍公教', '行政', '心理']},
        {n: '林政勳', s: '鯉躍區', xs: ['建設公司', '裝修設計']},
        {n: '邱秀蘭', s: '鯉躍區', xs: ['旅遊業', '業務', '公關', '英語']},
        {n: '李寶章', s: '鯉躍區', xs: ['工程', '雜工', '生物']},
        {n: '羅崇恩', s: '鯉躍區', xs: ['法律']},
        {n: '陳順吉', s: '鯉躍區'},
        {n: '張崇賢', s: '鯉躍區', xs: ['網路']},
        {n: '王端毅', s: '鳳翔區', xs: ['生命禮儀師']},
        {n: '翁碧襄', s: '鳳翔區', xs: ['仲介', '環境', '宅修']},
        {n: '謝錫欽', s: '鳳翔區', xs: ['警察', '翻譯']},
        {n: '吳廷桐', s: '鳳翔區', xs: ['業務']},
        {n: '黃元彩', s: '鳳翔區'}
      ]
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}

.container {
  display: flex;
  width: 100%;
  align-items: center;
}

table {
}

th img {
  height: 7em;
  border-radius: 50%;
}

th {
  background-color: #f9f;
}

th, td {
  padding: .5em;
  text-align: center;
}

li {
  display: inline-block;
  margin: 0 1em;
}
</style>
