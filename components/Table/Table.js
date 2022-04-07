import React, { useState } from 'react';
import { RiDeleteBinLine } from "react-icons/ri";
import { BiEditAlt } from "react-icons/bi";
import { FiDownload } from "react-icons/fi";
import { HiOutlineUpload } from "react-icons/hi";


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

  <>  
      <div className='container mx-auto'>
      <h1
        className='px-5 lg:px-0'
      style={{
        fontSize: '30px',
        fontWeight: 'bold'
      }}>Video Managment</h1>
      </div>
      <div className='container p-4 flex flex-col lg:flex-row lg:justify-between justify-center items-center'>
        <div className="mb-6  w-full lg:w-auto flex flex-col sm:flex-row sm:justify-evenly justify-center items-center">
            <input type="text" id="large-input" className="p-3 mb-3 w-md   lg:mb-0 lg:mr-5  rounded-lg border  sm:text-md " placeholder='Enter keyword'/>
            <select type="text" id="large-input" className="p-3 mb-3 w-40 lg:mb-0 lg:mr-5 rounded-lg border  sm:text-md " placeholder='Enter keyword'>
              <option>Status</option>
              <option>inactive</option>
              <option>active</option>
            </select>
            
            <button type="submit" class="text-white bg-blue-700 mb-3 lg:mb-0 p-3 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-3 text-center"
            
            >Search</button>
        </div>
        <div className='mb-6 flex flex-col sm:flex-row sm:justify-evenly justify-center items-center' >
          <button type="button" class="text-white bg-blue-700 w-40 focus:outline-none  font-medium rounded-lg text-sm px-5 py-3 text-center inline-flex items-center mb-5 md:mb-0 md:mr-5 "
            style={{
              display: "flex",
              justifyContent: "space-evenly",
            }}
          >
              
              <HiOutlineUpload  style={{
                fontSize: "26px"
              }}/>
              Upload New
          </button>
          <button type="button" class="text-white bg-blue-700 w-40 focus:outline-none  font-medium rounded-lg text-sm px-5 py-3 text-center inline-flex items-center"
            style={{
              display: "flex",
              justifyContent: "space-evenly",
              background: '#ff9900c4',
            }}
          >
              
              <HiOutlineUpload  style={{
                fontSize: "26px",
                

              }}/>
              Bulk Upload
          </button>
        </div>
      </div>
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
                        <div className='w-8 h-8 bg-blue  text-lg rounded mr-1 flex justify-center items-center'
                          style={{ backgroundColor:'#0043ffdb'}}
                        >
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
  </>
  )
}