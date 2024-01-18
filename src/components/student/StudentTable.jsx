import _ from 'lodash'
import Avater from '../../assets/avatar.png'
import { data } from '../../data/studentData'
import SearchBox from './SearchBox'
import Student from './Student'
export default function StudentTable(){

 

    

    const view=data?.map((class_name,i)=>{
   
        return < >
          <tr key={class_name?.id}  className="bg-white/5">
                  <td  className="p-5 text-sm md:text-xl" colSpan={4}>
                 Class {class_name?.class}
                  </td>
                </tr>
                {class_name.students.map((student)=>{
                    return <Student  key={student.id} data={student}/>
                })}
                
        </>
    })

    return(
        <section className="py-24 lg:pt-[120px] lg:pb-28">
        <div className="container">
          <div className="mb-16 flex flex-col items-center">
            <h2 className="text-3xl lg:text-[40px] mb-9 font-bold">
              <span className="text-[#00CC8C]">Students</span> of the Year
            </h2>
            {/* Search Box */}
           <SearchBox/>
            {/* Search Box Ends */}
          </div>
          
          <div className="max-w-[848px] mx-auto overflow-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-[#FFFFFF0D]">
                  <th className="uppercase p-5 text-sm md:text-xl font-semibold md:min-w-[110px] text-left">
                    ID
                  </th>
                  <th className="p-5 text-sm md:text-xl font-semibold text-left">
                    Name
                  </th>
                  <th className="p-5 text-sm md:text-xl font-semibold">Scores</th>
                  <th className="p-5 text-sm md:text-xl font-semibold">
                    Percentage
                  </th>
                </tr>
              </thead>
              <tbody>
                {/* class two */}
       {view}
              
               
              </tbody>
            </table>
          </div>
        </div>
      </section>
    )
}

