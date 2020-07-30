import { Component, OnInit, OnDestroy } from '@angular/core';
import { Sse } from '../sse';

@Component({
  selector: 'app-controller',
  templateUrl: './controller.component.html',
  styleUrls: ['./controller.component.css'],
  providers: [Sse]
})
export class ControllerComponent implements OnInit, OnDestroy {

  stocks: any = {};
  sseSubscription;

  constructor(private sse: Sse) {}

  ngOnInit() {
    this.sseSubscription = this.sse.observe('//localhost:5000/stream-data').subscribe(d => {
      console.log('CONTROLLER', d);
      this.stocks[d.symbol] = {
        'timestamp': d.timestamp,
        'bid': d.bid,
        'ask': d.ask
      }
    })
  }

  ngOnDestroy() {
    this.sseSubscription.unsubscribe();
  }

}
