import * as functions from 'firebase-functions';
import * as admin from 'firebase-admin';
import {HttpsError} from 'firebase-functions/lib/providers/https';
import {Crud} from './crud';
import {of} from 'rxjs';
import {Mensagem} from '../utils/models/mensagem.model';


const firestore = admin.firestore();
const crud = new Crud(firestore);

/**
 * Cria um cliente na coleção de clientes.
 */
export const appCriarCliente = functions.region('us-central1').https.onCall((data) => {
  console.log('data:::', JSON.stringify(data));
  const observable = of({
    payload: data
  }).pipe(
    crud.create()
  );

  return new Promise((resolve, reject) => {
    observable.subscribe({
      next: (mensagem: Mensagem) => resolve(mensagem.payload),
      error: (error) => {
        console.error(error);
        reject((error instanceof HttpsError) ? error : new HttpsError(
          'unavailable',
          'Ops: ocorreu um problema ao processar sua requisição',
          error
        ));
      }
    });
  });
});
/**
 * Pega as informações de um cliente na coleção de clientes.
 */
export const appPegarCliente = functions.region('us-central1').https.onCall((data) => {
  const observable = of({
    payload: data
  }).pipe(
    crud.read()
  );

  return new Promise((resolve, reject) => {
    observable.subscribe({
      next: (mensagem: Mensagem) => resolve(mensagem.payload),
      error: (error) => {
        console.error(error);
        reject((error instanceof HttpsError) ? error : new HttpsError(
          'unavailable',
          'Ops: ocorreu um problema ao processar sua requisição',
          error
        ));
      }
    });
  });
});
/**
 * Atualiza cliente na coleção de clientes.
 */
export const appAtualizarCliente = functions.region('us-central1').https.onCall((data) => {
  const observable = of({
    payload: data
  }).pipe(
    crud.update()
  );

  return new Promise((resolve, reject) => {
    observable.subscribe({
      next: (mensagem: Mensagem) => resolve(mensagem.payload),
      error: (error) => {
        console.error(error);
        reject((error instanceof HttpsError) ? error : new HttpsError(
          'unavailable',
          'Ops: ocorreu um problema ao processar sua requisição',
          error
        ));
      }
    });
  });
});
/**
 * Remove um cliente na coleção de clientes.
 */
export const appRemoverCliente = functions.region('us-central1').https.onCall((data) => {
  const observable = of({
    payload: data
  }).pipe(
    crud.delete()
  );

  return new Promise((resolve, reject) => {
    observable.subscribe({
      next: (mensagem: Mensagem) => resolve(mensagem.payload),
      error: (error) => {
        console.error(error);
        reject((error instanceof HttpsError) ? error : new HttpsError(
          'unavailable',
          'Ops: ocorreu um problema ao processar sua requisição',
          error
        ));
      }
    });
  });
});
