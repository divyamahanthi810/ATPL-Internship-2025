import { Component } from '@angular/core';
import { Observable,filter,map } from 'rxjs';
import { of } from 'rxjs';
import { from } from 'rxjs';
import { Subject } from 'rxjs';
import { BehaviorSubject } from 'rxjs';
import { AsyncPipe } from '@angular/common';
import { CommonModule } from '@angular/common';
import { NzButtonModule } from 'ng-zorro-antd/button';

@Component({
  selector: 'app-pratice',
  imports: [AsyncPipe,CommonModule,NzButtonModule],
  template:`<li *ngFor="let item of outputData">{{ item }}</li>`,
})
export class Pratice {
outputData: any[] = [];
// ngonInit(){
//         const observable = of(1, 2, 3, 4, 5).pipe(
//             map(data => data *2)
//         ).subscribe(data => {
//             this.outputData.push(data);
//             console.log(data); 
//         });
//     }
// constructor(){
//         const source = from([1, 2, 3, 4, 5]);
// const doubled = source.pipe(map(value => value * 2));
// doubled.subscribe(result => {
//     this.outputData.push(result);
//     console.log(result)});
//         };
// constructor(){
// const subject = new Subject<number>();
// subject.subscribe(data => console.log(`Observer 1: ${data}`));
// subject.next(1); // Observer 1: 1
// subject.subscribe(data => console.log(`Observer 2: ${data}`));
// subject.next(2); // Observer 1: 2, Observer 2: 2
// subject.subscribe(data => console.log(`Observer 3: ${data}`));
// subject.next(3); // Observer 1: 2, Observer 2: 2
//     }
// constructor(){
//     const behaviorSubject = new BehaviorSubject<number>(0);
// behaviorSubject.subscribe(data => {this.outputData.push(data),console.log(`Observer 1: ${data}`)});
// behaviorSubject.next(1); // Observer 1: 1
// behaviorSubject.subscribe(data => {this.outputData.push(data),console.log(`Observer 2: ${data}`)});
// behaviorSubject.next(2); // Observer 1: 2, Observer 2: 2
// behaviorSubject.subscribe(data => {this.outputData.push(data),console.log(`Observer 3: ${data}`)});
// behaviorSubject.next(3);
// }
constructor(){
const observable=new Observable((observer)=>{
setTimeout(()=>{{observer.next("Hi"),1000};
    {observer.next("Hello"),5000};
    {observer.error(new Error("Stopped")),3000};
    {observer.complete(),4000};
},2000);
});
observable.subscribe({
    next: (data)=>console.log(data),
    error:(err)=>alert(err),
    complete:()=>this.outputData.push("completed"),
});
}
}
