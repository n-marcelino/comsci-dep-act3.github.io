var degrees = 0;

$(
    function() {
        $(".dropdownbutton").click(
            function() {
                thisid = this.id; //gets the id of the current button click
                buttons = $('.dropdownbutton'); //array of all buttons
                content = $('.dropdowncontent'); //array of all content
            
                for(let i = 0; i<buttons.length;i++) {
                    //for loop to check for thisid being equal to any of the button ids
                    if (this.id === buttons[i].id) {
                        thisIndex = i; //if equal, store index of correct button-content pair in thisIndex
                        break;
                    }
                }

                // $('.dropdowncontent').eq(thisIndex).toggleClass("displaycontent");

                degrees += 180;
                $('.dropdowncontent').eq(thisIndex).toggle(function() {
                    $('.dropdownbutton').eq(thisIndex).css({
                        'transform': 'rotate(' + degrees + 'deg)',
                        '-ms-transform': 'rotate(' + degrees + 'deg)',
                        '-moz-transform': 'rotate(' + degrees + 'deg)',
                        '-webkit-transform': 'rotate(' + degrees + 'deg)',
                        '-o-transform': 'rotate(' + degrees + 'deg)'
                      }); 
                });

                // degrees += 180;
                // $(".dropdowncontent").toggle(function() {
                //     $('.dropdownbutton').css({
                //         'transform': 'rotate(' + degrees + 'deg)',
                //         '-ms-transform': 'rotate(' + degrees + 'deg)',
                //         '-moz-transform': 'rotate(' + degrees + 'deg)',
                //         '-webkit-transform': 'rotate(' + degrees + 'deg)',
                //         '-o-transform': 'rotate(' + degrees + 'deg)'
                //       }); 
                // });
            }
        );
    }
);