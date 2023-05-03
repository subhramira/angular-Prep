import { Component, OnInit } from '@angular/core';
import { BehaviorSubject, ReplaySubject, Subject } from 'rxjs';

@Component({
  selector: 'app-sub',
  templateUrl: './sub.component.html',
  styleUrls: ['./sub.component.css'],
  standalone: true,
})
export class SubComponent implements OnInit {
  mySub = new Subject<any>();
  myBehSub = new BehaviorSubject<any>(1);
  myRelSub = new ReplaySubject<any>();
  myRelSub2 = new ReplaySubject<any>(2)
  constructor() {}

  ngOnInit() {
    this.getSubject();
    this.getBehaviourSubject();
    this.getReplaySubject();
    this.getReplaySubject2()
  }

  /* subject */
  getSubject() {
    this.mySub.next(1)
    this.mySub.next(22)
    this.mySub.subscribe((res) => {
      console.log('sub1', res);
    });
    this.mySub.next(2);
    this.mySub.next(3);
    this.mySub.subscribe((res) => {
      console.log('sub2', res);
    });
    this.mySub.next(4);
  }

  /*Behavioursubject*/
  getBehaviourSubject(){
    this.myBehSub.next(2)
    this.myBehSub.subscribe((res)=> {
      console.log('behavsub1', res)
    })
    this.myBehSub.next(3)
    this.myBehSub.next(4)
    this.myBehSub.subscribe((res)=> {
      console.log('behavsub2', res)
    })
  }

  /*Replaysubject */

  getReplaySubject(){
    this.myRelSub.next(2);
    this.myRelSub.subscribe((res)=> {
      console.log('relaySub1', res)
    })
    this.myRelSub.next(3);
    this.myRelSub.subscribe((res)=> {
      console.log('relaySub2', res)
    })
    

  }

   /*Replaysubject keep customize value */

   getReplaySubject2(){
    this.myRelSub2.next('a');
    this.myRelSub2.next('b');
    this.myRelSub2.next('c');
    this.myRelSub2.subscribe((res)=> {
      console.log('relaySubc1', res)
    })
    this.myRelSub2.next('d');
    this.myRelSub2.next('e');
    this.myRelSub2.next('f');
    this.myRelSub2.subscribe((res)=> {
      console.log('relaySub2', res)
    })
  }
    
}
