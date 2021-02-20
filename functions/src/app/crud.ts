import * as admin from 'firebase-admin';
import {from,pipe} from 'rxjs';
import {concatMap, map} from 'rxjs/operators';
import {Mensagem} from '../utils/models/mensagem.model';


export class Crud {

  /**
   * @param db Referência para o Firebase Database.
   */
  constructor(private db: admin.firestore.Firestore) {

  }

  /**
   * Operador de criação de um cliente na coleção de clientes
   */
  create = () => pipe(
    concatMap((mensagem: Mensagem) =>
      from(this.db.doc(`clientes/${mensagem.payload.cpf}`).set(mensagem.payload, {merge: true})).pipe(
        map(() => mensagem),
      ))
  );
  /**
   * Operador de leitura de um cliente na coleção de clientes
   */
  read = () => pipe(
    concatMap((mensagem: Mensagem) =>
      from(this.db.doc(`clientes/${mensagem.payload.cpf}`).get()).pipe(
        map(() => mensagem),
      ))
  );

  /**
   * Operador de atualização de um cliente na coleção de clientes
   */
  update = () => pipe(
    concatMap((mensagem: Mensagem) =>
      from(this.db.doc(`clientes/${mensagem.payload.cpf}`).update(mensagem.payload, {merge: true})).pipe(
        map(() => mensagem),
      ))
  );
  /**
   * Operador de remoção de um cliente na coleção de clientes
   */
  delete = () => pipe(
    concatMap((mensagem: Mensagem) =>
      from(this.db.doc(`clientes/${mensagem.payload.cpf}`).delete()).pipe(
        map(() => mensagem),
      ))
  );
}
