'use strict'

function commonChild(s1, s2) {
    let lcs = new Array(s1.length + 1);
    
    for (let x = 0; x < lcs.length; x++) {
        lcs[x] = new Array(s2.length + 1).fill(0);
    }

    for (let x = 1; x < s1.length + 1; x++) {
        for (let y = 1; y < s2.length + 1; y++) {
            if (s1[x - 1] == s2[y - 1]) {
                lcs[x][y] = 1 + lcs[x - 1][y - 1];
            } else {
                lcs[x][y] = Math.max(lcs[x - 1][y], lcs[x][y - 1]);
            }
        }
    }

    return lcs[s1.length][s2.length];
    
}

module.exports.commonChild = commonChild;
