// 함수선언문 - event handler
function myFunc(){

    // jquery를 이용해 ajax호출 (정보 필요)
    $.ajax({
        url : "http://www.kobis.or.kr/kobisopenapi/webservice/rest/boxoffice/searchDailyBoxOfficeList.json",
        async : true,
        data : {
            key : '055bf3cf9c2367e1b7a396e3ec91ab3d',
            targetDt : '20230119'
        },
        type : 'GET',
        dataType : 'json',
        success : function(data){
            let title=data.boxOfficeResult.dailyBoxOfficeList[0].movieNm;
            $('div>div').text(title);
        },
        error : function(){
            console.log('호출이 실패했어요!');
        }
    });
}