$(function () {
  iframeContentChange();
  calcResults();
});

function iframeContentChange() {
    $('[data-iframe]').each(function () {
        $(this).click(function (e) {
            e.preventDefault();
            var src = $(this).attr('data-iframe');
            $('#main-content').attr("src", src);
            $('.aside__item.active').each(function () {
                $(this).removeClass("active")
            });
            $(this).addClass("active");
        })
    })
}

var array = [
                3,2,3,1,1,2,3,4,4,1,2,1,4,2,4,
                4,3,1,4,3,3,3,1,2,3,2,2,2,1,1,
                1,2,3,3,2,1,4,3,2,2,1,3,2,4,1,
                2,1,4,1,4,3,3,2,3,1,1,3,1,1,4,
                2,1,3,2,3,3,1,2,4,1,4,2,3,2,1
            ];

function calcResults() {
    $('#result').click(function () {
        let result = 0;
        $('.test__item input[type=radio]:checked').each(function () {
            const id = ($(this).attr("id"));
            const obj = id.split('a');
            console.log(obj);
            if (+obj[1] === array[+obj[0] - 1])
                result++;
        })
        alert(`Ваш результат ${result} из ${array.length}`);
    })
}