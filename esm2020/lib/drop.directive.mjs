import { Directive, Input } from '@angular/core';
import * as i0 from "@angular/core";
export class DropDirective {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZHJvcC5kaXJlY3RpdmUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9wcm9qZWN0cy9uZ3gtZmxvdy9zcmMvbGliL2Ryb3AuZGlyZWN0aXZlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFpQyxNQUFNLGVBQWUsQ0FBQzs7QUFNaEYsTUFBTSxPQUFPLGFBQWE7SUFvQnhCLFlBQXNCLEVBQWMsRUFBWSxRQUFtQjtRQUE3QyxPQUFFLEdBQUYsRUFBRSxDQUFZO1FBQVksYUFBUSxHQUFSLFFBQVEsQ0FBVztJQUFHLENBQUM7SUFqQnZFLElBQ0ksSUFBSSxDQUFDLElBQWlCO1FBQ3hCLElBQUksQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDO1FBQ25CLElBQUksQ0FBQyxJQUFJLEVBQUU7WUFDVCxPQUFPO1NBQ1I7UUFDRCxJQUFJLENBQUMsTUFBTSxFQUFFLENBQUM7SUFDaEIsQ0FBQztJQUVELE1BQU07UUFDSixJQUFJLENBQUMsTUFBTSxFQUFFLFVBQVUsQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLGFBQWEsQ0FBQyxDQUFDO0lBQ2pELENBQUM7SUFFRCxPQUFPO1FBQ0wsSUFBSSxDQUFDLE1BQU0sRUFBRSxZQUFZLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxhQUFhLENBQUMsQ0FBQztJQUNuRCxDQUFDO0lBSUQsUUFBUTtRQUNOLElBQUksQ0FBQyxRQUFRLENBQUMsTUFBTSxDQUFDLE1BQU0sRUFBRSxNQUFNLEVBQUUsQ0FBQyxLQUFLLEVBQUUsRUFBRSxDQUFDLEtBQUssQ0FBQyxjQUFjLEVBQUUsQ0FBQyxDQUFDO1FBQ3hFLElBQUksQ0FBQyxRQUFRLENBQUMsTUFBTSxDQUFDLE1BQU0sRUFBRSxVQUFVLEVBQUUsQ0FBQyxLQUFLLEVBQUUsRUFBRSxDQUFDLEtBQUssQ0FBQyxjQUFjLEVBQUUsQ0FBQyxDQUFDO0lBQzlFLENBQUM7OzBHQXpCVSxhQUFhOzhGQUFiLGFBQWE7MkZBQWIsYUFBYTtrQkFKekIsU0FBUzttQkFBQztvQkFDVCxRQUFRLEVBQUUsWUFBWTtvQkFDdEIsUUFBUSxFQUFFLFVBQVU7aUJBQ3JCO3lIQUtLLElBQUk7c0JBRFAsS0FBSyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IERpcmVjdGl2ZSwgSW5wdXQsIEVsZW1lbnRSZWYsIFJlbmRlcmVyMiwgT25Jbml0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbkBEaXJlY3RpdmUoe1xuICBzZWxlY3RvcjogJ1tmbG93RHJvcF0nLFxuICBleHBvcnRBczogJ2Zsb3dEcm9wJyxcbn0pXG5leHBvcnQgY2xhc3MgRHJvcERpcmVjdGl2ZSBpbXBsZW1lbnRzIE9uSW5pdCB7XG4gIHByb3RlY3RlZCBmbG93SnM/OiBmbG93anMuRmxvdztcblxuICBASW5wdXQoKVxuICBzZXQgZmxvdyhmbG93OiBmbG93anMuRmxvdykge1xuICAgIHRoaXMuZmxvd0pzID0gZmxvdztcbiAgICBpZiAoIWZsb3cpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgdGhpcy5lbmFibGUoKTtcbiAgfVxuXG4gIGVuYWJsZSgpIHtcbiAgICB0aGlzLmZsb3dKcz8uYXNzaWduRHJvcCh0aGlzLmVsLm5hdGl2ZUVsZW1lbnQpO1xuICB9XG5cbiAgZGlzYWJsZSgpIHtcbiAgICB0aGlzLmZsb3dKcz8udW5Bc3NpZ25Ecm9wKHRoaXMuZWwubmF0aXZlRWxlbWVudCk7XG4gIH1cblxuICBjb25zdHJ1Y3Rvcihwcm90ZWN0ZWQgZWw6IEVsZW1lbnRSZWYsIHByb3RlY3RlZCByZW5kZXJlcjogUmVuZGVyZXIyKSB7fVxuXG4gIG5nT25Jbml0KCkge1xuICAgIHRoaXMucmVuZGVyZXIubGlzdGVuKCdib2R5JywgJ2Ryb3AnLCAoZXZlbnQpID0+IGV2ZW50LnByZXZlbnREZWZhdWx0KCkpO1xuICAgIHRoaXMucmVuZGVyZXIubGlzdGVuKCdib2R5JywgJ2RyYWdvdmVyJywgKGV2ZW50KSA9PiBldmVudC5wcmV2ZW50RGVmYXVsdCgpKTtcbiAgfVxufVxuIl19