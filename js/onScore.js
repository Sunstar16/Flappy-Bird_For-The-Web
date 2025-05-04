'use strict';

var scoreEvent = null;

function initScoreEvent() {
    scoreEvent = jQuery.Event('onScore');
}

function sendEvent(score) {
    scoreEvent.score = score;
    parent.$(parent.document).trigger( scoreEvent );
}