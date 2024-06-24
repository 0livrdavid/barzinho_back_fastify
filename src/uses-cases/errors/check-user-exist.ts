export class CheckUserExist extends Error {
  constructor() {
    super('Usuário não encontrado')
  }
}
