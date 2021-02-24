
import {NgModule} from '@angular/core';

// PRIMER NG
import {ButtonModule} from 'primeng/button';
import {CardModule} from 'primeng/card';
import {MenubarModule} from 'primeng/menubar';
import {FieldsetModule} from 'primeng/fieldset';
import {TableModule} from 'primeng/table';
import {ToolbarModule} from 'primeng/toolbar';

import { SplitButtonModule } from 'primeng/splitbutton'


@NgModule({
  exports:[
    ButtonModule,
    CardModule,
    MenubarModule,
    FieldsetModule,
    TableModule,
    ToolbarModule,
    SplitButtonModule
  ]
})
export class PrimeNgModule { }
