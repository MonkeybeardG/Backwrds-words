User_input = game.ask_for_string("Type Below What You want to Encrypt")
text_list: List[str] = []
index = 0
while index <= len(User_input):
    text_list.append(User_input.char_at(index))
    text_list.reverse()
    game.splash(text_list)
    index += 1