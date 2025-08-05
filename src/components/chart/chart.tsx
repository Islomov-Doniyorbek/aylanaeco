'use client'
import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';
import Title from '../title'

interface prop {
    id: number;
    name: string;
    value: number;
}

const Chart = () => {
    const data1: prop[] = [
      {id: 0, name: 'Yanvar', value: 400 },
      {id: 1, name: 'Fevral', value: 300 },
      {id: 2, name: 'Mart', value: 200 },
      {id: 3, name: 'Aprel', value: 380 },
      {id: 4, name: 'May', value: 496 },
    ];
    const data2: prop[] = [
      {id: 0, name: 'Yanvar', value: 10 },
      {id: 1, name: 'Fevral', value: 70 },
      {id: 2, name: 'Mart', value: 65 },
      {id: 3, name: 'Aprel', value: 75 },
      {id: 4, name: 'May', value: 93 },
    ];
    const data3: prop[] = [
      {id: 0, name: 'Yanvar', value: 4.1 },
      {id: 1, name: 'Fevral', value: 4 },
      {id: 2, name: 'Mart', value: 4.6 },
      {id: 3, name: 'Aprel', value: 4.7 },
      {id: 4, name: 'May', value: 4.78 },
    ];
    const data4: prop[] = [
      {id: 0, name: 'Yanvar', value: 1219 },
      {id: 1, name: 'Fevral', value: 1870 },
      {id: 2, name: 'Mart', value: 2360 },
      {id: 3, name: 'Aprel', value: 2475 },
      {id: 4, name: 'May', value: 2914 },
    ];
  return (
    <div>
        <Title title={"Statistika"}/>
      <div className="grid grid-cols-2 gap-10 w-full justify-center">
          <div className="charts flex flex-col items-center">
            <h2 className='text-2xl px-10 py-6'>Maishiy jihozlar</h2>
            <LineChart width={500} height={300} data={data1}>
              <CartesianGrid stroke="#eee" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Line type="monotone" dataKey="value" stroke="#8884d8" />
            </LineChart>
        </div>
          <div className="charts flex flex-col items-center">
            <h2 className='text-2xl px-10 py-6'>Buyurtmalar</h2>
            <LineChart width={500} height={300} data={data2}>
              <CartesianGrid stroke="#eee" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Line type="monotone" dataKey="value" stroke="#8884d8" />
            </LineChart>
        </div>
          <div className="charts flex flex-col items-center">
            <h2 className='text-2xl px-10 py-6'>Xizmat sifati</h2>
            <LineChart width={500} height={300} data={data3}>
              <CartesianGrid stroke="#eee" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Line type="monotone" dataKey="value" stroke="#8884d8" />
            </LineChart>
        </div>
          <div className="charts flex flex-col items-center">
            <h2 className='text-2xl px-10 py-6'>Auditoriya</h2>
            <LineChart width={500} height={300} data={data4}>
              <CartesianGrid stroke="#eee" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Line type="monotone" dataKey="value" stroke="#8884d8" />
            </LineChart>
        </div>
      </div>
    </div>
  )
}

export default Chart
