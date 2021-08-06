import { ElementRef } from '@angular/core';
import { CurrencyDirective } from './currency.directive';


describe('CurrencyDirective', () => {

    let pipeMock;
    it("should call formatted currency pipe", () => {
        pipeMock = jasmine.createSpyObj('FormattedCurrencyPipe', ['transform']);
        pipeMock.transform.and.returnValue("test");

        let directive:CurrencyDirective = new CurrencyDirective(new ElementRef({"value": "test"}), pipeMock);
        directive.onBlur();

        expect(pipeMock.transform).toHaveBeenCalledTimes(1);
    });
});