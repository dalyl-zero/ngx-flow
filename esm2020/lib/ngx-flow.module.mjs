import { NgModule } from '@angular/core';
// import Flow from '@flowjs/flow.js';
import { ButtonDirective } from './button.directive.mjs';
import { DropDirective } from './drop.directive.mjs';
import { FlowDirective } from './flow.directive.mjs';
import { SrcDirective } from './src.directive.mjs';
import * as i0 from "@angular/core";
const directives = [
    ButtonDirective,
    SrcDirective,
    DropDirective,
    FlowDirective,
];
// export function flowFactory() {
//   return Flow;
// }
export class NgxFlowModule {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmd4LWZsb3cubW9kdWxlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vcHJvamVjdHMvbmd4LWZsb3cvc3JjL2xpYi9uZ3gtZmxvdy5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUN6QyxzQ0FBc0M7QUFDdEMsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLG9CQUFvQixDQUFDO0FBQ3JELE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSxrQkFBa0IsQ0FBQztBQUVqRCxPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sa0JBQWtCLENBQUM7QUFDakQsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGlCQUFpQixDQUFDOztBQUUvQyxNQUFNLFVBQVUsR0FBRztJQUNqQixlQUFlO0lBQ2YsWUFBWTtJQUNaLGFBQWE7SUFDYixhQUFhO0NBQ2QsQ0FBQztBQUNGLGtDQUFrQztBQUNsQyxpQkFBaUI7QUFDakIsSUFBSTtBQWFKLE1BQU0sT0FBTyxhQUFhOzswR0FBYixhQUFhOzJHQUFiLGFBQWEsaUJBcEJ4QixlQUFlO1FBQ2YsWUFBWTtRQUNaLGFBQWE7UUFDYixhQUFhLGFBSGIsZUFBZTtRQUNmLFlBQVk7UUFDWixhQUFhO1FBQ2IsYUFBYTsyR0FpQkYsYUFBYTsyRkFBYixhQUFhO2tCQVh6QixRQUFRO21CQUFDO29CQUNSLE9BQU8sRUFBRSxFQUFFO29CQUNYLFlBQVksRUFBRSxVQUFVO29CQUN4QixlQUFlO29CQUNmLE1BQU07b0JBQ04sbUNBQW1DO29CQUNuQyw4QkFBOEI7b0JBQzlCLE1BQU07b0JBQ04sS0FBSztvQkFDTCxPQUFPLEVBQUUsVUFBVTtpQkFDcEIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuLy8gaW1wb3J0IEZsb3cgZnJvbSAnQGZsb3dqcy9mbG93LmpzJztcbmltcG9ydCB7IEJ1dHRvbkRpcmVjdGl2ZSB9IGZyb20gJy4vYnV0dG9uLmRpcmVjdGl2ZSc7XG5pbXBvcnQgeyBEcm9wRGlyZWN0aXZlIH0gZnJvbSAnLi9kcm9wLmRpcmVjdGl2ZSc7XG5pbXBvcnQgeyBGbG93SW5qZWN0aW9uVG9rZW4gfSBmcm9tICcuL2Zsb3ctaW5qZWN0aW9uLXRva2VuJztcbmltcG9ydCB7IEZsb3dEaXJlY3RpdmUgfSBmcm9tICcuL2Zsb3cuZGlyZWN0aXZlJztcbmltcG9ydCB7IFNyY0RpcmVjdGl2ZSB9IGZyb20gJy4vc3JjLmRpcmVjdGl2ZSc7XG5cbmNvbnN0IGRpcmVjdGl2ZXMgPSBbXG4gIEJ1dHRvbkRpcmVjdGl2ZSxcbiAgU3JjRGlyZWN0aXZlLFxuICBEcm9wRGlyZWN0aXZlLFxuICBGbG93RGlyZWN0aXZlLFxuXTtcbi8vIGV4cG9ydCBmdW5jdGlvbiBmbG93RmFjdG9yeSgpIHtcbi8vICAgcmV0dXJuIEZsb3c7XG4vLyB9XG5cbkBOZ01vZHVsZSh7XG4gIGltcG9ydHM6IFtdLFxuICBkZWNsYXJhdGlvbnM6IGRpcmVjdGl2ZXMsXG4gIC8vIHByb3ZpZGVyczogW1xuICAvLyAgIHtcbiAgLy8gICAgIHByb3ZpZGU6IEZsb3dJbmplY3Rpb25Ub2tlbixcbiAgLy8gICAgIHVzZUZhY3Rvcnk6IGZsb3dGYWN0b3J5XG4gIC8vICAgfVxuICAvLyBdLFxuICBleHBvcnRzOiBkaXJlY3RpdmVzLFxufSlcbmV4cG9ydCBjbGFzcyBOZ3hGbG93TW9kdWxlIHt9XG4iXX0=