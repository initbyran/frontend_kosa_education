function myFunc(){
    // 버튼을 누르면 kakao 이미지 검색을 해서 첫번째 이미지를 div에 붙임
    // OPEN API
    $.ajax({
        async : true,
        url : "https://dapi.kakao.com/v2/search/image",
        type : "GET",
        headers : {
            Authorization : "KakaoAK de12c1c5d92728df6cac1ae4d37f40e9"
        },
        data : {
            query : "아바타2",
        },
        dataType : 'json',
        success : function(data){
            alert('success');
            let imgurl = data.documents[0].thumbnail_url // 배열
            let myImg = $('<img/>').attr('src',imgurl);
            $('div').append(myImg);
        },
        error : function(){
            alert('error');
        }

    });

}