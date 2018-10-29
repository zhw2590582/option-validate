import optionValidator from '..';

const baseOption = {
  typeUndefined: undefined,
  typeNull: null,
  typeBoolean: true,
  typeBoolean2: false,
  typeBuffer: new Buffer(''),
  typeNumber: 42,
  typeString: 'str',
  typeObject: {},
  typeObject2: Object.create(null),
  typeDate: new Date(),
  typeArray: [1, 2, 3],
  typeRegexp: /foo/,
  typeRegexp2: new RegExp('foo'),
  typeError: new Error('error'),
  typeFunction: function() {},
  typeGeneratorfunction: function*() {},
  typeSymbol: Symbol('str'),
  typeMap: new Map(),
  typeWeakMap: new WeakMap(),
  typeSet: new Set(),
  typeWeakSet: new WeakSet(),
  typeInt8Array: new Int8Array(),
  typeUint8Array: new Uint8Array(),
  typeUint8ClampedArray: new Uint8ClampedArray(),
  typeUint16Array: new Uint16Array(),
  typeInt32Array: new Int32Array(),
  typeUint32Array: new Uint32Array(),
  typeFloat32Array: new Float32Array(),
  typeFloat64Array: new Float64Array()
};

const baseRule = {
  typeUndefined: 'undefined',
  typeNull: 'null',
  typeBoolean: 'boolean',
  typeBoolean2: 'boolean',
  typeBuffer: 'buffer',
  typeNumber: 'number',
  typeString: 'string',
  typeObject: 'object',
  typeObject2: 'object',
  typeDate: 'date',
  typeArray: 'array',
  typeRegexp: 'regexp',
  typeRegexp2: 'regexp',
  typeError: 'error',
  typeFunction: 'function',
  typeGeneratorfunction: 'generatorfunction',
  typeSymbol: 'symbol',
  typeMap: 'map',
  typeWeakMap: 'weakmap',
  typeSet: 'set',
  typeWeakSet: 'weakset',
  typeInt8Array: 'int8array',
  typeUint8Array: 'uint8array',
  typeUint8ClampedArray: 'uint8clampedarray',
  typeUint16Array: 'uint16array',
  typeInt32Array: 'int32array',
  typeUint32Array: 'uint32array',
  typeFloat32Array: 'float32array',
  typeFloat64Array: 'float64array'
}

test('Shallow object verification', () => {
  const { errorState } = new optionValidator(baseOption, baseRule);
  expect(errorState.length).toBe(0);
});

test('Deep object verification', () => {
  const baseRuleCopy = Object.assign({}, baseRule, {
    type: 'object'
  })

  const deepOption = {
    level1: {
      ...baseOption,
      level2: {
        ...baseOption
      }
    }
  };

  const deepRule = {
    level1: {
      ...baseRuleCopy,
      level2: {
        ...baseRuleCopy
      }
    }
  }

  const { errorState } = new optionValidator(deepOption, deepRule);
  expect(errorState.length).toBe(0);
});
