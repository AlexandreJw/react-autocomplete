import * as React from 'react';
import "./Autocomplete.css"
import {debounce} from '../utils/index'
import { pending } from '../utils/requestList'
import { PendingType } from '../type/axios'
import { message } from 'antd';
const Autocomplete = (props) => {
  const handleInputValue: { stop: Function, call: React.ChangeEventHandler<HTMLInputElement> } = debounce((e) => {
    props.api(e.target.value)
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
    </div>
  )
};
export default Autocomplete