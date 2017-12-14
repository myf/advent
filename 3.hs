cardinal = [[0,1],[1,0],[0,-1],[-1,0]]
left = zip cardinal $ drop 1 $ cycle cardinal
turn dir = head [b | (a,b) <- left, a == dir]

add a b = zipWith (+) a b

