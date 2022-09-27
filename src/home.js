$('#create').click(function() {
    document.getElementById("popup").classList.add('active');
});

$('#submit').click(function() {
    var name = $('#name').val();
    var description = $('#description').val();
    var path = $('#path').val();

    alert(name + '\n' + description + '\n' + path);
})