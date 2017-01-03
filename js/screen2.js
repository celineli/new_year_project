$(document).ready(function(){
	$("#text-wrapper").fadeIn(2500);
});

var anim = ['vitalité.', 'rire.', 'sérénité.', 'rencontres.', 'créativité.', 'succès.'];
i = 0,
$div = $('#word');
setTimeout(function()
	{
	setInterval(function ()
		{
		$div.text(anim[i++ % anim.length]);
		}, 2000);
	}, 800);
