
const ResumeCard = ({Icon, role, date, company, children}) => {
  return (
    <div className="mb-6">
        <div className="flex items-start space-x-6 bg-blue-950/20 transition-all duration-300 p-4 sm:p-8 rounded-md">
            <div className="w-10 h-10 sm:w-14 sm:h-14 bg-blue-950 rounded-full flex flex-col items-center justify-center">
                <Icon className="text-white w-6 h-6 sm:w-8 sm:h-8" />
            </div>
            <div className="flex-1">
                {date && (
                    <h1 className="mb-2 px-4 py-1 sm:px-6 sm:py-1.5 rounded-full bg-gray-200 text-gray-600 w-fit font-bold text-sm sm:text-lg">
                        {date}
                    </h1>
                )}
                <h1 className="text-gray-200 text-xl sm:text-2xl font-semibold">{role}</h1>
                  <h2 className="text-lg font-semibold text-cyan-200">{company}</h2>
                <p className="text-gray-300 text-sm sm:text-base pt-3">
                  {children}
                </p>
            </div>
        </div>
    </div>
  )
}

export default ResumeCard