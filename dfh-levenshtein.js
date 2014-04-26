var dfh = dfh || {};

dfh.levenshtein = (function(){
  function lev(s1, s2) {
    if ( s1 === null || s1 === undefined || s2 === null || s2 === undefined )
      throw new Error("Levenshtein distance algorithm expects two arguments");
    // but it treats any *thing* as a string
    s1 = s1 + "";
    s2 = s2 + "";
    // some optimizations
    if (!s1.length) return s2.length;
    if (!s2.length) return s1.length;
    if (s1 === s2)  return 0;
    if (s1.length < s2.length) {
      var s = s1;
      s1 = s2;
      s2 = s;
    }
    if (s1.length !== s2.length && s1.indexOf(s2) > -1)
      return s1.length - s2.length;
    // we must do some calculations
    s1 = s1.split('');
    s2 = s2.split('');
    var a1 = makeArray(s2.length), a2 = makeArray(s2.length);
    for ( var i = 0; i < s1.length; i++ ) {
        a2[0] = i + 1;
        for ( var j = 0; j < s2.length; j++ ) {
            var cost = s1[i] === s2[j] ? 0 : 1;
            a2[j + 1] = Math.min( a2[j] + 1, a1[j + 1] + 1, a1[j] + cost );
        }
        for ( var j = 0; j < a1.length; j++ ) a1[j] = a2[j];
    }
    return a2[s2.length];
  }

  function makeArray(l) {
    var ar = [];
    for ( var i = 0; i <= l; i++ ) {
      ar[i] = i;
    }
    return ar;
  }

  return lev;
})();

// an alias
dfh.lev = dfh.levenshtein;
