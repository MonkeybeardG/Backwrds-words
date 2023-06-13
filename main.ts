let index = 0
let User_input = game.askForString("Type Below What You want to Encrypt")
while (index <= User_input.length) {
    let text_list: string[] = []
    text_list.push(User_input.charAt(index))
    text_list.reverse()
    game.splash(text_list)
    index += 1
}
