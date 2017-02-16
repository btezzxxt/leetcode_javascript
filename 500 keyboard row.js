/**
 * @param {string[]} words
 * @return {string[]}
 */
var findWords = function(words) {
    var line1 = {
        q: true, 
        w: true,
        e: true,
        r: true,
        t: true,
        y: true,
        u: true,
        i: true,
        o: true,
        p: true
    };

    var line2 = {
        a: true, 
        s: true,
        d: true,
        f: true,
        g: true,
        h: true,
        j: true,
        k: true,
        l: true,
    };

    var line3 = {
        z: true, 
        x: true,
        c: true,
        v: true,
        b: true,
        n: true,
        m: true
    };

    var res = [];
    words.forEach(function (word){
        var list = line1;
        var valid = true;
        for (var i = 0; i < word.length; i++){
            var c = word.charAt(i).toLowerCase();;
            if (i === 0) {
                if (line1.hasOwnProperty(c)){
                    continue
                } 
                else if (line2.hasOwnProperty(c)){
                    list = line2;
                }
                else if (line3.hasOwnProperty(c)){
                    list = line3;
                } 
                else{
                    valid = false;
                }
            }

            else {
                if (!list.hasOwnProperty(c)){
                    valid = false;
                }
            }
        }

        if (valid){
            res.push(word);
        }
    });
    return res;
};

console.log(findWords(["Hello","Alaska","Dad","Peace"]));