import * as React from 'react';
import { useState } from 'react';
import "./Autocomplete.css"
import {debounce} from '../utils/index'
import {getSearch} from '../services/autocomplete'
import {SearchResult, SearchItem} from '../type/AutoComplets'
import {AxiosResponse} from 'axios'
import { pending } from '../utils/requestList'
import { PendingType } from '../type/axios'
import { message } from 'antd';
const Autocomplete = () => {
  const [list,setList] = useState<SearchResult>([]);
  const handleInputValue: { stop: Function, call: React.ChangeEventHandler<HTMLInputElement> } = debounce((e) => {
    getSearch(e.target.value).then((data: AxiosResponse<SearchResult, any>) => {
      setList(data.data);
    })
  }, 500, false)
  const handleInputValueHoc: React.ChangeEventHandler<HTMLInputElement>  = (e) => {
    e.persist()
    if (e.target.value.length <= 30) {
      stopReruest('终止上次请求')
      handleInputValue.call(e)
    } else {
      stopReruest('您输入的字符数过多')
      message.warning('您输入的字符数过多');
    }
  }
  const stopReruest = (msg: string) => {
    handleInputValue.stop();
    for (const key in pending) {
      const item: number = +key;
      const list: PendingType = pending[key];
      list.cancel(msg);
      // 从数组中移除记录
      if(pending.length >= 1){
        pending.splice(item, 1)
      }
    }
  }
  return (
    <div>
      <input className="myui-input" onChange={(e) => handleInputValueHoc(e)}/>
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
};
export default Autocomplete