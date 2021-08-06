import { Component } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NumberDirective } from './number.directive';

describe('NumberDirective', () => {

  let directive: NumberDirective;
  beforeEach(() => {

    directive = new NumberDirective();
  })

  it('should create an instance', () => {
    expect(directive).toBeTruthy();
  });

  it('should allow a dot', () => {
    const keyEvent = new KeyboardEvent('keypress', {"key": "."})
    const spy = spyOn(keyEvent, 'preventDefault');

    directive.onKeypress(keyEvent);

    expect(spy).toHaveBeenCalledTimes(0);
  });

  it('should allow a comma', () => {
    const keyEvent = new KeyboardEvent('keypress', {"key": ","})
    const spy = spyOn(keyEvent, 'preventDefault');

    directive.onKeypress(keyEvent);

    expect(spy).toHaveBeenCalledTimes(0);
  });

  it('should allow a digit', () => {

    for(let i = 0; i<=9; i++){
      const keyEvent = new KeyboardEvent('keypress', {"key": i.toString()})
      const spy = spyOn(keyEvent, 'preventDefault');

      directive.onKeypress(keyEvent);

      expect(spy).toHaveBeenCalledTimes(0);
    }
  });

  it('should not allow a char', () => {
    
    // Check uppercase ASCII chars
    for(let i = 65; i<=90; i++){
      const keyEvent = new KeyboardEvent('keypress', {"key": String.fromCharCode(i)})
      const spy = spyOn(keyEvent, 'preventDefault');

      directive.onKeypress(keyEvent);

      expect(spy).toHaveBeenCalledTimes(1);
    }


    // Check lowercase ASCII chars
    for(let i = 97; i<=122; i++){
      const keyEvent = new KeyboardEvent('keypress', {"key": String.fromCharCode(i)})
      const spy = spyOn(keyEvent, 'preventDefault');

      directive.onKeypress(keyEvent);

      expect(spy).toHaveBeenCalledTimes(1);
    }
  });

  it('should not allow a symbol other than . or ,', () => {
      
      for(let i = 33; i<=47; i++){
        if(i == 46 || i == 44) continue;
        const keyEvent = new KeyboardEvent('keypress', {"key": String.fromCharCode(i)})
        const spy = spyOn(keyEvent, 'preventDefault');

        directive.onKeypress(keyEvent);

        expect(spy).toHaveBeenCalledTimes(1);
      }

      
      for(let i = 58; i<=64; i++){
        const keyEvent = new KeyboardEvent('keypress', {"key": String.fromCharCode(i)})
        const spy = spyOn(keyEvent, 'preventDefault');

        directive.onKeypress(keyEvent);

        expect(spy).toHaveBeenCalledTimes(1);
      }


      for(let i = 91; i<=96; i++){
        const keyEvent = new KeyboardEvent('keypress', {"key": String.fromCharCode(i)})
        const spy = spyOn(keyEvent, 'preventDefault');

        directive.onKeypress(keyEvent);

        expect(spy).toHaveBeenCalledTimes(1);
      }


      for(let i = 123; i<=126; i++){
        const keyEvent = new KeyboardEvent('keypress', {"key": String.fromCharCode(i)})
        const spy = spyOn(keyEvent, 'preventDefault');

        directive.onKeypress(keyEvent);

        expect(spy).toHaveBeenCalledTimes(1);
      }


  });
});
