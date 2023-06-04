import { Directive, Input } from '@angular/core';
import * as i0 from "@angular/core";
export class ButtonDirective {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnV0dG9uLmRpcmVjdGl2ZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3Byb2plY3RzL25neC1mbG93L3NyYy9saWIvYnV0dG9uLmRpcmVjdGl2ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFjLEtBQUssRUFBRSxNQUFNLGVBQWUsQ0FBQzs7QUFLN0QsTUFBTSxPQUFPLGVBQWU7SUFrQzFCLFlBQXNCLEVBQWM7UUFBZCxPQUFFLEdBQUYsRUFBRSxDQUFZO1FBakMxQixtQkFBYyxHQUFHLEtBQUssQ0FBQztJQWlDTSxDQUFDO0lBaEN4QyxJQUNJLGlCQUFpQixDQUFDLGVBQXdCO1FBQzVDLElBQUksQ0FBQyxjQUFjLEdBQUcsZUFBZSxDQUFDO1FBQ3RDLElBQUksQ0FBQyxLQUFLLEVBQUUsQ0FBQztJQUNmLENBQUM7SUFHRCxJQUNJLGNBQWMsQ0FBQyxVQUFrQjtRQUNuQyxJQUFJLENBQUMsV0FBVyxHQUFHLFVBQVUsQ0FBQztRQUM5QixJQUFJLENBQUMsS0FBSyxFQUFFLENBQUM7SUFDZixDQUFDO0lBR0QsSUFDSSxJQUFJLENBQUMsSUFBaUI7UUFDeEIsSUFBSSxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUM7UUFDbEIsSUFBSSxDQUFDLEtBQUssRUFBRSxDQUFDO0lBQ2YsQ0FBQztJQUVELEtBQUs7UUFDSCxJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssRUFBRTtZQUNmLE9BQU87U0FDUjtRQUNELElBQUksQ0FBQyxLQUFLLENBQUMsWUFBWSxDQUNyQixJQUFJLENBQUMsRUFBRSxDQUFDLGFBQWEsRUFDckIsSUFBSSxDQUFDLGNBQWMsRUFDbkIsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsVUFBVSxFQUMxQixJQUFJLENBQUMsV0FBVyxDQUNqQixDQUFDO0lBQ0osQ0FBQzs7NEdBaENVLGVBQWU7Z0dBQWYsZUFBZTsyRkFBZixlQUFlO2tCQUgzQixTQUFTO21CQUFDO29CQUNULFFBQVEsRUFBRSxjQUFjO2lCQUN6QjtpR0FJSyxpQkFBaUI7c0JBRHBCLEtBQUs7Z0JBUUYsY0FBYztzQkFEakIsS0FBSztnQkFRRixJQUFJO3NCQURQLEtBQUsiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBEaXJlY3RpdmUsIEVsZW1lbnRSZWYsIElucHV0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbkBEaXJlY3RpdmUoe1xuICBzZWxlY3RvcjogJ1tmbG93QnV0dG9uXScsXG59KVxuZXhwb3J0IGNsYXNzIEJ1dHRvbkRpcmVjdGl2ZSB7XG4gIHByb3RlY3RlZCBfZGlyZWN0b3J5T25seSA9IGZhbHNlO1xuICBASW5wdXQoKVxuICBzZXQgZmxvd0RpcmVjdG9yeU9ubHkoZGlyZWN0b3JpZXNPbmx5OiBib29sZWFuKSB7XG4gICAgdGhpcy5fZGlyZWN0b3J5T25seSA9IGRpcmVjdG9yaWVzT25seTtcbiAgICB0aGlzLnNldHVwKCk7XG4gIH1cblxuICBwcm90ZWN0ZWQgX2F0dHJpYnV0ZXM/OiBvYmplY3Q7XG4gIEBJbnB1dCgpXG4gIHNldCBmbG93QXR0cmlidXRlcyhhdHRyaWJ1dGVzOiBvYmplY3QpIHtcbiAgICB0aGlzLl9hdHRyaWJ1dGVzID0gYXR0cmlidXRlcztcbiAgICB0aGlzLnNldHVwKCk7XG4gIH1cblxuICBwcm90ZWN0ZWQgX2Zsb3c/OiBmbG93anMuRmxvdztcbiAgQElucHV0KClcbiAgc2V0IGZsb3coZmxvdzogZmxvd2pzLkZsb3cpIHtcbiAgICB0aGlzLl9mbG93ID0gZmxvdztcbiAgICB0aGlzLnNldHVwKCk7XG4gIH1cblxuICBzZXR1cCgpIHtcbiAgICBpZiAoIXRoaXMuX2Zsb3cpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgdGhpcy5fZmxvdy5hc3NpZ25Ccm93c2UoXG4gICAgICB0aGlzLmVsLm5hdGl2ZUVsZW1lbnQsXG4gICAgICB0aGlzLl9kaXJlY3RvcnlPbmx5LFxuICAgICAgdGhpcy5fZmxvdy5vcHRzLnNpbmdsZUZpbGUsXG4gICAgICB0aGlzLl9hdHRyaWJ1dGVzXG4gICAgKTtcbiAgfVxuXG4gIGNvbnN0cnVjdG9yKHByb3RlY3RlZCBlbDogRWxlbWVudFJlZikge31cbn1cbiJdfQ==