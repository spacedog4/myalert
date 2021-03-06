var myAlertTime;

function myAlert(message, classes) {
    $myAlertContainer = $('[data-myalert]');

    if($myAlertContainer.length){
        clearTimeout(myAlertTime);
        var $html = "<div class='myalert " + classes + "'>"
            + "<p>" + message + "</p>"
            + "<span class=\'fonticon fonticon-close myalert-close\'></span>"
            + "</div>";

        insertMyAlert($html);

        removeMyAlerts();

        myAlertOverflow();
    }
}

function insertMyAlert($html){
    if (!$('.myalert-wrapper').length) {
        $('[data-myalert]').append("<div class='myalert-wrapper'></div>");
    }

    if (!$('.myalert-saving').length) {
        var newAlert = $('.myalert-wrapper').append($html);
    } else {
        var newAlert = $('.myalert-saving').before($html);
    }
}

function myAlertOverflow(){
    var $myAlertContainer = $('[data-myalert]');

    if($myAlertContainer.length){
        var maxAlerts = $myAlertContainer.data('myalert-max');

        if(maxAlerts){
            $alerts = $('.myalert-wrapper .myalert').get().reverse();
            if (maxAlerts && $alerts.length >= maxAlerts) {
                $($alerts).each(function (key, elmt) {
                    if (key > (maxAlerts - 1)) {
                        $(elmt).fadeOut(function () {
                            $(this).remove();
                        });
                    }
                });
            }
        }
    }
}

$(document).delegate('.myalert-close', 'click', function () {
    var $this = $(this);
    var $alert = $this.closest('.myalert');
    removeMyAlert($alert);
});

$(document).delegate('.myalert-wrapper:not(.saving)', 'mouseover', function () {
    clearTimeout(myAlertTime);
});
$(document).delegate('.myalert-wrapper:not(.saving)', 'mouseout', function () {
    removeMyAlerts();
});

function removeMyAlerts() {
    var $alerts = $('.myalert-wrapper .myalert:not(.myalert-forever)');
    myAlertTime = setTimeout(function () {
        $alerts.fadeOut(function () {
            $(this).remove();
        });
    }, 5000);
}

function removeMyAlert($alert){
    $alert.height($alert.height());
    setTimeout(function(){
        $alert.css({height: 0, padding: 0, opacity: 0, margin: 0});
        $alert.on("transitionend webkitTransitionEnd oTransitionEnd MSTransitionEnd",
         function(e){
            $alert.remove();
            $(this).off(e);
         });
    }, 10);
}

function myAlertSaving(saving, message, classes) {
    if(typeof classes == 'undefined' || classes == null){
        classes = '';
    }

    if(typeof message == 'undefined' || message == '' || message == null){
        message = 'Saving...';
    }

    if(typeof saving == 'undefined' || saving === '' || saving == null){
        saving = true;
    }

    $savingAlert = $('.myalert-saving');

    if(saving && !$savingAlert.length){
        var $html = "<div class='myalert myalert-forever myalert-saving " + classes + "'>"
            + "<p><span class=\'fonticon fonticon-loading animate-spin\'></span> " + message + "</p>"
            + "</div>";

        insertMyAlert($html);
        myAlertOverflow();
    } else if (!saving) {
        removeMyAlert($('.myalert-saving'));
    }
}

function notSaving() {
    $('.alert-saving').fadeOut();
    $('#savingtop').removeClass('saving');
}