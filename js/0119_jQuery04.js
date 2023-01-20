function myFunc(){
    $('#innerDiv').remove(); // 삭제(dom에서도 제거)
    $('#innerDiv').hide(); // 숨김
    $('#innerDiv').show(); // 숨겨져있는거 보여줌
    $('#innerDiv').empty(); // 후손만 삭제
}

function display_input(){
    alert($('#myID').val());
}