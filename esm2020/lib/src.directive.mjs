import { Directive, Input } from '@angular/core';
import * as i0 from "@angular/core";
export class SrcDirective {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3JjLmRpcmVjdGl2ZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3Byb2plY3RzL25neC1mbG93L3NyYy9saWIvc3JjLmRpcmVjdGl2ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFjLEtBQUssRUFBRSxNQUFNLGVBQWUsQ0FBQzs7QUFNN0QsTUFBTSxPQUFPLFlBQVk7SUFZdkIsWUFBb0IsRUFBYztRQUFkLE9BQUUsR0FBRixFQUFFLENBQVk7UUFYeEIsZUFBVSxHQUFHLElBQUksVUFBVSxFQUFFLENBQUM7SUFXSCxDQUFDO0lBVHRDLElBQ0ksT0FBTyxDQUFDLFFBQWtCO1FBQzVCLElBQUksQ0FBQyxVQUFVLENBQUMsYUFBYSxDQUFDLFFBQVEsQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDdEQsSUFBSSxDQUFDLFVBQVUsQ0FBQyxNQUFNLEdBQUcsQ0FBQyxLQUFVLEVBQUUsRUFBRTtZQUN0QyxNQUFNLEdBQUcsR0FBRyxLQUFLLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQztZQUNoQyxJQUFJLENBQUMsRUFBRSxDQUFDLGFBQWEsQ0FBQyxZQUFZLENBQUMsS0FBSyxFQUFFLEdBQUcsQ0FBQyxDQUFDO1FBQ2pELENBQUMsQ0FBQztJQUNKLENBQUM7O3lHQVZVLFlBQVk7NkZBQVosWUFBWTsyRkFBWixZQUFZO2tCQUh4QixTQUFTO21CQUFDO29CQUNULFFBQVEsRUFBRSxXQUFXO2lCQUN0QjtpR0FLSyxPQUFPO3NCQURWLEtBQUsiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBEaXJlY3RpdmUsIEVsZW1lbnRSZWYsIElucHV0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBUcmFuc2ZlciB9IGZyb20gJy4vdHJhbnNmZXInO1xuXG5ARGlyZWN0aXZlKHtcbiAgc2VsZWN0b3I6ICdbZmxvd1NyY10nXG59KVxuZXhwb3J0IGNsYXNzIFNyY0RpcmVjdGl2ZSB7XG4gIHByb3RlY3RlZCBmaWxlUmVhZGVyID0gbmV3IEZpbGVSZWFkZXIoKTtcblxuICBASW5wdXQoKVxuICBzZXQgZmxvd1NyYyh0cmFuc2ZlcjogVHJhbnNmZXIpIHtcbiAgICB0aGlzLmZpbGVSZWFkZXIucmVhZEFzRGF0YVVSTCh0cmFuc2Zlci5mbG93RmlsZS5maWxlKTtcbiAgICB0aGlzLmZpbGVSZWFkZXIub25sb2FkID0gKGV2ZW50OiBhbnkpID0+IHtcbiAgICAgIGNvbnN0IHVybCA9IGV2ZW50LnRhcmdldC5yZXN1bHQ7XG4gICAgICB0aGlzLmVsLm5hdGl2ZUVsZW1lbnQuc2V0QXR0cmlidXRlKCdzcmMnLCB1cmwpO1xuICAgIH07XG4gIH1cblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIGVsOiBFbGVtZW50UmVmKSB7fVxufVxuIl19