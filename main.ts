function update_scoreboard () {
    OLED.clear()
    OLED.writeStringNewLine("Player A" + player_A)
    OLED.newLine()
    OLED.writeStringNewLine("Player B" + player_B)
    OLED.newLine()
    OLED.writeStringNewLine("Ties" + Ties)
    OLED.newLine()
    OLED.writeStringNewLine("Rounds" + Rounds)
}
let Rounds = 0
let Ties = 0
let player_B = 0
let player_A = 0
OLED.init(128, 64)
OLED.writeStringNewLine("1v1 me in rock paper scissors")
player_A = 0
player_B = 0
Ties = 0
Rounds = 0
basic.pause(2000)
update_scoreboard()
