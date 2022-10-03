pname = "Test"

$(document).ready(function() {
    for(let i=0; i<5; i++)
    {
    $('#outerdiv').append(
      $('<div>').prop({
        id: 'innerdiv',
        innerHTML: 
                `<a>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <div class="btn" id="load">${pname} ${i}</div>
                </a><br>
                `,
        className: 'container'
      })
    );
    }
  });

$('#home').click(function() {
    window.location.replace("../");
})
  