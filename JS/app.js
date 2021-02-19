

let $form = $('.form');
let $allDone = $('.allDone');
let $doneList = $('.doneList');
$form.on('submit', function (a) {
    a.preventDefault();
    let $input = $('.form-control').val();
    if ($input != ''){
        let $list = $('.list');
        let $items = $('<div class="itemDiv"><li class="item"><input type="checkbox" id="check"><label for="check">'+$input+'</label><button type="button" class="complete" disabled><i class="fas fa-check-circle"></i></button><button type="button" class="remove" disabled><i class="fas fa-minus-circle"></i></button></li></div>');

        $list.append($items);
    }

    $('.form-control').val('');
    $(document).on('change', 'input[type="checkbox"]', function(){
        if ($(this).is(':checked')){
            $(this).closest('li').children('.complete').addClass('active');
            $(this).closest("li").children(".remove").addClass("active");
            $(this).closest("li").children(".complete").prop('disabled', false); 
            $(this).closest("li").children(".remove").prop('disabled', false); 

        }else{
            $(this).closest("li").children(".complete").removeClass("active");
            $(this).closest("li").children(".remove").removeClass("active");
            $(this).closest("li").children(".complete").prop('disabled', true); 
            $(this).closest("li").children(".remove").prop('disabled', true); 

        }
    })
    $(document).on('click', '.complete', function(){
        let $selItem = $(this).parent().parent();
        $selItem.removeClass('itemDiv');
        $selItem.addClass('doneDiv');
        $selItem.remove();
        $doneList.append($selItem);
        $(this).closest('li').addClass('itemDone');
        $(this).closest('li').children('input[type="checkbox"]').remove();
        $(this).closest('li').children('.complete').remove();
    })
    $(document).on('click', '.remove', function(){
        $(this).parent().parent().remove();
    })
});