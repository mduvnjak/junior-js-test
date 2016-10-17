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
var isRendered = false;
var currentUser; // french guy
var userHistory = []; // logging users

function fetchUser() {
    $.ajax({
        url: 'http://api.randomuser.me/?nat=fr',
        dataType: 'json',
        success: function (result) {
            if (result.results) {
                currentUser = result.results[0];
            } else if (result.error) {
                console.log(result.error);
            } else {
                console.log('weird...');
            }
        }
    });

    // using this after ajax call is unpredictable,
    // so i check in shouldRender if currentUser !== undefined
}

/**
 * creates and inserts the popup into the DOM
 */
function render() {
    if (currentUser !== undefined) {
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
                             + "<a href='mailto:" + currentUser.email
                             + "?subject=Junior Assignment'>email</a>"
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

        isRendered = true;
    }
}

/**
 * checks if all conditions are met to render the popup
 * @return Boolean
 */
function shouldRender() {
    var is65 = ((document.documentElement.scrollTop + document.body.scrollTop) / (document.documentElement.scrollHeight - document.documentElement.clientHeight)) >= 0.65;
    var isPost = window.location.pathname.split('/').reverse()[0] === "post.html";

    // would be better to use trackUser here,
    // as now my render method must check also...
    if (is65 && isPost) {
        return !isRendered;
    }

    return false;
}

/**
 *  tracks the rendered user
 */
function trackUser() {
    if (currentUser !== undefined) {
        if (userHistory.indexOf(currentUser.email) > -1) {
            currentUser = undefined; // dont show repeating user
        } else {
            userHistory.push(currentUser.email);
        }
    }

    // i didnt get the logic behind trackUser
    // we only call fetchUser once...

    console.log('userHistory', userHistory);
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
