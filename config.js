module.exports = {
        TOKEN: 'MTI0NDI3NzY5NTgwNjgzMjcxMA.G1Js1q.U7zBKyTtzEFtIU8LotrWE0SixWTZEukyGb4Fjg', //bot token
        playing: 'Music Bot',
        mongoDB: "", //mongoDB url.
        dblToken: "", //top.gg token.
 opt: {
        DJ: { 
                commands: ['back', 'clear', 'filter', 'loop', 'pause', 'resume', 'skip', 'stop', 'volume'] //Please don't touch
        },
            
        voiceConfig: {
            leaveOnEnd: false, 
            autoSelfDeaf: false, 

            leaveOnTimer:{ 
                status: true, 
                time: 10000, 
            }
        }, 

        maxVol: 100, 
        loopMessage: false,

        discordPlayer: {
            ytdlOptions: {
                quality: 'highestaudio', 
                highWaterMark: 1 << 25 
            }
            }
        }
}
