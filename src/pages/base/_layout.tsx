import React from 'react'
import ProCard from '@ant-design/pro-card';

export default function(props:any) {
  return (
    <ProCard>
      {props.children}
    </ProCard>
  )
}
