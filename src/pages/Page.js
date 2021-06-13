import React, { useState } from 'react'
import UserList from './UserList'

const Page = () => {
  const [pageNo, setpageNo] = useState(1)

  function handlePageNo(e) {
    console.log("Target", e.target.innerText)
    setpageNo(e.target.innerText)
  }

  return (
    <div >
      <UserList pageNo={pageNo} />
      <button onClick={e => handlePageNo(e)}>1</button>
      <button onClick={e => handlePageNo(e)}>2</button>
    </div>
  )
}

export default Page
