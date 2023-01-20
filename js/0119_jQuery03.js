function myFunc(){
    $('ul>li').each(function(idx,item){
        // idx : 순번, 0부터 1씩 증가
        // item : 현재 사용되는 문서 객체(document object)
        console.log($(item).text());
    }); //함수 표현식
}

function removeBtn(){
    alert($('button[disabled]').attr('data-author', 신사임당));
}