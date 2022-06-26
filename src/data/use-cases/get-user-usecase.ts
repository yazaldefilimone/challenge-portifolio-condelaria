import { IGetUserUseCase } from '@/domain/use-cases';
import { HttpStatusCode, IHttpClient } from '@/data/protocols/http';
import { UnexpectedError } from '@/domain/errors';

export class GetUserUseCase implements IGetUserUseCase {
  private readonly httpClient: IHttpClient<IGetUserUseCase.modal>;
  private readonly url: string;

  constructor(httpClient: IHttpClient<IGetUserUseCase.modal>, url: string) {
    this.httpClient = httpClient;
    this.url = url;
  }
  async perform(): IGetUserUseCase.Output {
    const response = await this.httpClient.request({
      url: this.url,
      method: 'get',
    });

    switch (response.statusCode) {
      case HttpStatusCode.ok:
        return response.body;
      default:
        throw new UnexpectedError();
    }
  }
}
