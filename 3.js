const reducer = (acc, cur, ind, arr) => {
    // init val is (a, b, c), like (1, 0, 0)
    // next val is (2, 1, 0)
    // (3, 1, 1)
    // (4, 0, 1)
    // (5, -1, 1)
    
    let[n, x, y, dir] = acc;
    if (x == y) {
        // next round
        return acc.append([n+1, x+1, y, 0]);
    }
    
};

const left_turn = (dir) => {
    //dir is a direction, that could be 
    //[0,1]
    //[1,0]
    //[0,-1]
    //[-1,0]
    // turning left changes degree 90 degrees counterclock wise
};


//assign the next (n-1) orientation x 4
// or one by one
