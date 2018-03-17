import { Character } from './Character';

export abstract class MarvelResponse<T> {
  code: number;
  status: string;
  attributionText: string;
  data: MarvelDataList<T> ;
}

export class MarvelDataList<T> {
  offset: number;
  limit: number;
  total: number;
  count: number;
  results: T[];
}
