export class CheckProductExist extends Error {
  constructor() {
    super('Produto não encontrado')
  }
}
