$(document).ready(function() {
    $('#outerdiv').append(
        $('<div>').prop({
            id: 'container',
            innerHTML: "<h1>Helllo<h1/>",
            className: 'container'
        })
    );
});