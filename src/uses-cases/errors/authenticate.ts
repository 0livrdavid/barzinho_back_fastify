export class InvalidCrendentialsError extends Error {
  constructor() {
    super('Número ou senha incorreta')
  }
}
