import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';
import {select, Store} from '@ngrx/store';
import {CrudState} from '@core/store/reducers/crud.reducer';
import {FormBuilder, Validators} from '@angular/forms';
import {ClienteDialogId, UpdateCliente} from '@core/store/actions/crud.action';
import {Observable} from 'rxjs';
import {getLoading} from '@core/store/selectors/crud.selectors';

@Component({
  selector: 'app-cliente-edicao-dialog',
  templateUrl: './cliente-dialog.component.html',
  styleUrls: ['./cliente-dialog.component.css']
})
export class ClienteDialogComponent implements OnInit {

  profileForm = this.fb.group({
    cpf: [this.data ? this.data.cpf : '', [Validators.required]],
    nome: [this.data ? this.data.nome : '', [Validators.required, Validators.maxLength(15), Validators.pattern('^[a-zA-Z \-\']+')]],
    telefone: [this.data ? this.data.telefone : '', [Validators.required]],
    email: [this.data ? this.data.email : '', [Validators.required, Validators.email]]
  });
  /**
   * Observação do loading.
   */
  public loading$: Observable<boolean>;

  constructor(public dialogRef: MatDialogRef<ClienteDialogComponent>, private store: Store<CrudState>, private fb: FormBuilder,
              @Inject(MAT_DIALOG_DATA) public data: any) {
  }

  ngOnInit(): void {
    this.loading$ = this.store.pipe(select(getLoading));
    this.store.dispatch(ClienteDialogId({payload: this.dialogRef.id}));
  }

  close() {
    this.dialogRef.close();
  }

  onSubmit() {
    this.store.dispatch(UpdateCliente({payload: this.profileForm.value}));
  }
}
