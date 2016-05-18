/**
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
var uniquePaths = function(m, n) {
    
    var map = [];
    for(var i = 0;i<m;i++){
        map[i] = [];
        map[i][0] = 1;
        //console.log(map[i]);
    }
    for(var j = 0;j<n;j++){
        map[0][j] = 1;
        //console.log(map[0])
    }
    for(i=1;i<m;i++){
        for(j=1;j<n;j++){
            map[i][j]=map[i-1][j]+map[i][j-1];
        }
    }
    return map[m-1][n-1];
    
    
};
