import optionValidator from '../index';

test('Multiple.test', () => {
  optionValidator(
    {
      numberOrString: 42,
      stringOrArray: ['1', '2', '3']
    },
    {
      numberOrString: 'number|string',
      stringOrArray: {
        type: 'string|array'
      }
    }
  );
});