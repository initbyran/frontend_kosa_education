let result = $.ajax({
    async : true, 
    url :'',
    type : 'get',
    date : {},
    success : function(){
        // call back function 
    }
});

let result2 = $.ajax({
    url :'',
    type : 'get',
    date : {},
    success : function(){
        // call back function 
    }
});

// ajax 호출 
// 서버쪽 프로그램이 실행되고 그 결과가 JSON으로 보내지게 되는데 시간이 걸림
// 그 시간을 기다리지 않는다
// ajax() 호출은 바로 리턴됨 ; 리턴되는 값은 ajax()함수 결과값이 아님
// 순서가 보장되지 않음

alert('경고창입니다'); // 대표적인 blocking 함수
