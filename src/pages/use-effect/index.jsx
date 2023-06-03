import { useEffect, useState } from "react"
import './index.css'

/**
 * useEffect测试
 */
const UseEffectTest = () => {

  const [payload, setPayload] = useState({
    pageNumber: 1,
    pageSize: 10,
  })

  const [count, setCount] = useState(0)

  useEffect(() => {
    console.log(`[payload] useEffect invoke payload = ${JSON.stringify(payload)}`)
  }, [payload])

  const arr = [1,2,3]

  useEffect(() => {
    console.log('[] useEffect invoke')
    arr.map((item,index)=>{
      console.log('[] useEffect invoke')
      console.log('[] useEffect')
    })
  }, [])

  useEffect(() => {
    console.log('useEffect invoke')
  })

  const handlePageNumberClick = () => {
    setPayload({ ...payload, pageNumber: payload.pageNumber + 1 })
  }

  const handlePageSizeClick = () => {
    setPayload({ ...payload, pageSize: payload.pageSize + 10 })
  }

  const reset = () => {
    setPayload({ pageNumber: 1, pageSize: 10 })
  }

  const handleCountClick = () => {
    setCount(count + 1)
  }

  return (
    <div>
      <h1>useEffect测试</h1>
      <button onClick={handlePageNumberClick}>
        pageNumber+
      </button>
      <button onClick={handlePageSizeClick}>
        pageSize+
      </button>
      <button onClick={reset}>
        重置
      </button>
      <button onClick={handleCountClick}>
        {count}
      </button>
    </div>
  )
}



export default UseEffectTest