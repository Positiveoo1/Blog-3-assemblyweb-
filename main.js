// $('div').on('click', function() {
//     $(this).toggleClass('show-description');
// });

const div = document.getElementsByTagName("div");

for(let i = 0; i < div.length; i ++) {
    div[i].addEventListener('click', function() {
        div[i].classList.toggle('show-description')
    })
}