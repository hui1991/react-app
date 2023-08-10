import { useEffect, useState } from "react"
import './index.css'

/**
 * useEffect测试
 */
const UseEffectTest = () => {

  const [pageNumber, setPageNumber] = useState(1)

  const [count, setCount] = useState(0)

  useEffect(() => {
    console.log('useEffect', `依赖项是数组时 payload = ${pageNumber}`)
    return () => {
      console.log('useEffect', '组件卸载或依赖项改变时执行')
    }
  }, [pageNumber])

  useEffect(() => {
    console.log('useEffect', '依赖项是空数组 []')
  }, [])

  useEffect(() => {
    console.log('useEffect', '没有依赖项 组件每次渲染都会执行')
  })

  const handlePageNumberClick = () => {
    setPageNumber(pageNumber + 1 )
  }

  const handleCountClick = () => {
    setCount(count + 1)
  }

  return (
    <div className="useEffectContext">
      <h1>useEffect测试</h1>
      <button onClick={handlePageNumberClick}>
        依赖项是数组
      </button>
      <button onClick={handleCountClick}>
        {count}
      </button>
    </div>
  )
}

export default UseEffectTest