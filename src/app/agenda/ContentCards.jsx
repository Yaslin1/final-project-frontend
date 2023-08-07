
export default function ContentCards({ item }) {
  const descriptionToParagraphs = () => {
    const lines = item.description?.split("\n")
    return lines
  }

  return (
    <div className="max-w-sm p-6 mb-8 bg-white border border-gray-200 rounded-lg shadow ">
      <a href="#">
        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900">{item?.topic}</h5>
      </a>
      <p className="mb-3 font-normal text-gray-700 bg-opacity-50 bg-violet-300 rounded-full w-24 px-3 py-1 font-semibold leading-tight text-violet-900">{item?.time}</p>
      {
        descriptionToParagraphs()?.map( (line, i) => (
          <p key={`item-paragraph-${i}`} className="mb-1 font-normal text-gray-500">{line}</p>
        ))
      }
      <p className="flex item-center mb-3 font-normal text-gray-700 rounded-md mt-4">
        <span className="flex items-center">
          <img alt="ecommerce" className="w-4 h-4 mr-1 fill-gray-600" src="/images/paper-pin.png" />
          <a href={item?.material?.url} target="_blank" rel="noreferer" className="text-decoration-none text-fuchsia-600 whitespace-nowrap md:w-[250px] md:max-w-[250px] w-[150px] max-w-[150px] overflow-hidden text-ellipsis">
            {item?.material?.name}
          </a>
        </span>
      </p>
    </div>
  )
} 1