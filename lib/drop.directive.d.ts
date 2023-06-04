/// <reference types="flowjs" />
import { ElementRef, Renderer2, OnInit } from '@angular/core';
import * as i0 from "@angular/core";
export declare class DropDirective implements OnInit {
    protected el: ElementRef;
    protected renderer: Renderer2;
    protected flowJs?: flowjs.Flow;
    set flow(flow: flowjs.Flow);
    enable(): void;
    disable(): void;
    constructor(el: ElementRef, renderer: Renderer2);
    ngOnInit(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<DropDirective, never>;
    static ɵdir: i0.ɵɵDirectiveDeclaration<DropDirective, "[flowDrop]", ["flowDrop"], { "flow": "flow"; }, {}, never, never, false, never>;
}
