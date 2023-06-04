import * as i0 from '@angular/core';
import { Directive, Input, InjectionToken, PLATFORM_ID, Inject, NgModule } from '@angular/core';
import { ReplaySubject, Subject, merge, fromEvent } from 'rxjs';
import { switchMap, map, shareReplay, startWith } from 'rxjs/operators';
import { isPlatformBrowser } from '@angular/common';

class ButtonDirective {
    constructor(el) {
        this.el = el;
        this._directoryOnly = false;
    }
    set flowDirectoryOnly(directoriesOnly) {
        this._directoryOnly = directoriesOnly;
        this.setup();
    }
    set flowAttributes(attributes) {
        this._attributes = attributes;
        this.setup();
    }
    set flow(flow) {
        this._flow = flow;
        this.setup();
    }
    setup() {
        if (!this._flow) {
            return;
        }
        this._flow.assignBrowse(this.el.nativeElement, this._directoryOnly, this._flow.opts.singleFile, this._attributes);
    }
}
ButtonDirective.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "15.2.9", ngImport: i0, type: ButtonDirective, deps: [{ token: i0.ElementRef }], target: i0.ɵɵFactoryTarget.Directive });
ButtonDirective.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "14.0.0", version: "15.2.9", type: ButtonDirective, selector: "[flowButton]", inputs: { flowDirectoryOnly: "flowDirectoryOnly", flowAttributes: "flowAttributes", flow: "flow" }, ngImport: i0 });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "15.2.9", ngImport: i0, type: ButtonDirective, decorators: [{
            type: Directive,
            args: [{
                    selector: '[flowButton]',
                }]
        }], ctorParameters: function () { return [{ type: i0.ElementRef }]; }, propDecorators: { flowDirectoryOnly: [{
                type: Input
            }], flowAttributes: [{
                type: Input
            }], flow: [{
                type: Input
            }] } });

class DropDirective {
    constructor(el, renderer) {
        this.el = el;
        this.renderer = renderer;
    }
    set flow(flow) {
        this.flowJs = flow;
        if (!flow) {
            return;
        }
        this.enable();
    }
    enable() {
        this.flowJs?.assignDrop(this.el.nativeElement);
    }
    disable() {
        this.flowJs?.unAssignDrop(this.el.nativeElement);
    }
    ngOnInit() {
        this.renderer.listen('body', 'drop', (event) => event.preventDefault());
        this.renderer.listen('body', 'dragover', (event) => event.preventDefault());
    }
}
DropDirective.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "15.2.9", ngImport: i0, type: DropDirective, deps: [{ token: i0.ElementRef }, { token: i0.Renderer2 }], target: i0.ɵɵFactoryTarget.Directive });
DropDirective.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "14.0.0", version: "15.2.9", type: DropDirective, selector: "[flowDrop]", inputs: { flow: "flow" }, exportAs: ["flowDrop"], ngImport: i0 });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "15.2.9", ngImport: i0, type: DropDirective, decorators: [{
            type: Directive,
            args: [{
                    selector: '[flowDrop]',
                    exportAs: 'flowDrop',
                }]
        }], ctorParameters: function () { return [{ type: i0.ElementRef }, { type: i0.Renderer2 }]; }, propDecorators: { flow: [{
                type: Input
            }] } });

class SrcDirective {
    constructor(el) {
        this.el = el;
        this.fileReader = new FileReader();
    }
    set flowSrc(transfer) {
        this.fileReader.readAsDataURL(transfer.flowFile.file);
        this.fileReader.onload = (event) => {
            const url = event.target.result;
            this.el.nativeElement.setAttribute('src', url);
        };
    }
}
SrcDirective.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "15.2.9", ngImport: i0, type: SrcDirective, deps: [{ token: i0.ElementRef }], target: i0.ɵɵFactoryTarget.Directive });
SrcDirective.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "14.0.0", version: "15.2.9", type: SrcDirective, selector: "[flowSrc]", inputs: { flowSrc: "flowSrc" }, ngImport: i0 });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "15.2.9", ngImport: i0, type: SrcDirective, decorators: [{
            type: Directive,
            args: [{
                    selector: '[flowSrc]'
                }]
        }], ctorParameters: function () { return [{ type: i0.ElementRef }]; }, propDecorators: { flowSrc: [{
                type: Input
            }] } });

const FlowInjectionToken = new InjectionToken('Flow');

function flowFile2Transfer(flowFile) {
    return {
        id: flowFile.uniqueIdentifier,
        name: flowFile.name,
        progress: flowFile.progress(),
        averageSpeed: flowFile.averageSpeed,
        currentSpeed: flowFile.currentSpeed,
        size: flowFile.size,
        paused: flowFile.paused,
        error: flowFile.error,
        complete: flowFile.isComplete(),
        success: flowFile.isComplete() && !flowFile.error,
        timeRemaining: flowFile.timeRemaining(),
        flowFile
    };
}

class FlowDirective {
    constructor(flowConstructor, platform) {
        this.flowConstructor = flowConstructor;
        this.platform = platform;
        this.flow$ = new ReplaySubject(1);
        this.pauseOrResumeEvent$ = new Subject();
        this.events$ = this.flow$.pipe(switchMap((flow) => merge(this.flowEvents(flow), this.ngxFlowEvents())));
        this.transfers$ = this.events$.pipe(map((_) => this.flowJs.files), map((files = []) => ({
            transfers: files.map((flowFile) => flowFile2Transfer(flowFile)),
            flow: this.flowJs,
            totalProgress: this.flowJs.progress(),
        })), shareReplay(1));
        this.somethingToUpload$ = this.transfers$.pipe(map((state) => state.transfers.some((file) => !file.success), startWith(false)));
    }
    set flowConfig(options) {
        if (isPlatformBrowser(this.platform)) {
            this.flowJs = new this.flowConstructor(options);
            this.flow$.next(this.flowJs);
        }
    }
    flowEvents(flow) {
        const events = [
            this.listenForEvent(flow, 'fileSuccess'),
            this.listenForEvent(flow, 'fileProgress'),
            this.listenForEvent(flow, 'fileAdded'),
            this.listenForEvent(flow, 'filesAdded'),
            this.listenForEvent(flow, 'filesSubmitted'),
            this.listenForEvent(flow, 'fileRemoved'),
            this.listenForEvent(flow, 'fileRetry'),
            this.listenForEvent(flow, 'fileError'),
            this.listenForEvent(flow, 'uploadStart'),
            this.listenForEvent(flow, 'complete'),
            this.listenForEvent(flow, 'progress'),
        ];
        return merge(...events);
    }
    ngxFlowEvents() {
        const pauseOrResumeEvent$ = this.pauseOrResumeEvent$.pipe(map((_) => ({
            type: 'pauseOrResume',
        })));
        const newFlowInstanceEvent$ = this.flow$.pipe(map((_) => ({
            type: 'newFlowJsInstance',
        })));
        const events = [pauseOrResumeEvent$, newFlowInstanceEvent$];
        return merge(...events);
    }
    upload() {
        this.flowJs.upload();
    }
    cancel() {
        this.flowJs.cancel();
    }
    cancelFile(file) {
        file.flowFile.cancel();
    }
    pauseFile(file) {
        file.flowFile.pause();
        this.pauseOrResumeEvent$.next();
    }
    resumeFile(file) {
        file.flowFile.resume();
        this.pauseOrResumeEvent$.next();
    }
    listenForEvent(flow, eventName) {
        return fromEvent(flow, eventName).pipe(map((args) => ({
            type: eventName,
            event: args,
        })));
    }
}
FlowDirective.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "15.2.9", ngImport: i0, type: FlowDirective, deps: [{ token: FlowInjectionToken }, { token: PLATFORM_ID }], target: i0.ɵɵFactoryTarget.Directive });
FlowDirective.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "14.0.0", version: "15.2.9", type: FlowDirective, selector: "[flowConfig]", inputs: { flowConfig: "flowConfig" }, exportAs: ["flow"], ngImport: i0 });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "15.2.9", ngImport: i0, type: FlowDirective, decorators: [{
            type: Directive,
            args: [{
                    selector: '[flowConfig]',
                    exportAs: 'flow',
                }]
        }], ctorParameters: function () { return [{ type: undefined, decorators: [{
                    type: Inject,
                    args: [FlowInjectionToken]
                }] }, { type: undefined, decorators: [{
                    type: Inject,
                    args: [PLATFORM_ID]
                }] }]; }, propDecorators: { flowConfig: [{
                type: Input
            }] } });

const directives = [
    ButtonDirective,
    SrcDirective,
    DropDirective,
    FlowDirective,
];
// export function flowFactory() {
//   return Flow;
// }
class NgxFlowModule {
}
NgxFlowModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "15.2.9", ngImport: i0, type: NgxFlowModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
NgxFlowModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "14.0.0", version: "15.2.9", ngImport: i0, type: NgxFlowModule, declarations: [ButtonDirective,
        SrcDirective,
        DropDirective,
        FlowDirective], exports: [ButtonDirective,
        SrcDirective,
        DropDirective,
        FlowDirective] });
NgxFlowModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "15.2.9", ngImport: i0, type: NgxFlowModule });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "15.2.9", ngImport: i0, type: NgxFlowModule, decorators: [{
            type: NgModule,
            args: [{
                    imports: [],
                    declarations: directives,
                    // providers: [
                    //   {
                    //     provide: FlowInjectionToken,
                    //     useFactory: flowFactory
                    //   }
                    // ],
                    exports: directives,
                }]
        }] });

/*
 * Public API Surface of ngx-flow
 */

/**
 * Generated bundle index. Do not edit.
 */

export { ButtonDirective, DropDirective, FlowDirective, FlowInjectionToken, NgxFlowModule, SrcDirective };
//# sourceMappingURL=flowjs-ngx-flow.mjs.map
