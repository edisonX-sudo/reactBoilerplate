import React from 'react'
import ProCard from '@ant-design/pro-card';

export default function(props:any) {
  return (
    <ProCard>
      11{props.children}
    </ProCard>
  )
}
