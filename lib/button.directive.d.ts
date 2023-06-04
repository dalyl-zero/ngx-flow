/// <reference types="flowjs" />
import { ElementRef } from '@angular/core';
import * as i0 from "@angular/core";
export declare class ButtonDirective {
    protected el: ElementRef;
    protected _directoryOnly: boolean;
    set flowDirectoryOnly(directoriesOnly: boolean);
    protected _attributes?: object;
    set flowAttributes(attributes: object);
    protected _flow?: flowjs.Flow;
    set flow(flow: flowjs.Flow);
    setup(): void;
    constructor(el: ElementRef);
    static ɵfac: i0.ɵɵFactoryDeclaration<ButtonDirective, never>;
    static ɵdir: i0.ɵɵDirectiveDeclaration<ButtonDirective, "[flowButton]", never, { "flowDirectoryOnly": "flowDirectoryOnly"; "flowAttributes": "flowAttributes"; "flow": "flow"; }, {}, never, never, false, never>;
}
