import PlayersList from './PlayersList';
import React from 'react';
import { shallow, mount } from 'enzyme';
import Player from '../Player/Player';

it('renders without crashing', () => {
  shallow(<PlayersList players={[]} />);
});

it('should renders correct number of players (2 players)', () => {
    const players = [
        {
            name: 'Marian',
            score: 5
        },
        {
            name: 'Heniu',
            score: 0
        }
    ]
    //const playerComponent = mount(<PlayersList players={players} />); //tutaj renderuje się komponent
    const playerComponent = shallow(<PlayersList players={players} />); //tutaj renderuje się komponent
    console.log(playerComponent.debug());
    //const expectedPlayersNumber = playerComponent.find('li').length;
    const expectedPlayersNumber = playerComponent.find(Player).length;

    expect(expectedPlayersNumber).toEqual(2);
});

it("should call onScoreUpdate", () => {
	const players = [
        {
            name: 'Marian',
            score: 5
        },
        {
            name: 'Heniu',
            score: 0
        }
    ]

    const mockedOnScoreUpdate = jest.fn();
    const playerComponent = shallow(<PlayersList players={players} onScoreUpdate={mockedOnScoreUpdate} />);
    const firstPlayer = playerComponent.find(Player).first();
    const onPlayerScoreChange = firstPlayer.prop('onPlayerScoreChange');
    onPlayerScoreChange(11);
    expect(mockedOnScoreUpdate).toBeCalledWith(0, 11);
});
