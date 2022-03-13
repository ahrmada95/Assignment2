// FOR EACH //
Array.prototype.myEach = function(func_name) {
    for (let m = 0; m < this.length; m ++) {
        if (this.hasOwnProperty(m)) {
            func_name(this[m], m, this);
        }
    }
  };
  
  // MAP //
  Array.prototype.myMap = function(func_name) {
    arr = [];
    for (let m = 0; m < this.length; m++) {
        arr.push(func_name(this[m], m, this));
    }
    return arr;
  };
  
  // SOME //
  Array.prototype.mySome = function() {
    for (let m = 0; m < this.length; m++) {
        if ((func_name(this[m]))) {
            return true;
        }
    }
    return false;
  };
  
  // REDUCE //
  Array.prototype.myReduce = function(func_name, val) {
    for (let m = 0; m < this.length; m++) {
        val = func_name(val, this[m]);
    }
    return val;
  };
  
  // INCLUDES //
  Array.prototype.myIncludes = function(locate) {
    for (let i = 0; i < this.length; i++) {
        if (locate === this[i]) {
            return true;
        };
    };
    return false;
  };
  
  // INDEXOF //
  Array.prototype.myIndexOf = function(locate) {
    for (let m = 0; m < this.length; m++) {
        if (this[m] === locate) {
            return m;
        }
    }
    return -1;
  };
  
  // PUSH //
  Array.prototype.myPush = function(locate) {
    this[this.length] = locate
    return this.length
  };
  
  // LASTINDEXOF //
  Array.prototype.myLastIndexOf = function(locate) {
    for (let m = this.length - 1; m >= 0; m--) {
        if (this[m] === locate) {
            return m;
        }
    }
    return -1;
  };
  
  // KEYS //
  Object.myKeys = function(locate) {
    result = [];
    for (let key in locate) {
        if (locate.hasOwnProperty(key)) {
            result.push(key);
        }
    }
    return result;
  };
  
  // VALUES //
  Object.myValues = function(locate) {
    result = [];
    for (let key in locate) {
        if (locate.hasOwnProperty(key)) {
            result.push(locate[key]);
        }
    }
    return result;
  };