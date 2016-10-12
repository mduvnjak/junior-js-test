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
function fetchUser() {
    // TODO: implement
}

/**
 * creates and inserts the popup into the DOM
 */
function render() {
    // TODO: implement
}

/**
 * checks if all conditions are met to render the popup
 * @return Boolean 
 */
function shouldRender() {
    // TODO: implement
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
