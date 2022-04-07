import React, { useState } from 'react';
import { RiDeleteBinLine } from "react-icons/ri";
import { BiEditAlt } from "react-icons/bi";

//AiOutlineDelete

const list = [
  {name: 'zoom_o.pm4', sale:'N', price: '$0', status:true, update:'27/08/2020  13:09:03', action:'todo'},
  {name: '10 ecommerce marketplace', sale:'N', category:'laptop', price: '$0', status:false, update:'27/08/2020  13:09:03', action:'todo'},
  {name: 'Super Bowl 50 Doritos', sale:'N', price: '$0', status:true, update:'27/08/2020  13:09:03', action:'todo'},
  {name: 'Strawberr Chseesecake', sale:'N', price: '$0', status:true, update:'27/08/2020  13:09:03', action:'todo'},
  {name: 'Ryanville Hyundal Super Bowl Commercial', sale:'N', price: '$0', status:false, update:'27/08/2020  13:09:03', action:'todo'},
  {name: 'MAT MANDAG- fISH & Chips', sale:'N', price: '$0', status:true, update:'27/08/2020  13:09:03', action:'todo'},
]

export default function Table() {

  const [data, setData] = useState(list)
  
  const deleteItem = (id) =>{
    console.log(id)
    setData((state) => state.filter(item => item.name != id))
  }
  return (
  <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
    <table className="w-full text-sm text-left text-gray-500 ">
        <thead className="text-xs text-gray-700 ">
            <tr>
                <th scope="col" className="px-6 py-3">
                    title
                </th>
                <th scope="col" className="px-6 py-3">
                    for sale
                </th>
                <th scope="col" className="px-6 py-3">
                    price
                </th>
                <th scope="col" className="px-6 py-3">
                  Status
                </th>
                <th scope="col" className="px-6 py-3">
                  Last update
                </th>
                <th scope="col" className="px-6 py-3">
                  Actions
                </th>
            </tr>
        </thead>
        <tbody>
          {data.map((item, index) =>(
            <tr key={index}className=" hover:bg-gray-50 ">
              <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">
                 {item.name}
              </th>
              <td className="px-6 py-4 ">
                  <div style={{
                    border: '2px solid red',
                    maxWidth: '30px',
                    textAlign: 'center',
                    borderRadius: '5px',
                    color: 'red',
                    fontWeight: 'bold',
                  }}>
                    {item.sale}
                  </div>
              </td>
              <td className="px-6 py-4">
                   {item.price}
              </td>
              <td className="px-4 py-4">
                  <div style={{
                    border: `2px solid ${item.status ? '#31f124' : 'red'}`,
                    minWidth: '30px',
                    textAlign: 'center',
                    borderRadius: '5px',
                    color: `${item.status ? '#31f124' : 'red'}`,
                    fontWeight: 'bold',
                    display: 'initial',
                    padding: '0 5px',
                  }}>
                      {item.status ?'active' : 'inactive'}
                  </div>
              </td>
              <td className="px-6 py-4">
                  {item.update}
              </td>
              <td className="px-6 py-4">
                  <div className='flex justify-start'>
                    <div className='w-8 h-8 bg-blue  text-lg rounded mr-1 flex justify-center items-center'>
                    <BiEditAlt color='white'/>
                    </div>
                    <div className='w-8 h-8 rounded text-lg flex justify-center items-center'
                      style={{ backgroundColor:'red'}}
                      onClick={()=> deleteItem(item.name)}
                      > <RiDeleteBinLine color='white'/></div>
                  </div>
              </td>
          </tr>
          ))}
            
          
        </tbody>
    </table>
</div>
  )
}