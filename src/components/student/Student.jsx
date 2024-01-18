
export default function Student({data}){

    return <tr className="border-b border-[#7ECEB529]">
    <td className="p-5 text-sm md:text-xl">{data.id}</td>
    <td className="p-5 text-sm md:text-xl">
      <div className="flex space-x-3 items-center">
        <img
          className="w-8 h-8 rounded-full"
          src={data?.image || Avater}
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