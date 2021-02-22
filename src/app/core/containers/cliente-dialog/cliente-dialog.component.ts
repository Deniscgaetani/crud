import {ChangeDetectionStrategy, Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';
import {FormBuilder} from '@angular/forms';
import {select, Store} from '@ngrx/store';
import {CrudState} from '@core/store/reducers/crud.reducer';
import {CreateCliente} from '@core/store/actions/crud.action';
import {Observable} from 'rxjs';
import {getLoading} from '@core/store/selectors/crud.selectors';

@Component({
  selector: 'app-cliente-dialog',
  templateUrl: './cliente-dialog.component.html',
  styleUrls: ['./cliente-dialog.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ClienteDialogComponent implements OnInit {
  /**
   * Observação do loading.
   */
  public loading$: Observable<boolean>;

  profileForm = this.fb.group({
    cpf: [''],
    nome: [''],
    telefone: [''],
    email: ['']
  });

  constructor(public dialogRef: MatDialogRef<ClienteDialogComponent>, private store: Store<CrudState>, private fb: FormBuilder,
              @Inject(MAT_DIALOG_DATA) public data: any) {
  }

  close() {
    this.dialogRef.close();
  }

  onSubmit() {
    console.warn(this.profileForm.value);
    console.warn('datas', this.data.data);
    this.store.dispatch(CreateCliente({payload: this.profileForm.value}));
  }

  ngOnInit(): void {
    this.loading$ = this.store.pipe(select(getLoading));
  }
}
