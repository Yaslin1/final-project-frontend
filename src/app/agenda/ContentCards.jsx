
export default function ContentCards({item}) {

  return (
    <div className="max-w-sm p-6 mb-8 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
      <a href="#">
        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{item?.topic}</h5>
      </a>
      <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">{item?.time}</p>
      <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">{item?.description}</p>
      <p className="mb-3 font-normal text-gray-700 dark:text-gray-400 bg-green-200 rounded-full"><a href={item?.material?.url} target="_blank" rel="noreferer" className="text-decoration-none">
        {item?.material?.name}
      </a></p>
    </div>
  )
}