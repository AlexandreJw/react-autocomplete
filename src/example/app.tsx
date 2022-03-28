import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { useState } from 'react';
import Autocomplete from '../component/Autocomplete'
import {getSearch} from '../services/autocomplete'
import {SearchResult} from '../type/AutoComplets'
import {AxiosResponse} from 'axios'
const App = () => {
  const [list,setList] = useState<SearchResult>([]);
  const searchPerson = (keyWords) => {
    return getSearch(keyWords).then((data: AxiosResponse<SearchResult, any>) => {
      setList(data.data);
    })
  }
  return(
    <div>
      <Autocomplete api={searchPerson} />
      <p>请求的数据</p>
      <ul>
        {
          list.map((item) => {
            return (
              <li key={item.name}>
                <p>{`我的名字:${item.name}`}</p>
                <p>{`我的年龄:${item.age}`}</p>
              </li>
            )
          })
        }
      </ul>
    </div>
  )
}
export default App