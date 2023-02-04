$(document).ready(function() {
    $('#container').hide();
    toggleNui(true);
    
    window.addEventListener('message', function(event) {      
        if (event.data.toggleMenu != null) {
            toggleNui(event.data.toggleMenu);
            return;
        }
    });
});

function toggleNui(display) {
    if (display) {
        $('#container').fadeIn();
    } else {
        $('#container').fadeOut();
    }
}

$(".cardealerDropdownButton").on("mouseover", function () {
    console.log('s')
});

let dropdownActive = false;
$(document).on('click', '.cardealerDropdownButton', function() {
    if (!dropdownActive) {
        dropdownActive = true
        $(".cardealerDropdown").fadeIn(200);
    } else {        
        dropdownActive = false
        $(".cardealerDropdown").fadeOut(200);
    }
});
