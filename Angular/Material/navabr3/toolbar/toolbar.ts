import { Component } from '@angular/core';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { MatButtonModule } from '@angular/material/button';
import { RouterOutlet } from '@angular/router';
@Component({
  selector: 'app-toolbar',
  imports: [ MatToolbarModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatButtonModule,
  RouterOutlet],
  templateUrl: './toolbar.html',
  styleUrl: './toolbar.css'
})
export class Toolbar {

}
