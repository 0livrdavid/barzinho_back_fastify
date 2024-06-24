export class CheckSaleProductExist extends Error {
  constructor() {
    super('Venda de produto não encontrado')
  }
}
