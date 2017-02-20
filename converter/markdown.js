var parseHeadline = function(str) {
    var headlineRegExp =  /^(\#{1,6})([^\#\n]+)$/m;
    var stra = [];
    while ((stra = headlineRegExp.exec(str)) !== null) {
       count = stra[1].length;
       str = str.replace(stra[0], '<h' + count + '>' + stra[2] + '</h' + count + '>' + '\n');
    }
    return str;
 }

var parseHorizontaleLine = function(str) {
    var horizontalRegExp = /^(?:([\*\-_] ?)+)\1\1$/gm;
    var stra = [];
    while ((stra = horizontalRegExp.exec(str)) !== null) {
        str = str.replace(stra[0], '\n<hr/>\n');
    }
    return str;
}

var parseLink = function(str) {
    var linkRegExp = /\[([^\[]+)\]\(([^\)]+)\)/;
    var stra = [];
    while ((stra = linkRegExp.exec(str)) !== null) {
        str = str.replace(stra[0], '<a ' + 'href="' + stra[2] + '">' + stra[1] + '</a>');
    }
    return str;
}

var parseBold1 = function(str) {
    var boldRegExp1 = /(\*\*)(.*?)\1/;
    var stra = [];
    while ((stra = boldRegExp1.exec(str)) !== null) {
        str = str.replace(stra[0], '<b>' + stra[2] + '</b>')
    }

    return str;
}

var parseBold2 = function(str) {
    var boldRegExp2 = /(__)(.*?)\1/;
    var stra = [];
    while ((stra = boldRegExp2.exec(str)) !== null) {
        str = str.replace(stra[0], '<b>' + stra[2] + '</b>')
    }
    return str;
}

var markdown = {
    parse: function (str, strict) {
        'use strict';
        str = parseHeadline(str);
        str = parseHorizontaleLine(str);
        str = parseLink(str);
        str = parseBold1(str);
        str = parseBold2(str);
        return str;
    }
};

module.exports = markdown;
