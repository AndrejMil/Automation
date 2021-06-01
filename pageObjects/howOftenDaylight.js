class howOftenDaylight {

    howOftenTitle() {
		return cy
			.get('.sl-page-title')
			.should(
				'contain',
				'How often do you find that you don’t have time for yourself because you’ve been focused on others?'
			);
	}

}

export default howOftenDaylight;