function searchBtn(){
    $.ajax({
        url : "http://www.kobis.or.kr/kobisopenapi/webservice/rest/boxoffice/searchDailyBoxOfficeList.json",
        async : true,
        data : {
            key : '055bf3cf9c2367e1b7a396e3ec91ab3d',
            targetDt : $('[type=date]').val().replace(/-/g,'')    // yymmdd형식으로 변경
                },
        timeout : 3000,
        type : 'GET',
        dataType : 'json',
        success : function(data){
            $('tbody').empty();

            let arr = data.boxOfficeResult.dailyBoxOfficeList;  // 배열
            
            $.each(arr,function(idx,item){
                // 배열 안의 각 요소에 대해서 함수를 호출(call back)
                // idx : 반복할 때마다 숫자가 증가한는 index
                // item : 반복할 때마다 추출되는 배열 안의 원소
                let tr = $("<tr></tr>");
                let ranktd = $("<td></td>").text(item.rank);
                let postertd = $("<td></td>");
                let posterImg = $("<img/>");
                $.ajax({
                    async : true,
                    url : "https://dapi.kakao.com/v2/search/image",
                    type : 'GET',
                    data : {
                        query : item.movieNm + ' 포스터'},
                    hearders : {
                        Authorization: 'KakaoAK de12c1c5d92728df6cac1ae4d37f40e9'
                    },
                    dataType : 'json',
                    success : function(){
                        let imgurl = data.document[0].thumbnail_url;
                        posterImg.attr('src',imgurl);
                    },
                    error : function(){
                        alert('이미지 검색 실패')
                    }
                });
                let titletd = $("<td></td>").text(item.movieNm);
                let audtd = $("<td></td>").text(item.audiCnt);
                let opentd = $("<td></td>").text(item.opendDt);
                let deltd = $("<td></td>");
                let delBtn = $("<button></button>").text('삭제').addClass('btn btn-danger');
                delBtn.click(function(){
                      $(this).parent().parent().remove();
                }); //삭제 버튼에 event handler 등록 ; call back function
                
                postertd.append(posterImg);
                deltd.append(delBtn);                
                tr.append(ranktd);
                tr.append(postertd);
                tr.append(titletd);
                tr.append(audtd);
                tr.append(opentd);
                tr.append(deltd);
                $('tbody').append(tr);
            })

        },
        error : function(){
            
        }});
        
}