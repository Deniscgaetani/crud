import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';
import {select, Store} from '@ngrx/store';
import {CrudState} from '@core/store/reducers/crud.reducer';
import {FormBuilder} from '@angular/forms';
import {DeleteCliente, UpdateCliente} from '@core/store/actions/crud.action';
import {Observable} from 'rxjs';
import {getLoading} from '@core/store/selectors/crud.selectors';

@Component({
  selector: 'app-cliente-edicao-dialog',
  templateUrl: './cliente-edicao-dialog.component.html',
  styleUrls: ['./cliente-edicao-dialog.component.css']
})
export class ClienteEdicaoDialogComponent implements OnInit {

  profileForm = this.fb.group({
    cpf: [this.data.cpf],
    nome: [this.data.nome],
    telefone: [this.data.telefone],
    email: [this.data.email]
  });
  /**
   * Observação do loading.
   */
  public loading$: Observable<boolean>;

  constructor(public dialogRef: MatDialogRef<ClienteEdicaoDialogComponent>, private store: Store<CrudState>, private fb: FormBuilder,
              @Inject(MAT_DIALOG_DATA) public data: any) {
  }

  ngOnInit(): void {
    this.loading$ = this.store.pipe(select(getLoading));
  }

  close() {
    this.dialogRef.close();
  }

  onSubmit() {
    this.store.dispatch(UpdateCliente({payload: this.profileForm.value}));
  }
}
