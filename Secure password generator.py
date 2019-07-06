from random import *
import sys
import time

try:
    f = open('Passwords file.txt', "r")
    f.close
except:
    f = open('Passwords file.txt', "w")
    f.close
    



while True:
    h = ["A", "a", "B", "b", "C", "c", "D", "d", "E", "e", "F", "f", "G", "g", "H", "h", "I", "i", "J", "j", "K", "k", "L", "l", "O", "o", "M", "m", "N", "n", "P", "p", "Q", "q", "R", "r", "S", "s", "T", "t", "U", "u", "V", "v", "W", "w", "Y", "y", "Z", "z", "/", "/", "/", ";", ",", "<", ">", "?", "1", "2", "3", "4", "5", "7", "8", "9", "0", "!", "@", "$", "%", "^", "&", "*", "(", ")", "~"]

    ports = []
    word = ""

    x = randint(1, 1)

    sys.stdout.write("generating your super awesome password")
    sys.stdout.write('.')
    time.sleep(.05)
    sys.stdout.write('.')
    time.sleep(.5)
    sys.stdout.write('.')
    time.sleep(.5)
    sys.stdout.write('\n')

    while(x < 13):

        index = randint(0,76)

        word2 = word + h[index]

        ports.append(word2)

        sys.stdout.write(word2)

        x = x + 1


    print("\n")
    h = raw_input("would you like to save this to your super awesome passwords file (please type yes or no in lowercase)\nanswer:")
    if h == "yes":
        wer = raw_input("what are you using this password for: ")
        f = open('Passwords file.txt', "a")
        f.write(wer + ": " + ''.join(map(str, ports)) + "\n")
        f.close()

        p = raw_input("would you like to generate another awesome password(lowercase): ")
        if(p == "yes"):
            pass
        else:
            break
    else:
        p = raw_input("would you like to generate another awesome password(lowercase): ")
        if(p == "yes"):
            pass
        else:
            break


print("Thanks you for using super awesome password generator")






    





