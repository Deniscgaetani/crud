import {CallableContext, HttpsError} from 'firebase-functions/lib/providers/https';

export interface CallableParams {
	data: any,
	context: CallableContext,
	error?: HttpsError
}
