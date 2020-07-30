import { Injectable, NgZone } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable()
export class Sse {

    constructor(private zone: NgZone) { }

    observe(sseUrl: string): Observable<any> {
        return new Observable<any>(obs => {
            const source = new EventSource(sseUrl);
            source.onmessage = (e) => {
                const data = JSON.parse(e.data);
                // new scope.$apply
                this.zone.run(() => obs.next(data));
            }
            return () => source.close();
        })
    }
}