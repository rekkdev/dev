a = '''..........
..........
..........
..........
..........'''



def getFromMap(x,y) -> str:
    g = a.split('\n')[y]
    return g[x]



print(getFromMap(9,2))