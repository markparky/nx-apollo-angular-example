import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { Set, SetListGQL } from '@nx-apollo-angular-example/data-access';
import { map } from 'rxjs/operators';

@Component({
  selector: 'nx-apollo-angular-example-set-list',
  templateUrl: './set-list.component.html',
  styleUrls: ['./set-list.component.scss']
})
export class SetListComponent {
  sets$: Observable<any>;

  constructor(private setListGQL: SetListGQL) {
    this.sets$ = this.setListGQL.watch().valueChanges.pipe(map((result) => result.data.allSets));
  }
}