import React from 'react'
import { FloatingLabelInput, RaisedButton } from "../../components";

export default function Home() {
  return (
    <div>
      <FloatingLabelInput label="Type here" style={ { margin: 20, width: '300px' } }/>
      <RaisedButton children="Button" />
    </div>
  )
}
