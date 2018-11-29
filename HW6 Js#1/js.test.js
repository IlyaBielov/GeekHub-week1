'use strict';

test('test_string', () => {
  expect("Ilya".length).toEqual(4);

  expect("Ilya Bielov".indexOf("Bielov")).toEqual(5);
  expect("You is You".lastIndexOf("You")).toEqual(7); 
  expect("Ilya Bielov".indexOf("Igorovich")).toEqual(-1);
  expect("Ilya Bielov".indexOf("Ilya", 5)).toEqual(-1);
  expect("Ilya Bielov".search("Bielov")).toEqual(5);

  expect("Ilya Bielov".slice(0, 4)).toEqual("Ilya");
  expect("Ilya Bielov".slice(4)).toEqual(" Bielov");

  expect("Ilya Bielov".substring(5)).toEqual("Bielov");
  expect("Ilya Bielov".substr(0, 3)).toEqual("Ily");

  expect("Ilya Bielov Bielov".replace("Bielov", "Anonym")).toEqual("Ilya Anonym Bielov");
  expect("Ilya Bielov Ilya".replace(/Ilya/g, "Anonym")).toEqual("Anonym Bielov Anonym");

  expect("Ilya".concat(" ", "Bielov")).toEqual("Ilya Bielov");
  expect(("Ilya" + " " + "Bielov")).toEqual("Ilya Bielov");

  expect(("Ilya Bielov").toUpperCase()).toEqual("ILYA BIELOV");
  expect(("Ilya Bielov").toLowerCase()).toEqual("ilya bielov");

  expect(("     Ilya    Bielov     ").trim()).toEqual("Ilya    Bielov");

  expect("Ilya Bielov".charAt(6)).toEqual('i');
  expect("Ilya Bielov".charCodeAt(6)).toEqual(105);
  expect("Ilya Bielov"[3]).toEqual('a');

  expect("Ilya Bielov".split(" ")).toEqual(["Ilya","Bielov"]);
  expect("Ilya".split("")).toEqual(['I','l','y','a']);
});

test('test_numbers', () => {
  expect((123).toString()).toEqual("123");
  expect((100 + 23).toString()).toEqual("123");

  expect((9.656).toExponential(3)).toEqual("9.656e+0");
  expect((5.546).toFixed(2)).toEqual("5.55");
  expect((5.546).toPrecision(3)).toEqual("5.55");

  expect((5 + 2).valueOf()).toEqual(7);

  expect((Number(true))).toEqual(1);

  expect(parseInt("12$")).toEqual(12);
  expect(parseFloat("12.33$")).toEqual(12.33);

  expect(Number.MAX_VALUE).toEqual(1.7976931348623157e+308);
  expect(Number.MIN_VALUE).toEqual(5e-324);

  expect(Number.POSITIVE_INFINITY).toEqual(Infinity);
  expect(1/0).toEqual(Infinity);

  expect(Number.NEGATIVE_INFINITY).toEqual(-Infinity);
  expect(-1/0).toEqual(-Infinity);

  expect(Number.NaN).toEqual(NaN);
  expect(100 / 'a').toEqual(NaN);
});

test('test_arrays', () => {
expect().toEqual();
});

test('test_compare_operators', () => {
expect().toEqual();
});

test('test_equality_comparison_algorithm', () => {
expect().toEqual();
});
