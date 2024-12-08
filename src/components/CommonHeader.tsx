import React from 'react'

const CommonHeader = ({
    title
}: {
    title: string
}) => {
  return (
    <section className='py-8'>
        <div className='flex items-center justify-end gap-6 pr-10'>
            <button className='text-mainBlue underline underline-offset-4'>세션 연장 새로고침</button>
            <button className='text-secondGray'>로그아웃</button>
        </div>
        <h3 className='mt-8 text-mainBlack font-bold text-3xl'>{title}</h3>
    </section>
  )
}

export default CommonHeader