import { Component,AfterViewInit } from '@angular/core';
import { NzInputModule } from 'ng-zorro-antd/input';
import { distinctUntilChanged,debounceTime,map} from 'rxjs';
import { FormControl ,ReactiveFormsModule} from '@angular/forms';
@Component({
  selector: 'app-debounce',
  imports: [NzInputModule,ReactiveFormsModule],
  templateUrl:'./debounce.html',
  styleUrl: './debounce.css'
})
export class Debounce {
  searchControl = new FormControl();

  ngOnInit(): void {
    this.searchControl.valueChanges
      .pipe(
        debounceTime(300),
        map(value => value.trim()),
        distinctUntilChanged()
      )
      .subscribe(value => {
        console.log('Search term:', value);
      });
}
}