import { User } from '@/domain/entities';

export interface IGetUserUseCase {
  perform: () => IGetUserUseCase.Output;
}
export namespace IGetUserUseCase {
  export type Output = Promise<User | undefined>;
  export type modal = User;
}
