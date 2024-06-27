import React from 'react'

const SubsTable = ({email,mongoId,date,deleteEmail}) => {
    const emailDate = new Date(date)
  return (
    <tr className='border-b bg-white text-left'>
      <th scope='row' className='px-6 py-4 font-medium text-gray-900 whitespace-nowrap'>
        {email?email:"No Email"}
      </th>
      <td className='px-6 py-4 hidden sm:block'>{emailDate.toDateString()}</td>
      <td onClick={()=>deleteEmail(mongoId)} className='px-6 py-4 cursor-pointer'>X</td>
    </tr>
  )
}

export default SubsTable
