$('#abort').click(function() {
    window.history.go(-1);
});

$('#create').click(function() {
    const name =  $('#name').val();
    var description = $('#description').val();
    const path = $('#path').val();

    if(description.length == 0) description = "My project";
    if(name.length == 0) alert("Enter name of the project");
    else if(path.length == 0) alert("Enter path to a directory");
    else{
        
    }
});