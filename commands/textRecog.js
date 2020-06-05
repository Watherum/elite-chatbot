module.exports = {
    name: 'textrecog',
    description: 'Saves the stream and tries to read text from the stream',
    execute(discordClient, message, twitchClient, target,
            set, streak, arena, pass, count,
            textRecog, singlesSmashList, addSinglesPlayers,
            marioLevelList, addMarioLevels, args) {
        textRecog.createStreamFile();
        textRecog.parseTextFromStream();
        twitchClient.say(target, `Executed the test, text recognition`);
        console.log(`* Executed textrecog command`);
    },
};