import { NgModule } from '@angular/core';
import { RoundPipe } from './pipes/round.pipe';

@NgModule({
    imports:        [],
    declarations:   [RoundPipe],
    exports:        [RoundPipe],
})

export class PipeModule {

  static forRoot(): any {
     return {
         ngModule: PipeModule,
         providers: [],
     };
  }
}
