import { TrashIcon } from '@heroicons/react/20/solid'

const Education = () => {

  const education = [
    {
      date: "2019 - 2021",
      title: "Master in Design | MIT",
      quote: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit,sed do eiusmod Lorem ipsum dolor sit amet, consectetur adipiscing elit,sed do eiusmod Lorem ipsum dolor sit amet, consectetur adipiscing elit,sed do eiusmod.'
    },
    {
      date: "2019 - 2021",
      title: "Marketing Manager",
      quote: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit,sed do eiusmod Lorem ipsum dolor sit amet, consectetur adipiscing elit,sed do eiusmod Lorem ipsum dolor sit amet, consectetur adipiscing elit,sed do eiusmod.'
    }
  ];

  return (
    <div className="bg-white rounded-lg shadow-md">
      <div className="flex justify-between items-center mb-4 p-6 pb-0">
        <h2 className="text-lg font-bold">Work Education</h2>
        <div className='flex gap-3'>
          <TrashIcon className='w-5 text-gray-400' />
          <button className="px-8 py-1 xs:text-sm h-fit border border-[#FF4C4A] rounded-full text-[#FF4C4A] font-semibold text-xs">
            Edit Education
          </button>
        </div>
      </div>
      <div className='w-full bg-gray-300 h-[1px]' />
      <div className="space-y-4 p-6">
        {education.map((edu, index) => (
        <div key={index} className="bg-gray-100  border border-gray-300 p-4 rounded-lg shadow-sm">
          <h3 className="font-medium">{edu.title}</h3>
          <p className="text-sm text-gray-600 mb-5">{edu.date}</p>
          <p className="mt-2 text-sm text-gray-600">{edu.quote}</p>           
        </div>
        ))}
      </div>
      <button className="my-4 text-blue-500 w-full text-center">View All</button>
    </div>
  )
}

export default Education