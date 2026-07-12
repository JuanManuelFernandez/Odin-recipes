# Exercise 03 - numberChecker

Modify the code so it returns `true` when the number is greater than or equal to 10, and `false` if it is less than 10.

Currently, the code returns `true` if the number is `6`, otherwise, it returns `false`.

You may also notice that in this exercise, there are multiple tests (in the file `numberChecker.spec.js`). Only the first test is currently enabled. So after making sure that the first test passes, enable the next one by deleting the `.skip` portion from the `test.skip()` function. It is usually easier if you enable only one test at a time, then edit your code so that it passes. You can keep enabling only one at a time until slowly but surely, they all pass!

If running `npm test numberChecker.spec.js` returns results similar to what is shown below (showing some tests are skipped), make sure that you have enabled the rest of the tests, as described in the instructions above:

```
Test Suites: 1 passed, 1 total
Tests:       3 skipped, 1 passed, 4 total
```

## Hints

- You only need to edit line 2.
- Look at the docs for comparison operators in JavaScript for a quick reference.


# Ejercicio 03 - numberChecker

Modifica el código para que devuelva `true` cuando el número sea mayor o igual a 10, y `false` si es menor que 10.

Actualmente, el código devuelve `true` si el número es `6`; de lo contrario, devuelve `false`.

También notarás que en este ejercicio hay varias pruebas (en el archivo `numberChecker.spec.js`). Por ahora, solo la primera prueba está habilitada. Así que, tras asegurarte de que la primera prueba pase correctamente, habilita la siguiente eliminando la parte `.skip` de la función `test.skip()`. Suele ser más fácil habilitar una sola prueba a la vez y modificar el código para que la supere. ¡Puedes seguir habilitándolas de una en una hasta que, poco a poco, todas pasen!

Si al ejecutar `npm test numberChecker.spec.js` obtienes resultados similares a los que se muestran a continuación (indicando que se han omitido algunas pruebas), asegúrate de haber habilitado el resto de las pruebas tal como se describe en las instrucciones anteriores:

```
Test Suites: 1 passed, 1 total
Tests:       3 skipped, 1 passed, 4 total
```

## Pistas

- Solo necesitas modificar la línea 2.
- Consulta la documentación sobre operadores de comparación en JavaScript para una referencia rápida.