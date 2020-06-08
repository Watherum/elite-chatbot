module.exports = {
    name: 'opensingles',
    description: 'Open the singles queue for people to join',
    execute(discordClient, message, twitchClient, target,
            set, streak, arena, pass, count,
            textRecog, frameProcessing, singlesSmashList, addSinglesPlayers,
            marioLevelList, addMarioLevels, args) {
        addSinglesPlayers = true;
        let response = 'Singles queue is now open!';
        twitchClient.say(target, response);
        console.log(`* Executed opensingles command`);
    },
};