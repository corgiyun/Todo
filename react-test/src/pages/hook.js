import React, {useState, useEffect, useCallback} from 'react';

function Child({ visible }) {
  useEffect(()=> {
    console.log('页面挂载～～');
    return()=> {
      console.log('页面卸载～');
    }
  }, []);

  return visible ? 'true' : false

}

export default function HookDemo() {
  const [count, setCount] = useState(0);
  const [visible, setVisible] = useState(false);
  const [count1, setCount1] = useState(0);
  const [count2, setCount2] = useState(0);

  const calculateCount = useCallback(()=> {
    if (count1 && count2) {
      return count1 * count2
    }
    return count1 + count2;
  }, [count1, count2])
 
  useEffect(()=> {
    const result  = calculateCount(count1, count2);
    console.log(`执行副作用，最新值为：${result}`);
  },  [calculateCount])

  useEffect(() => {
    console.log('count 变化');
  }, [count])

  return(
    <div>
      {
        visible && <Child visible = {visible} />
      }
      <button onClick={()=> setCount1(1)}>改变count1</button>
      <button onClick={()=> setCount2(2)}>改变count2</button>
      <button onClick={()=> {setVisible(!visible)}}>改变 visible</button>
      <button onClick={()=> {setCount(Math.ceil(Math.random() * 1000))}}>点击{count}</button>
    </div>
  ) 
}