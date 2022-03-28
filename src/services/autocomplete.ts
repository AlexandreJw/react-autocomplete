import instance from '../utils/axios'
import {SearchResult} from '../type/AutoComplets'
import {AxiosPromise} from 'axios'
export const getSearch = function(keyWords: string): AxiosPromise<SearchResult> {
  return instance({
    method: 'get',
    url: '/api/test',
    params: {
      keyWords
    }
  })
}