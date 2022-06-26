export class InvalidParamError extends Error {
  constructor(param: string) {
    super(`o parâmetro [${param}] inválidas`);
    this.name = 'InvalidParamError';
  }
}
