import {EventContext} from 'firebase-functions';
import {Message} from 'firebase-functions/lib/providers/pubsub';
import {CallableParams} from './callable-params.model';
import {OnDocumentChange} from './on-document-change.models';

export interface Mensagem {
	/**
	 * Contexto de execução, ponte de extensão para implementações futuras.
	 */
	context?: CallableParams | OnDocumentChange | Message | EventContext;

	/**
	 * Modelo de execução, onde todos os dados de negócio podem ser encontrados e retornados.
	 */
	payload: any;
	/**
	 * Identificador do documento que representa o resultado de transações preemptivas assíncronas,.
	 */
	resultado?: any;

	/**
	 * Descrição do erro ocorrido durante a execução de transações preemptivas assíncronas, pode ser utilizado em outros casos.
	 */
	erro?: any;

	/**
	 * Descrição da falha durante a execução de transações preemptivas assíncronas.
	 */
	falha?: any;
}

export const isMensagem = (object: any) => 'context' in object || 'payload' in object;
