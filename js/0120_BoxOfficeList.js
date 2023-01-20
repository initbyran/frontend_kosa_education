

function myFunc(){
    $('tbody').empty();
    if(window.event.keyCode ==13){
    var targetDate = $("[type=text]").val();
    $.ajax({
        url : "http://www.kobis.or.kr/kobisopenapi/webservice/rest/boxoffice/searchDailyBoxOfficeList.json",
        async : true,
        data : {
            key : '055bf3cf9c2367e1b7a396e3ec91ab3d',
            targetDt : targetDate
        },
        type : 'GET',
        dataType : 'json',
        success : function(data){

            for(let i=0; i<10; i++){

            let rank=data.boxOfficeResult.dailyBoxOfficeList[i].rank;
           
            let title=data.boxOfficeResult.dailyBoxOfficeList[i].movieNm;
            
            let audiAcc=data.boxOfficeResult.dailyBoxOfficeList[i].audiAcc;
            
            let openDt=data.boxOfficeResult.dailyBoxOfficeList[i].openDt;
            
            $.ajax({
                async : true,
                url : "https://dapi.kakao.com/v2/search/image",
                type : "GET",
                headers : {
                    Authorization : "KakaoAK de12c1c5d92728df6cac1ae4d37f40e9"
                },
                data : {
                    query : title,
                },
                dataType : 'json',
                success : function(data){
                    let imgurl = data.documents[0].thumbnail_url 
                    let myImg = $('<img/>').attr('src',imgurl);
                    imgtd.append(myImg);
                },
                error : function(){
                    alert('error');
                }
        
            });

            let tr = $("<tr></tr>");

            let check =$("<input/>").attr('type','checkbox');
            let ranktd = $("<td></td>").text(rank);
            let imgtd =$("<td></td>");
            let titletd = $("<td></td>").text(title);
            let audiAcctd = $("<td></td>").text(audiAcc);
            let openDttd = $("<td></td>").text(openDt);
            let deleted = $("<input />").attr('type','button').attr('class','btn btn-danger').attr('value','삭제').css('color','red')
            .on('click',function(){ tr.remove() });
               
            tr.append(check);
            tr.append(ranktd);
            tr.append(imgtd);
            tr.append(titletd);
            tr.append(audiAcctd);
            tr.append(openDttd);
            tr.append(deleted);

            $('tbody').append (tr);
            
        }},
        error : function(){
            $('td').text('검색실패');
        }
    });

}
}

function deleteChecked(){
  $('[type=checkbox]:checked').parent().remove();
       
     
}