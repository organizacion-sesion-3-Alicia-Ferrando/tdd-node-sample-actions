// Ejemplo de test utilizando el módulo assert disponible en NodeJS

// Cargar el módulo assert
var assert = require('assert');

// Cargar el módulo con las funciones para testear
var operaciones = require('../operations.js');

// Test
it('comprobar función suma', function() {
	assert.equal(operaciones.par(1), false);
	assert.equal(operaciones.par(-1), false);
	assert.equal(operaciones.par(2), true);
});



