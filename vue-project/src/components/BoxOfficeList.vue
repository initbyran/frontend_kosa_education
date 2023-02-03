<template>
  <div>
    <div class="container-fluid">
      <div class="row">
        <nav id="sidebarMenu" class="col-md-3 col-lg-2 d-md-block bg-light sidebar collapse">
          <div class="position-sticky pt-3 sidebar-sticky">
            <ul class="nav flex-column">
              <li class="nav-item">
                <a class="nav-link active" aria-current="page" href="#">
                  <span data-feather="home" class="align-text-bottom"></span>
                  날짜별 BoxOffice 순위
                </a>
              </li>
            </ul>
          </div>
        </nav>

        <main class="col-md-9 ms-sm-auto col-lg-10 px-md-4">

          <h2>영화순위</h2>
          <div class="table-responsive">
            <table class="table table-striped table-sm">

              <div>
                <input type="button" class="btn btn-primary" value="선택삭제" v-on:click="deleteSelectedBtn">
              </div>

              <thead>
                <tr>
                  <th scope="col">CHECK</th>
                  <th scope="col">순위</th>
                  <th scope="col">포스터</th>
                  <th scope="col">영화제목</th>
                  <th scope="col">관람객수</th>
                  <th scope="col">개봉일</th>
                  <th scope="col">삭제</th>
                </tr>
              </thead>
              <tbody>
                <tr colspan="7" v-for="(info,index) in propsdata" v-bind:key="index">
                  <td><input  type="checkbox" id="selected" v-model="selectedMovies[info.rnum-1]"></td>
                  <td>{{ info.rank }}</td>
                  <td><img v-bind:src="propsdataimg[info.rnum]"></td>
                  <td><a href="#"  data-bs-toggle="modal" data-bs-target="#exampleModal" v-on:click="myModal(info.movieNm, info.movieCd)">{{ info.movieNm }}</a></td>
                  <td>{{ info.audiCnt }} </td>
                  <td>{{ info.openDt }}</td>
                  <td><button v-on:click="deleteBtn(index)">삭제</button></td>   
                </tr>
         
              </tbody>
          </table>
          </div>
           </main>
    </div>
    
    </div>
    <!-- modal -->
      <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title" id="exampleModalLabel">영화 상세 정보</h5>
              <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div class="modal-body">
            
              <div>
                <tr>상영시간 : {{ propsdatadetail.showTm }} 분</tr>
                <br><br>
                <tr>영화유형 : {{ propsdatadetail.typeNm }}</tr> 
                <br><br>
                <tr><span v-for="(nations,index) in propsdatadetail.nations" v-bind:key="index">제작국가 : {{nations.nationNm}}</span></tr>
                <br><br>
                <tr><span v-for="(genres,index) in propsdatadetail.genres" v-bind:key="index">장르 : {{genres.genreNm}}</span></tr>
                <br><br>
                <tr><span v-for="(directors,index) in propsdatadetail.directors" v-bind:key="index">감독 : {{directors.peopleNm}}</span></tr>
              
          
              </div>
            </div>
            <div class="modal-footer">
              <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">확인</button>
            </div>
            
          </div>
        </div>
      </div>

  </div>
   
    
</template>
<script>

export default {
  props: ["propsdata","propsdataimg","propsdatadetail"],
  data(){
    return{ 
      selectedMovies: []
      }
  },
  methods: {
      // 개별 삭제
      deleteBtn: function (index) {
        this.propsdata.splice(index, 1);
      },
      // 선택 삭제
      deleteSelectedBtn: function () {
        var value=this.selectedMovies;
        this.$emit('deleteSelectedBtn',value);
      },
      // 상세 정보 창(modal)
       myModal : function(movieNm, movieCd){  
        this.$emit('myModal',movieCd);
      }
  }
};
</script>
<style scoped>
</style>
