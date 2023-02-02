<template>
    <div id="app">
        <BoxOfficeHeader v-on:searchBtn="searchBtn"></BoxOfficeHeader>
        
        <BoxOfficeList v-bind:propsdata="myData"></BoxOfficeList>
        
    </div>    
</template>
<script>
import BoxOfficeHeader from "./components/BoxOfficeHeader.vue";
import BoxOfficeList from "./components/BoxOfficeList.vue";


export default {
    components:{
        BoxOfficeHeader,
      
        BoxOfficeList
    },
    data(){
        return{
            myData:[]
        };
    },
    methods : {
      searchBtn(targetDate) {
        axios({
          url: 'http://www.kobis.or.kr/kobisopenapi/webservice/rest/boxoffice/searchDailyBoxOfficeList.json',
          method: 'GET',
          params: {
            key: '055bf3cf9c2367e1b7a396e3ec91ab3d',
            targetDt: targetDate
          },
          responseType: 'json'

        }).then(response => {
          this.myData = response.data.boxOfficeResult.dailyBoxOfficeList;
          this.myData.forEach(element => {
            this.getImg(element.movieNm, element.rnum);
            
          }
          
          );
          console.log(this.myData);

        }).catch(function (error) {
          console.log(error);
        });

      },

      getImg: function (query, idx) {
        axios({
          url: "https://dapi.kakao.com/v2/search/image",
          method: "GET",
          headers: {
            Authorization: "KakaoAK de12c1c5d92728df6cac1ae4d37f40e9"
          },
          params: {
            query
          },
          responseType: 'json'
        }).then(response => {
          Vue.set(this.movieImg, idx, response.data.documents[0].thumbnail_url)
        }).catch(function (error) {
          console.log(error);
          
        })
      }
    }

   
};
</script>

<style>
    .bd-placeholder-img {
      font-size: 1.125rem;
      text-anchor: middle;
      -webkit-user-select: none;
      -moz-user-select: none;
      user-select: none;
    }

    @media (min-width: 768px) {
      .bd-placeholder-img-lg {
        font-size: 3.5rem;
      }
    }

    .b-example-divider {
      height: 3rem;
      background-color: rgba(0, 0, 0, .1);
      border: solid rgba(0, 0, 0, .15);
      border-width: 1px 0;
      box-shadow: inset 0 .5em 1.5em rgba(0, 0, 0, .1), inset 0 .125em .5em rgba(0, 0, 0, .15);
    }

    .b-example-vr {
      flex-shrink: 0;
      width: 1.5rem;
      height: 100vh;
    }

    .bi {
      vertical-align: -.125em;
      fill: currentColor;
    }

    .nav-scroller {
      position: relative;
      z-index: 2;
      height: 2.75rem;
      overflow-y: hidden;
    }

    .nav-scroller .nav {
      display: flex;
      flex-wrap: nowrap;
      padding-bottom: 1rem;
      margin-top: -1px;
      overflow-x: auto;
      text-align: center;
      white-space: nowrap;
      -webkit-overflow-scrolling: touch;
    }
  </style>
