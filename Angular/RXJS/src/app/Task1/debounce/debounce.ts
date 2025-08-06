import { Component } from '@angular/core';
import { NzInputModule } from 'ng-zorro-antd/input';
import { fromEvent ,debounceTime,map} from 'rxjs';
import { FormBuilder, FormGroup } from '@angular/forms';
import { get } from 'node:https';
@Component({
  selector: 'app-debounce',
  imports: [NzInputModule],
  template: `
    <nz-form-item>
        <nz-form-label [nzSpan]="6" nzFor="username">Username</nz-form-label>
        <nz-form-control [nzSpan]="14">
          <input nz-input #searchBox name="username" type="text" id="search-box" />
        </nz-form-control>
      </nz-form-item>
  `,
})
export class Debounce {
  // myForm!: FormGroup;
  // constructor(private fb: FormBuilder) {}
  // ngOnInit() {
  //   this.myForm = this.fb.group({
  //     search: ['']
  //   });
  //   this.myForm.get('search').valueChanges.pipe(
  //     debounceTime(500)
  //   ).subscribe(value => {
  //     console.log('Searching for:', value);
  //   });
  // }
  
const search = document.getElementById('search-box');
constructor(){
const search$ = fromEvent(search, 'input')
  .pipe(
    map((event:any) => event.target.value),
    debounceTime(300)
  );

search$.subscribe(value => {
  console.log('Performing search for:', value);
});
}
  searchBox(searchBox: any, arg1: string) {
    throw new Error('Method not implemented.');
  }
}