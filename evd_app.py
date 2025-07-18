user_input = input("Does your paitent have an EVD? y/n :")
while user_input != "y" and user_input != "n":
    user_input = input("Remember to type 'y' or 'n': ")
if user_input == "y":
    running = True
else:
    running = False
while running:
    user_input = input("What is the ICP Range? Type 0-5, 6-10, or 11-20: ")
    while user_input != "0-5" and user_input != "6-10" and user_input != "11-20":
        user_input = input("Remember to type '0-5', '6-10', or '11-20': ")
    if user_input == "0-5":
        icp_zero_five = True
        icp_six_ten = False
        icp_eleven_twenty = False
    if user_input == "6-10":
        icp_zero_five = False
        icp_six_ten = True
        icp_eleven_twenty = False
    if user_input == "11-20":
        icp_zero_five = False
        icp_six_ten = False
        icp_eleven_twenty = True
    user_input = input("What is the CSF Output? Type 0-5, 6-10, or 11-20: ")
    while user_input != "0-5" and user_input != "6-10" and user_input != "11-20":
        user_input = input("Remember to type '0-5', '6-10', or '11-20': ")
    if user_input == "0-5":
        running = False
        csf_zero_five = True
        csf_six_ten = False
        csf_eleven_twenty = False
    if user_input == "6-10":
        running = False
        csf_zero_five = False
        csf_six_ten = True
        csf_eleven_twenty = False
    if user_input == "11-20":
        running = False
        csf_zero_five = False
        csf_six_ten = False
        csf_eleven_twenty = True
if icp_zero_five and csf_zero_five:
    print("The Risk is Low. Travel with ICP monitoring")
if icp_eleven_twenty and csf_eleven_twenty:
    print("The Risk is High. Travel with ICP monitoring. May keep EVD open to CSF drainage.")
else:
    print("The Risk is Moderate. Travel with ICP monitoring")
