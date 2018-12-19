import React from 'react';
import { shallow } from 'enzyme';
import Player from './Player';

it('renders correct name', () => {
    const playerNamePassed = 'Ania';
    const playerComponent = shallow(<Player name={playerNamePassed} />);
  
    const playerNameRendered = playerComponent.find('.Player__name').text();
  
    expect(playerNameRendered).toEqual(playerNamePassed);
});

it("renders correct score", () => {
	const playerScorePassed = 666;
    const playerComponent = shallow(<Player score={playerScorePassed} />);
    
	const renderedScoreText = playerComponent.find(".Player__score").text();
	const playerScoreRendered = Number(renderedScoreText);

	expect(playerScoreRendered).toEqual(playerScorePassed);
});
