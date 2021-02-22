import {getCoreState} from '@core/store/reducers/global.reducers';
import {createSelector} from '@ngrx/store';

/**
 * Recupera o estado da fatia do Crud.
 */
export const getCrudState = createSelector(
  getCoreState,
  state => state.crud
);

/**
 * Recupera o estado da fatia de clientes da store do core.
 */
export const getClientes = createSelector(
  getCrudState,
  state => state.clientes
);

/**
 * Recupera o estado da fatia do cliente selecionado da store do core.
 */
export const getCliente = createSelector(
  getCrudState,
  state => state.clienteSelecionado
);

/**
 * Recupera o Loading.
 */
export const getLoading = createSelector(
  getCrudState,
  state => state.loading
);
