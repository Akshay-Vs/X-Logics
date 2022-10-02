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
    else
    {
        var fs = require("fs");

        try
        {
        alert("._.");

            if(fs.existsSync(path))
            {
                alert("Path does not exist: " + path);

                if (!fs.existsSync(path+"/"+name))
                {
                    fs.mkdirSync(path+"/"+name);
                    alert("Directory created: "+path+"/"+name);
                }
            }

        }
        catch(e){ 
            alert("Failed to create directory: "+path+"/"+name)
            console.error(e);
         }

    }
});