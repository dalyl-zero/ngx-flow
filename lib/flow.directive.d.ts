/// <reference types="flowjs" />
import { Observable, ReplaySubject, Subject } from 'rxjs';
import { Transfer } from './transfer';
import { UploadState } from './upload-state';
import { FlowConstructor } from './flow-constructor';
import * as i0 from "@angular/core";
export interface FlowChangeEvent<T extends flowjs.EventName> {
    type: T;
    event: flowjs.FlowEventFromEventName<T>;
}
export interface NgxFlowEvent {
    type: 'pauseOrResume' | 'newFlowJsInstance';
}
export declare class FlowDirective {
    protected flowConstructor: FlowConstructor;
    protected platform: any;
    set flowConfig(options: flowjs.FlowOptions);
    flowJs: flowjs.Flow;
    protected flow$: ReplaySubject<import("flowjs").Flow>;
    pauseOrResumeEvent$: Subject<void>;
    events$: Observable<NgxFlowEvent | FlowChangeEvent<keyof import("flowjs").FlowEventMap>>;
    transfers$: Observable<UploadState>;
    somethingToUpload$: Observable<boolean>;
    constructor(flowConstructor: FlowConstructor, platform: any);
    private flowEvents;
    private ngxFlowEvents;
    upload(): void;
    cancel(): void;
    cancelFile(file: Transfer): void;
    pauseFile(file: Transfer): void;
    resumeFile(file: Transfer): void;
    protected listenForEvent<T extends flowjs.EventName, R extends flowjs.FlowEventFromEventName<T>>(flow: flowjs.Flow, eventName: T): Observable<{
        type: T;
        event: R;
    }>;
    static ɵfac: i0.ɵɵFactoryDeclaration<FlowDirective, never>;
    static ɵdir: i0.ɵɵDirectiveDeclaration<FlowDirective, "[flowConfig]", ["flow"], { "flowConfig": "flowConfig"; }, {}, never, never, false, never>;
}
