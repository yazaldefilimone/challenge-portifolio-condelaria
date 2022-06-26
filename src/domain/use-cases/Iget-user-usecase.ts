import { User } from '@/domain/entities/user';

export interface IGetUserUseCase {
  perform: () => IGetUserUseCase.Output;
}
export namespace IGetUserUseCase {
  export type Output = Promise<User>;
}
