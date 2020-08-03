function arrayMirroring(numberList) {
	
    var ret = new Array;
    for(var i = numberList.length-1; i >= 0; i--) {
        ret.push(numberList[i]);
    }
    return numberList.concat(ret);
}
module.exports = arrayMirroring;