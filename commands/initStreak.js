module.exports = {
    name: 'initstreak',
    description: 'Writes the streak victor and their wins to files',
    execute(message,  twitchClient, target, set, streak, arena, pass, textRecog,
            singlesSmashList, addSinglesPlayers, marioLevelList, addMarioLevels, args) {
        streak.setVictor(args[0].trim());
        streak.setWins(args[1]);
        const chatResponse = streak.victor.trim() + " is now on a streak!";
        twitchClient.say(target, chatResponse);
        console.log(`* Executed initstreak command`);
    },
};