import React from 'react'
import ProCard from '@ant-design/pro-card';

export default function(props) {
  return (
    <ProCard >
      {props.children}
    </ProCard>
  )
}
