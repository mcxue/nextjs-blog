import Link from 'next/link'
import {useCallback} from 'react'

const FirstPost = () => {
  const clickMe = useCallback(() => {
    console.log('you clicked me')
  }, [])
  return (
    <div>
      <h1>First Post</h1>
      <button onClick={clickMe}>click me</button>
      <Link href="/">
        <a>Back to home</a>
      </Link>
      <style jsx>{`
        h1 {
          color: red;
        }
      `}</style>
    </div>
  )
}

export default FirstPost