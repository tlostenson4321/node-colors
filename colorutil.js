var r = process.argv[2]
var g = process.argv[3]
var b = process.argv[4]




module.exports = {
luminosity: 0.2126*r + 0.7152*g + 0.0722*b,
darken: [(0.8*r) , (0.8*g),  (0.8*b)]
};

