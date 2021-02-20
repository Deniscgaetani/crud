import * as admin from 'firebase-admin';
import * as functions from 'firebase-functions';
import * as account from './service-account-key.json';

// inicializa o stacktrace debug
//const debuglet = debug.start({allowExpressions: true});

// não faz nada, mas sem isso não publica no firebase.
const config = functions.config().firebase || {};

// firebase service account key
const credential = admin.credential.cert(<admin.ServiceAccount> account);

// firebase app initialization
admin.initializeApp({credential, ...config});

// use of timestamp in firestore
admin.firestore().settings({});


// export Application Functions
export {
  appCriarCliente
} from './app';
// firebase deploy --only functions:appCriarCliente,functions:appAtualizarAcesso,functions:appAtualizar,functions:appEnviarEvento,functions:appSessionStart,functions:appAtualizarInstitucional,functions:appCriarConfiguracaoDisponibilidade
