import {Change, EventContext} from 'firebase-functions';
import {DocumentSnapshot} from 'firebase-functions/lib/providers/firestore';

export interface OnDocumentChange {
	snapshot?: DocumentSnapshot,
	change?: Change<DocumentSnapshot>;
	context: EventContext;
}