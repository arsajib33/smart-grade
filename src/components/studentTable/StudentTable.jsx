import _ from 'lodash'
import Avater from '../../assets/avatar.png'

export default function StudentTable(){

 
      const data=[{
        id:1,
        class:'One'
      ,students:[
        {id:1,
            name:'Arif',
            scores:'A+',
            percentage:'98%'
            },
            {id:2,
                name:'Gius',
                scores:'A',
                percentage:'78%'
                },
                ,
            {id:3,
                name:'khokon',
                scores:'A',
                percentage:'72%'
                },
                ,
            {id:4,
                name:'Alamin',
                scores:'A-',
                percentage:'62%'
                },
                ,
            {id:5,
                name:'Tusar',
                scores:'F',
                percentage:'30%'
                },
                ,
            {id:6,
                name:'Sudid',
                scores:'A+',
                percentage:'88%'
                },
                ,
            {id:7,
                name:'Dulal',
                scores:'A+',
                percentage:'98%'
                },
                ,
            {id:8,
                name:'Tudu',
                scores:'B',
                percentage:'50%'
                },
                ,
            {id:9,
                name:'Shohidul',
                scores:'C',
                percentage:'40%'
                },
                {id:10,
                    name:'Romzan',
                    scores:'A',
                    percentage:'78%'
                    },
                    {id:11,
                        name:'Sumon',
                        scores:'A+',
                        percentage:'81%'
                        },
                    
      ]},
      {
        id:2,
        class:'Two',
        students:[
            {id:1,
                name:'Arif',
                scores:'A+',
                percentage:'91%'
                },
                {id:2,
                    name:'Papul',
                    scores:'A',
                    percentage:'75%'
                    },
                    ,
                {id:3,
                    name:'Sahadat',
                    scores:'A',
                    percentage:'71%'
                    },
                    ,
                {id:4,
                    name:'Enamul',
                    scores:'A-',
                    percentage:'95%'
                    },
                    ,
                {id:5,
                    name:'Mamun',
                    scores:'F',
                    percentage:'29%'
                    },
                    ,
                {id:6,
                    name:'Majid',
                    scores:'A+',
                    percentage:'82%'
                    },
                    ,
                {id:7,
                    name:'Shawon',
                    scores:'A+',
                    percentage:'92%'
                    },
                    ,
                {id:8,
                    name:'Shariful',
                    scores:'B',
                    percentage:'55%'
                    },
                    ,
                {id:9,
                    name:'Manik',
                    scores:'C',
                    percentage:'42%'
                    },
                    {id:10,
                        name:'Faruk',
                        scores:'A',
                        percentage:'72%'
                        },
                        {id:11,
                            name:'Pankoj',
                            scores:'A+',
                            percentage:'88%'
                            },
                        
          ]
    }
      
      ]
    

    const view=data?.map((class_name,i)=>{
   
        return < >
          <tr key={class_name?.id}  className="bg-white/5">
                  <td  className="p-5 text-sm md:text-xl" colSpan={4}>
                 Class {class_name?.class}
                  </td>
                </tr>
                {class_name.students.map((student)=>{
                    return <StudentData  key={student.id} data={student}/>
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

function SearchBox(){
    return(
        <form>
        <div className="flex">
          <div className="relative overflow-hidden text-gray-50 md:min-w-[380px] lg:min-w-[440px] rounded-[63px]">
            <input
              type="search"
              id="search-dropdown"
              className="z-20 block w-full bg-white px-4 py-2.5 pr-10 focus:outline-none rounded-[63px] placeholder:text-neutral-400 text-neutral-800"
              placeholder="Search by Student "
              required=""
            />
            <button
              type="submit"
              className="absolute right-0 inline-flex items-center justify-center w-10 top-0 h-full rounded-e-lg text-neutral-800"
            >
              <svg
                className="h-4 w-4"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 20 20"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                />
              </svg>
              <span className="sr-only">Search</span>
            </button>
          </div>
        </div>
      </form>
    )
}

function StudentData({data}){

    return <tr className="border-b border-[#7ECEB529]">
    <td className="p-5 text-sm md:text-xl">{data.id}</td>
    <td className="p-5 text-sm md:text-xl">
      <div className="flex space-x-3 items-center">
        <img
          className="w-8 h-8"
          src={data?.img ? data?.img : Avater}
          width={32}
          height={32}
          alt={data?.name}
        />
        <span className="whitespace-nowrap">{data.name}</span>
      </div>
    </td>
    <td className="p-5 text-sm md:text-xl text-center">{data.scores}</td>
    <td className="p-5 text-sm md:text-xl text-center">{data.percentage}</td>
  </tr>
}