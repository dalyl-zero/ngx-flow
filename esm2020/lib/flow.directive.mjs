import { Directive, Inject, Input, PLATFORM_ID } from '@angular/core';
import { fromEvent, merge, ReplaySubject, Subject } from 'rxjs';
import { map, shareReplay, startWith, switchMap } from 'rxjs/operators';
import { FlowInjectionToken } from './flow-injection-token.mjs';
import { flowFile2Transfer } from './helpers/flow-file-to-transfer.mjs';
import { isPlatformBrowser } from '@angular/common';
import * as i0 from "@angular/core";
export class FlowDirective {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmxvdy5kaXJlY3RpdmUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9wcm9qZWN0cy9uZ3gtZmxvdy9zcmMvbGliL2Zsb3cuZGlyZWN0aXZlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsTUFBTSxFQUFFLEtBQUssRUFBRSxXQUFXLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDdEUsT0FBTyxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQWMsYUFBYSxFQUFFLE9BQU8sRUFBRSxNQUFNLE1BQU0sQ0FBQztBQUM1RSxPQUFPLEVBQUUsR0FBRyxFQUFFLFdBQVcsRUFBRSxTQUFTLEVBQUUsU0FBUyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDeEUsT0FBTyxFQUFFLGtCQUFrQixFQUFFLE1BQU0sd0JBQXdCLENBQUM7QUFDNUQsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0saUNBQWlDLENBQUM7QUFHcEUsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0saUJBQWlCLENBQUM7O0FBaUJwRCxNQUFNLE9BQU8sYUFBYTtJQW9DeEIsWUFDd0MsZUFBZ0MsRUFDdkMsUUFBYTtRQUROLG9CQUFlLEdBQWYsZUFBZSxDQUFpQjtRQUN2QyxhQUFRLEdBQVIsUUFBUSxDQUFLO1FBM0JwQyxVQUFLLEdBQUcsSUFBSSxhQUFhLENBQWMsQ0FBQyxDQUFDLENBQUM7UUFFcEQsd0JBQW1CLEdBQUcsSUFBSSxPQUFPLEVBQVEsQ0FBQztRQUUxQyxZQUFPLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQ3ZCLFNBQVMsQ0FBQyxDQUFDLElBQUksRUFBRSxFQUFFLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLEVBQUUsSUFBSSxDQUFDLGFBQWEsRUFBRSxDQUFDLENBQUMsQ0FDeEUsQ0FBQztRQUVGLGVBQVUsR0FBNEIsSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENB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SSxDQUFDLE1BQU0sQ0FBQyxNQUFNLEVBQUUsQ0FBQztJQUN2QixDQUFDO0lBRUQsTUFBTTtRQUNKLElBQUksQ0FBQyxNQUFNLENBQUMsTUFBTSxFQUFFLENBQUM7SUFDdkIsQ0FBQztJQUVELFVBQVUsQ0FBQyxJQUFjO1FBQ3ZCLElBQUksQ0FBQyxRQUFRLENBQUMsTUFBTSxFQUFFLENBQUM7SUFDekIsQ0FBQztJQUVELFNBQVMsQ0FBQyxJQUFjO1FBQ3RCLElBQUksQ0FBQyxRQUFRLENBQUMsS0FBSyxFQUFFLENBQUM7UUFDdEIsSUFBSSxDQUFDLG1CQUFtQixDQUFDLElBQUksRUFBRSxDQUFDO0lBQ2xDLENBQUM7SUFFRCxVQUFVLENBQUMsSUFBYztRQUN2QixJQUFJLENBQUMsUUFBUSxDQUFDLE1BQU0sRUFBRSxDQUFDO1FBQ3ZCLElBQUksQ0FBQyxtQkFBbUIsQ0FBQyxJQUFJLEVBQUUsQ0FBQztJQUNsQyxDQUFDO0lBRVMsY0FBYyxDQUN0QixJQUFpQixFQUNqQixTQUFZO1FBRVosT0FBTyxTQUFTLENBQ2QsSUFBdUMsRUFDdkMsU0FBUyxDQUNWLENBQUMsSUFBSSxDQUNKLEdBQUcsQ0FBQyxDQUFDLElBQUksRUFBRSxFQUFFLENBQUMsQ0FBQztZQUNiLElBQUksRUFBRSxTQUFTO1lBQ2YsS0FBSyxFQUFFLElBQUk7U0FDWixDQUFDLENBQUMsQ0FDSixDQUFDO0lBQ0osQ0FBQzs7MEdBcEhVLGFBQWEsa0JBcUNkLGtCQUFrQixhQUNsQixXQUFXOzhGQXRDVixhQUFhOzJGQUFiLGFBQWE7a0JBSnpCLFNBQVM7bUJBQUM7b0JBQ1QsUUFBUSxFQUFFLGNBQWM7b0JBQ3hCLFFBQVEsRUFBRSxNQUFNO2lCQUNqQjs7MEJBc0NJLE1BQU07MkJBQUMsa0JBQWtCOzswQkFDekIsTUFBTTsyQkFBQyxXQUFXOzRDQXBDakIsVUFBVTtzQkFEYixLQUFLIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRGlyZWN0aXZlLCBJbmplY3QsIElucHV0LCBQTEFURk9STV9JRCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgZnJvbUV2ZW50LCBtZXJnZSwgT2JzZXJ2YWJsZSwgUmVwbGF5U3ViamVjdCwgU3ViamVjdCB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgbWFwLCBzaGFyZVJlcGxheSwgc3RhcnRXaXRoLCBzd2l0Y2hNYXAgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5pbXBvcnQgeyBGbG93SW5qZWN0aW9uVG9rZW4gfSBmcm9tICcuL2Zsb3ctaW5qZWN0aW9uLXRva2VuJztcbmltcG9ydCB7IGZsb3dGaWxlMlRyYW5zZmVyIH0gZnJvbSAnLi9oZWxwZXJzL2Zsb3ctZmlsZS10by10cmFuc2Zlcic7XG5pbXBvcnQgeyBUcmFuc2ZlciB9IGZyb20gJy4vdHJhbnNmZXInO1xuaW1wb3J0IHsgVXBsb2FkU3RhdGUgfSBmcm9tICcuL3VwbG9hZC1zdGF0ZSc7XG5pbXBvcnQgeyBpc1BsYXRmb3JtQnJvd3NlciB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5pbXBvcnQgeyBGbG93Q29uc3RydWN0b3IgfSBmcm9tICcuL2Zsb3ctY29uc3RydWN0b3InO1xuaW1wb3J0IHsgSlF1ZXJ5U3R5bGVFdmVudEVtaXR0ZXIgfSBmcm9tICdyeGpzL2ludGVybmFsL29ic2VydmFibGUvZnJvbUV2ZW50JztcblxuZXhwb3J0IGludGVyZmFjZSBGbG93Q2hhbmdlRXZlbnQ8VCBleHRlbmRzIGZsb3dqcy5FdmVudE5hbWU+IHtcbiAgdHlwZTogVDtcbiAgZXZlbnQ6IGZsb3dqcy5GbG93RXZlbnRGcm9tRXZlbnROYW1lPFQ+O1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIE5neEZsb3dFdmVudCB7XG4gIHR5cGU6ICdwYXVzZU9yUmVzdW1lJyB8ICduZXdGbG93SnNJbnN0YW5jZSc7XG59XG5cbkBEaXJlY3RpdmUoe1xuICBzZWxlY3RvcjogJ1tmbG93Q29uZmlnXScsXG4gIGV4cG9ydEFzOiAnZmxvdycsXG59KVxuZXhwb3J0IGNsYXNzIEZsb3dEaXJlY3RpdmUge1xuICBASW5wdXQoKVxuICBzZXQgZmxvd0NvbmZpZyhvcHRpb25zOiBmbG93anMuRmxvd09wdGlvbnMpIHtcbiAgICBpZiAoaXNQbGF0Zm9ybUJyb3dzZXIodGhpcy5wbGF0Zm9ybSkpIHtcbiAgICAgIHRoaXMuZmxvd0pzID0gbmV3IHRoaXMuZmxvd0NvbnN0cnVjdG9yKG9wdGlvbnMpO1xuICAgICAgdGhpcy5mbG93JC5uZXh0KHRoaXMuZmxvd0pzKTtcbiAgICB9XG4gIH1cblxuICBmbG93SnMhOiBmbG93anMuRmxvdztcblxuICBwcm90ZWN0ZWQgZmxvdyQgPSBuZXcgUmVwbGF5U3ViamVjdDxmbG93anMuRmxvdz4oMSk7XG5cbiAgcGF1c2VPclJlc3VtZUV2ZW50JCA9IG5ldyBTdWJqZWN0PHZvaWQ+KCk7XG5cbiAgZXZlbnRzJCA9IHRoaXMuZmxvdyQucGlwZShcbiAgICBzd2l0Y2hNYXAoKGZsb3cpID0+IG1lcmdlKHRoaXMuZmxvd0V2ZW50cyhmbG93KSwgdGhpcy5uZ3hGbG93RXZlbnRzKCkpKVxuICApO1xuXG4gIHRyYW5zZmVycyQ6IE9ic2VydmFibGU8VXBsb2FkU3RhdGU+ID0gdGhpcy5ldmVudHMkLnBpcGUoXG4gICAgbWFwKChfKSA9PiB0aGlzLmZsb3dKcy5maWxlcyksXG4gICAgbWFwKChmaWxlczogZmxvd2pzLkZsb3dGaWxlW10gPSBbXSkgPT4gKHtcbiAgICAgIHRyYW5zZmVyczogZmlsZXMubWFwKChmbG93RmlsZSkgPT4gZmxvd0ZpbGUyVHJhbnNmZXIoZmxvd0ZpbGUpKSxcbiAgICAgIGZsb3c6IHRoaXMuZmxvd0pzLFxuICAgICAgdG90YWxQcm9ncmVzczogdGhpcy5mbG93SnMucHJvZ3Jlc3MoKSxcbiAgICB9KSksXG4gICAgc2hhcmVSZXBsYXkoMSlcbiAgKTtcblxuICBzb21ldGhpbmdUb1VwbG9hZCQgPSB0aGlzLnRyYW5zZmVycyQucGlwZShcbiAgICBtYXAoXG4gICAgICAoc3RhdGUpID0+IHN0YXRlLnRyYW5zZmVycy5zb21lKChmaWxlKSA9PiAhZmlsZS5zdWNjZXNzKSxcbiAgICAgIHN0YXJ0V2l0aChmYWxzZSlcbiAgICApXG4gICk7XG5cbiAgY29uc3RydWN0b3IoXG4gICAgQEluamVjdChGbG93SW5qZWN0aW9uVG9rZW4pIHByb3RlY3RlZCBmbG93Q29uc3RydWN0b3I6IEZsb3dDb25zdHJ1Y3RvcixcbiAgICBASW5qZWN0KFBMQVRGT1JNX0lEKSBwcm90ZWN0ZWQgcGxhdGZvcm06IGFueVxuICApIHt9XG5cbiAgcHJpdmF0ZSBmbG93RXZlbnRzKFxuICAgIGZsb3c6IGZsb3dqcy5GbG93XG4gICk6IE9ic2VydmFibGU8Rmxvd0NoYW5nZUV2ZW50PGZsb3dqcy5FdmVudE5hbWU+PiB7XG4gICAgY29uc3QgZXZlbnRzID0gW1xuICAgICAgdGhpcy5saXN0ZW5Gb3JFdmVudChmbG93LCAnZmlsZVN1Y2Nlc3MnKSxcbiAgICAgIHRoaXMubGlzdGVuRm9yRXZlbnQoZmxvdywgJ2ZpbGVQcm9ncmVzcycpLFxuICAgICAgdGhpcy5saXN0ZW5Gb3JFdmVudChmbG93LCAnZmlsZUFkZGVkJyksXG4gICAgICB0aGlzLmxpc3RlbkZvckV2ZW50KGZsb3csICdmaWxlc0FkZGVkJyksXG4gICAgICB0aGlzLmxpc3RlbkZvckV2ZW50KGZsb3csICdmaWxlc1N1Ym1pdHRlZCcpLFxuICAgICAgdGhpcy5saXN0ZW5Gb3JFdmVudChmbG93LCAnZmlsZVJlbW92ZWQnKSxcbiAgICAgIHRoaXMubGlzdGVuRm9yRXZlbnQoZmxvdywgJ2ZpbGVSZXRyeScpLFxuICAgICAgdGhpcy5saXN0ZW5Gb3JFdmVudChmbG93LCAnZmlsZUVycm9yJyksXG4gICAgICB0aGlzLmxpc3RlbkZvckV2ZW50KGZsb3csICd1cGxvYWRTdGFydCcpLFxuICAgICAgdGhpcy5saXN0ZW5Gb3JFdmVudChmbG93LCAnY29tcGxldGUnKSxcbiAgICAgIHRoaXMubGlzdGVuRm9yRXZlbnQoZmxvdywgJ3Byb2dyZXNzJyksXG4gICAgXTtcbiAgICByZXR1cm4gbWVyZ2UoLi4uZXZlbnRzKTtcbiAgfVxuXG4gIHByaXZhdGUgbmd4Rmxvd0V2ZW50cygpOiBPYnNlcnZhYmxlPE5neEZsb3dFdmVudD4ge1xuICAgIGNvbnN0IHBhdXNlT3JSZXN1bWVFdmVudCQgPSB0aGlzLnBhdXNlT3JSZXN1bWVFdmVudCQucGlwZShcbiAgICAgIG1hcChcbiAgICAgICAgKF8pID0+XG4gICAgICAgICAgKHtcbiAgICAgICAgICAgIHR5cGU6ICdwYXVzZU9yUmVzdW1lJyxcbiAgICAgICAgICB9IGFzIE5neEZsb3dFdmVudClcbiAgICAgIClcbiAgICApO1xuICAgIGNvbnN0IG5ld0Zsb3dJbnN0YW5jZUV2ZW50JCA9IHRoaXMuZmxvdyQucGlwZShcbiAgICAgIG1hcChcbiAgICAgICAgKF8pID0+XG4gICAgICAgICAgKHtcbiAgICAgICAgICAgIHR5cGU6ICduZXdGbG93SnNJbnN0YW5jZScsXG4gICAgICAgICAgfSBhcyBOZ3hGbG93RXZlbnQpXG4gICAgICApXG4gICAgKTtcbiAgICBjb25zdCBldmVudHMgPSBbcGF1c2VPclJlc3VtZUV2ZW50JCwgbmV3Rmxvd0luc3RhbmNlRXZlbnQkXTtcbiAgICByZXR1cm4gbWVyZ2UoLi4uZXZlbnRzKTtcbiAgfVxuXG4gIHVwbG9hZCgpOiB2b2lkIHtcbiAgICB0aGlzLmZsb3dKcy51cGxvYWQoKTtcbiAgfVxuXG4gIGNhbmNlbCgpOiB2b2lkIHtcbiAgICB0aGlzLmZsb3dKcy5jYW5jZWwoKTtcbiAgfVxuXG4gIGNhbmNlbEZpbGUoZmlsZTogVHJhbnNmZXIpOiB2b2lkIHtcbiAgICBmaWxlLmZsb3dGaWxlLmNhbmNlbCgpO1xuICB9XG5cbiAgcGF1c2VGaWxlKGZpbGU6IFRyYW5zZmVyKTogdm9pZCB7XG4gICAgZmlsZS5mbG93RmlsZS5wYXVzZSgpO1xuICAgIHRoaXMucGF1c2VPclJlc3VtZUV2ZW50JC5uZXh0KCk7XG4gIH1cblxuICByZXN1bWVGaWxlKGZpbGU6IFRyYW5zZmVyKTogdm9pZCB7XG4gICAgZmlsZS5mbG93RmlsZS5yZXN1bWUoKTtcbiAgICB0aGlzLnBhdXNlT3JSZXN1bWVFdmVudCQubmV4dCgpO1xuICB9XG5cbiAgcHJvdGVjdGVkIGxpc3RlbkZvckV2ZW50PFQgZXh0ZW5kcyBmbG93anMuRXZlbnROYW1lLCBSIGV4dGVuZHMgZmxvd2pzLkZsb3dFdmVudEZyb21FdmVudE5hbWU8VD4+KFxuICAgIGZsb3c6IGZsb3dqcy5GbG93LFxuICAgIGV2ZW50TmFtZTogVFxuICApOiBPYnNlcnZhYmxlPHsgdHlwZTogVDsgZXZlbnQ6IFIgfT4ge1xuICAgIHJldHVybiBmcm9tRXZlbnQ8Uj4oXG4gICAgICBmbG93IGFzIEpRdWVyeVN0eWxlRXZlbnRFbWl0dGVyPGFueSwgUj4sXG4gICAgICBldmVudE5hbWVcbiAgICApLnBpcGUoXG4gICAgICBtYXAoKGFyZ3MpID0+ICh7XG4gICAgICAgIHR5cGU6IGV2ZW50TmFtZSxcbiAgICAgICAgZXZlbnQ6IGFyZ3MsXG4gICAgICB9KSlcbiAgICApO1xuICB9XG59XG4iXX0=