/**
 * document.ready event handler
 */
$(function(){
    fetchUser();
    initEvents();
})

/**
 * gets a random user from randomuser.me
 */
 var recieved = false;
 var currentUser = {};

function fetchUser() {
    // TODO: implement
    $.getJSON('https://randomuser.me/api/', function(data) {
        currentUser = data.results[0];
        //console.log(currentUser.nat);--------> delete after testing
    });
}

/**
 * creates and inserts the popup into the DOM
 */
function render() {
    $('body').append(
        "<div class='follow'>"
            + "<div class='popup-image'>"
                + "<img src='" + currentUser.picture.large + "'>"
            +  "</div>"
            + "<div class ='popup-text'>"
                + "<div class = 'popup-close'> X </div>"
                + "<div class = 'popup-article'>"
                    + "<b>Hi there!</b>"
                    + "<br /> "
                    + "For any questions contact me via "
                         + "<a href='mailto:" + currentUser.email + "'>email</a>"
                + "</div>"
            + "</div>"
        + "</div>");

    if(currentUser.gender === "male"){
        $(".follow").css("background", "lightblue");
    } else {
        $(".follow").css("background", "lightcoral");
    }

    $(".popup-close").click(function () {
        $(".follow").remove();
    });
}

/**
 * checks if all conditions are met to render the popup
 * @return Boolean
 */
function shouldRender() {//&& currentUser.nat==="FR"-------> add after testing
    // TODO: implement
    if(((document.documentElement.scrollTop + document.body.scrollTop) / (document.documentElement.scrollHeight - document.documentElement.clientHeight)) >= 0.65){
        return true;
    } else {
        return false;
    }

}

/**
 *  tracks the rendered user
 */
function trackUser() {
    // TODO: implement
}

/**
 * onscroll event handler
 */
function onScroll() {
    if (shouldRender()) {
        trackUser();
        render();
    }
}

/**
 * event handler
 */
function initEvents() {
    window.onscroll = onScroll;
}

/**
 * additional helper methods
 */
