import React from 'react'
import { Spinner } from 'reactstrap'
export default function ActivityIndicator() {
  return (
    <div className="center">
      <Spinner type="grow" color="primary" />
      <Spinner type="grow" color="primary" />
      <Spinner type="grow" color="primary" />
      <Spinner type="grow" color="primary" />
      <Spinner type="grow" color="primary" />
    </div>
  )
}
