var i = 0
var edocument = document.querySelector(".edocument");
var playing = false;
edocument.addEventListener('click', function () {
	i = i + 1;

  setTimeout(function () {
    $(".pqricon").click();
  }, 300);

  $(".pqricon").on('click', function () {
    return false;
  });

  $(".pshicon").on('click', function () {
    return false;
  });

	if (i = 1) {
		setTimeout(function () {
			$('.edocument > .contentone > .unloaded').css('opacity', '0');
			$('.edocument > .contentone > .loaded').css('opacity', '1');
		}, 500);
	}

	if (playing)
		return;

	$('.edocument > .contentone').css('filter', 'brightness(0.8)');
	setTimeout(function () {
		$('.edocument > .contentone').css('filter', 'brightness(1)');
	}, 200);

	playing = true;
	anime({
		targets: edocument,
		rotateY: {
			value: '+=180',
			delay: 0
		},
		easing: 'linear',
		duration: 100,
		complete: function (anim) {
			playing = false;
		}
	});

});