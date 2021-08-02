import React from 'react';
import { toast } from 'react-toastify';

/**
 * Opções passadas por padrão ao Toast
 */
export const TOAST_DEFAULT_OPTIONS = {
  position: toast.POSITION.TOP_RIGHT,
  autoClose: 10000,
};

/**
 * Renderiza um Toast de aviso com os erros passados
 *
 * @param error
 * @returns {void}
 */
export function renderToastWarn(error) {
  toast.warn(renderToastErrors(error), TOAST_DEFAULT_OPTIONS);
}

/**
 * Renderiza um Toast de sucesso com uma mensagem
 *
 * @param msg
 * @returns {void}
 */
export function renderToastSuccessMsg(msg) {
  toast.success(msg, TOAST_DEFAULT_OPTIONS);
}

/**
 * Monta o nó que contém a aparência dos erros
 *
 * @param error
 * @returns {HTMLElement}
 */
function renderToastErrors(error) {
  return (
    <div>
      <span>
        {error.message
          ? error.message.dsMessage || error.message
          : error && error.toString()}
      </span>
      {!!error.fields && <ul>{error.fields.map(renderToastErrorsFields)}</ul>}
      {!!error.data && <ul>{error.data.map(renderToastErrorsData)}</ul>}
    </div>
  );
}

/**
 * Monta o nó de cada campo que possui erro
 *
 * @param fieldError
 * @returns {HTMLElement}
 */
function renderToastErrorsFields(fieldError) {
  return <li key={fieldError.naField}>{fieldError.dsDetail}</li>;
}

/**
 * Monta o nó de cada campo que possui erro
 *
 * @param dataError
 * @returns {HTMLElement}
 */
function renderToastErrorsData(dataError, index) {
  return <li key={index}>{dataError.message}</li>;
}
