var text = 'Papugi koszą trawę, unosząc się nad ziemią 15 centymetrów, na czerwonych dywanach.';
var text2 = 'Zielone słonie';
var animal = text2.toUpperCase();
var textReplaced = text.replace('Papugi', animal);

var textLength = textReplaced.length;
var halfText = textReplaced.slice(0, textLength/2);

console.log(halfText);