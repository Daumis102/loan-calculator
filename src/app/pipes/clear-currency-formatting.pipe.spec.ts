import { ClearCurrencyFormattingPipe } from './clear-currency-formatting.pipe';

describe('ClearCurrencyFormattingPipe', () => {
  let pipe: ClearCurrencyFormattingPipe;
  beforeEach(()=>{
    pipe = new ClearCurrencyFormattingPipe();
  })

  it('create an instance', () => {
    expect(pipe).toBeTruthy();
  });

  it('expect to remove whitespaces', () => {
    let transformed: string = pipe.transform("10 000 000 000.00");
    expect(transformed).toBe("10000000000.00");
  });

  it('expect to replace comma with a dot', () => {
    let transformed: string = pipe.transform("10000000000,00");
    expect(transformed).toBe("10000000000.00");
  });

});
