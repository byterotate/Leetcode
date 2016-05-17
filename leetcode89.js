/**
 * @param {number} n
 * @return {number[]}
 */
var grayCode = function(n) {
    
    var sum = [];
    sum[sum.length]=0;
    sum[sum.length]=1;
    for(var i=2;i<=n;i++){
        var left = Math.pow(2,i-1);
        var right = Math.pow(2,i);
        var pointer = left-1;
        for(var j=right;j>left;j--){
            sum[sum.length] = sum[pointer]+left;
            pointer--;
        }
    }
    var slice = Math.pow(2,n);
    return sum.slice(0,slice);
};
