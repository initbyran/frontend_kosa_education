<template>
  
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
                <!-- <input type="button" class="btn btn-primary" value="선택삭제" v-on:click="deleteSelectedBtn">-->
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
                  <!-- <td><input  type="checkbox" id="selected" v-model="selectedMovies[info.rnum-1]"></td> -->
                  <td>{{ info.rank }}</td>
                  <!-- <td><img v-bind:src="movieImg[info.rnum]"></td> -->
                  <td>asdf</td>
                  <!-- <td><a href="#"  data-bs-toggle="modal" data-bs-target="#exampleModal" v-on:click="myModal(info.movieNm, info.movieCd)">{{ info.movieNm }}</a></td> -->
                  <td>{{ info.audiCnt }} </td>
                  <td>{{ info.openDt }}</td>
                  <td>{{ index }}</td>
                  <!-- <td><button v-on:click="deleteBtn">삭제</button></td>    -->
                </tr>
         
              </tbody>
          </table>
          </div>
           </main>
    </div>
    
    </div>
    
   
    
</template>
<script>
export default {
  props: ["propsdata"],
  methods: {},
};
</script>
<style scoped>
</style>
