import Announcements from '@/app/components/Announcements'
import AttendanceChart from '@/app/components/AttendanceChart'
import CountCharts from '@/app/components/CountCharts'
import EventCalender from '@/app/components/EventCalender'
import FinanceChart from '@/app/components/FinanceChart'
import UserCard from '@/app/components/UserCard'
import React from 'react'

const AdminPage = () => {
  return (
    <div className='p-4 flex gap-4 flex-col md:flex-row'>
      {/* LEFT Section */}
      <div className='w-full lg:w-2/3 flex flex-col gap-8'>
      {/* User Cards */}
      <div className='flex gap-4 justify-between flex-wrap'>
      <UserCard type='student'/>
      <UserCard type='teacher'/>
      <UserCard type='parent'/>
      <UserCard type='staff'/>
      </div>
      {/* MIDDLE CHARTS */}
      <div className='flex gap-4 flex-col lg:flex-row'>
        {/* COUNT CHART */}
        <div className='w-full lg:w-1/3 h-[450px]'>
        <CountCharts/>
        </div>
        {/* ATTENDANCE CHART */}
        <div className='w-full lg:w-2/3 h-[450px]'>
        <AttendanceChart/>
        </div>
      </div>
      {/* BOTTOM CHARTS */}
      <div className='w-full h-[500px]'>
        <FinanceChart/>
      </div>
      </div>
      {/*  Right Section */}
      <div className='w-full lg:w-1/3 flex flex-col gap-8'>
      <EventCalender/>
      <Announcements/>
      </div>
    </div>
  )
}

export default AdminPage