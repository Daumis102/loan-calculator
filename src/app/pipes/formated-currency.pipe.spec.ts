import { FormatedCurrencyPipe } from './formated-currency.pipe';

describe('FormatedCurrencyPipe', () => {
  let pipe: FormatedCurrencyPipe;
  beforeEach(()=>{
    pipe = new FormatedCurrencyPipe();
  });

  it('create an instance', () => {
    expect(pipe).toBeTruthy();
  });

  it('expect to add whitespace to string', () => {
    let transformed: string = pipe.transform("1000000000.40");
    expect(transformed).toBe("1 000 000 000.40"); 
  });

  it('expect to add whitespace to number', () => {
    let transformed: string = pipe.transform(1000000000.40);
    expect(transformed).toBe("1 000 000 000.40"); 
  });

  it('expect to replace comma with a dot', () => {
    let transformed: string = pipe.transform("10,40");
    expect(transformed).toBe("10.40"); 
  });

  it('expect to round a string to 2 decimal places', () => {
    let transformed: string = pipe.transform("10.556");
    expect(transformed).toBe("10.56"); 
  });

  it('expect to round a number to 2 decimal places', () => {
    let transformed: string = pipe.transform(10.556);
    expect(transformed).toBe("10.56"); 
  });

  it('expect to return empty when input is not a number', () => {
    let transformed: string = pipe.transform("abc");
    expect(transformed).toBe(""); 
  });
});
