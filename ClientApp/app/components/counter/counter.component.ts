import { Component } from '@angular/core';

@Component({
    selector: 'counter',
    templateUrl: './counter.component.html',
    styleUrls: ['./counter.component.less']
})
export class CounterComponent {
    public currentCount = 0;

    public incrementCounter() {
        this.currentCount += 5;
    }
}
