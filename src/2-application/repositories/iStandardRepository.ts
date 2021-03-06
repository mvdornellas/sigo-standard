import { Standard } from '#enterprise/domain/standard'
import { Token } from 'typedi/Token'

export interface IStandardRepository {
  getAll (): Promise<Standard[]>
}

export const IStandardRepositoryToken = new Token<IStandardRepository>()
