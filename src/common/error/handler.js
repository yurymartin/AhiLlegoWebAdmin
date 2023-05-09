export default class ahiLlegoError extends Error {
  /**
   * Constructor Custom Error
   * @param {*} status [400 - 401 - and others]
   * @param {*} message [System Message]
   * @param {*} messageUser
   */
  constructor(status, message, messageUser) {
    super(message);
    //Error.captureStackTrace(this, this.constructor);
    this.name = this.constructor.name;
    this.status = status || 500;
    this.message =
      message || 'Ocurrió un error inesperado. Por favor, intenta de nuevo';
    this.messageUser =
      messageUser || 'Ocurrió un error inesperado. Por favor, intenta de nuevo';
  }
}
