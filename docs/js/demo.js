$('#showDefault').on('click', function(){
	myAlert('This is a default alert');
});

$('#showInfo').on('click', function(){
	myAlert('This is an <i>info</i> alert', 'myalert-info');
});

$('#showSuccess').on('click', function(){
	myAlert('This is a <i>success</i> alert', 'myalert-success');
});

$('#showWarning').on('click', function(){
	myAlert('This is an <i>warning</i> alert', 'myalert-warning');
});

$('#showDanger').on('click', function(){
	myAlert('This is a <i>danger</i> alert', 'myalert-danger');
});

$('#showCustom').on('click', function(){
	myAlert('You\'re at the <b>forest</b>', 'myalert-custom');
});

$('#showSaving').on('click', function(){
	myAlertSaving(true, 'Wait, saving...', 'myalert-info');
});

$('#hideSaving').on('click', function(){
	myAlertSaving(false);
});