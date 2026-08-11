(function ($) {
	'use strict';

	var config = window.aspenTeamExplainer || {};
	var wrapperSelector = '#team-fields-wrapper-' + config.productId;

	function getNotice($form) {
		var $wrapper = $form.find(wrapperSelector);

		if (!$wrapper.length) {
			$wrapper = $(wrapperSelector);
		}

		if (!$wrapper.length) {
			return $();
		}

		var $notice = $wrapper.find('.team-seat-context');

		if (!$notice.length) {
			$notice = $('<div class="team-seat-context" aria-live="polite"><p></p></div>');
			var $teamNameField = $wrapper.find('#team_name_field');

			if ($teamNameField.length) {
				$teamNameField.after($notice);
			} else {
				$wrapper.find('.team-fields').prepend($notice);
			}
		}

		return $notice;
	}

	function render($form, maxSeats, variationName) {
		var $notice = getNotice($form);
		var max = parseInt(maxSeats, 10);

		if (!$notice.length || isNaN(max) || max < 1) {
			$notice.hide().find('p').empty();
			return;
		}

		var replacements = {
			'%max_seats%': max,
			'%product_name%': config.productName || '',
			'%variation_name%': variationName || ''
		};
		var message = config.message;

		$.each(replacements, function (placeholder, value) {
			message = message.split(placeholder).join(String(value));
		});

		$notice.find('p').html(message);
		$notice.show();
	}

	$(document).on('found_variation', 'form.variations_form', function (event, variation) {
		render($(this), variation.aspen_team_max_member_count, variation.aspen_team_variation_name);
	});

	$(document).on('reset_data hide_variation', 'form.variations_form', function () {
		$(wrapperSelector).find('.team-seat-context').hide().find('p').empty();
	});

	$(function () {
		if (!config.isVariable) {
			render($('form.cart'), config.maxSeats, config.variationName);
		}
	});
})(jQuery);
