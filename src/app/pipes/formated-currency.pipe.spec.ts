import { FormatedCurrencyPipe } from './formated-currency.pipe';

describe('FormatedCurrencyPipe', () => {
  it('create an instance', () => {
    const pipe = new FormatedCurrencyPipe();
    expect(pipe).toBeTruthy();
  });
});
