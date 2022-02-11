a = '''..........
..........
..........
..........
..........'''


'''
i am forced to write meaningless words while my mom is here watching me trying to program
what in the actual fuck i'm in here
pls come here and help me out
the fuck i'm doing this
'''


def getFromMap(x,y) -> str:
    g = a.split('\n')[y]
    return g[x]


loggedin =  False
name = ""
password =""
while True:
    inp = input(">")
    if inp == "register":
        name = input("name : ")
        password = input("password : ")
        open("names",'a').write("\n" + name + ' ' + password)
        loggedin = True
        open("bank",'a').write("\n" +name+ "\n1000")
        print("login successful")
    if inp == "login":
        name = input("name : ")
        password = input("password : ")
        if (name + ' ' + password) in open('names','r').read().split("\n"):
            loggedin = True
            print("login successful")
        else:
            loggedin = False
            name = ""
            password = ""
            print("login failed")
    if inp == "exit":
        break
    if loggedin:
        
        pass