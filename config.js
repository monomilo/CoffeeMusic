

module.exports = {
  TOKEN: "",
  language: "en",
  ownerID: ["Milo", ""], 
  mongodbUri : "mongodb+srv://milo:milo@123@discordbot.afyhoaw.mongodb.net",
  spotifyClientId : "922436dfc2364fb1bad04e478ccf874a",
  spotifyClientSecret : "0b444b694119409db21d98e78394fd5f",
  setupFilePath: './commands/setup.json',
  commandsDir: './commands',  
  embedColor: "#1db954",
  activityName: "YouTube Music", 
  activityType: "LISTENING",  // Available activity types : LISTENING , PLAYING
  SupportServer: "Milo",
  embedTimeout: 5, 
  errorLog: "", 
  nodes: [
     {
      name: "GlaceYT",
      password: "youshallnotpass",
      host: "lavalink.jirayu.net",
      port:  13592,
      secure: false
    }
  ]
}
