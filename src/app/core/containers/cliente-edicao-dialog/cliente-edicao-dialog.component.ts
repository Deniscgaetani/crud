import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';
import {Store} from '@ngrx/store';
import {CrudState} from '@core/store/reducers/crud.reducer';
import {FormBuilder} from '@angular/forms';
import {CreateCliente, DeleteCliente, UpdateCliente} from '@core/store/actions/crud.action';
import {DELETE} from '@angular/cdk/keycodes';

@Component({
  selector: 'app-cliente-edicao-dialog',
  templateUrl: './cliente-edicao-dialog.component.html',
  styleUrls: ['./cliente-edicao-dialog.component.css']
})
export class ClienteEdicaoDialogComponent {

  profileForm = this.fb.group({
    cpf: [this.data.cpf],
    nome: [this.data.nome],
    telefone: [this.data.telefone],
    email: [this.data.email]
  });

  constructor(public dialogRef: MatDialogRef<ClienteEdicaoDialogComponent>, private store: Store<CrudState>, private fb: FormBuilder,
              @Inject(MAT_DIALOG_DATA) public data: any) {
  }

  close() {
    this.dialogRef.close();
  }

  onSubmit() {
    console.warn(this.profileForm.value);
    console.warn('datas', this.data);
    this.store.dispatch(UpdateCliente({payload: this.profileForm.value}));
  }
  delete() {
    this.store.dispatch(DeleteCliente({payload: this.profileForm.value}));
  }
}
