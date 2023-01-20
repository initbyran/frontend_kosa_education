function myFunc(){
    // check가 된 checkbox부터 찾기
    console.log($('[type=checkbox]:checked + span').text());
}