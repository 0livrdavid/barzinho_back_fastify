export class CheckSaleExist extends Error {
  constructor() {
    super('Venda não encontrado')
  }
}
