import { ElementRef } from '@angular/core';
import { Transfer } from './transfer';
import * as i0 from "@angular/core";
export declare class SrcDirective {
    private el;
    protected fileReader: FileReader;
    set flowSrc(transfer: Transfer);
    constructor(el: ElementRef);
    static ɵfac: i0.ɵɵFactoryDeclaration<SrcDirective, never>;
    static ɵdir: i0.ɵɵDirectiveDeclaration<SrcDirective, "[flowSrc]", never, { "flowSrc": "flowSrc"; }, {}, never, never, false, never>;
}
