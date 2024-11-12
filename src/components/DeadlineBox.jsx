const DeadlineBox = () => {
    return(
        <div className="bg-white mt-5 shadow-md rounded-md md:fixed md:right-5 md:bottom-5 md:w-60">
            <h2 className="text-center text-sm bg-red-500 rounded-md text-white font-bold py-2"> Assignment-09 </h2>
            <div className="flex justify-center gap-5 text-center py-5">
                <p className="flex flex-col"> <span className="text-5xl font-bold"> 72 </span> <span className="text-gray-600 text-sm">Hours</span> </p>
                <p className="flex flex-col"> <span className="text-5xl font-bold"> 23 </span> <span className="text-gray-600 text-sm">Minutes</span> </p>
                <p className="flex flex-col"> <span className="text-5xl font-bold"> 40 </span> <span className="text-gray-600 text-sm">Second</span> </p>
            </div>
            <div className="text-center">
                <h1 className="border-b border-solid border-gray-300 font-bold text-xl py-1"> Deadline </h1>
                <p className="text-gray-700 py-2"> 17 November, 2024 </p>
            </div>
        </div>
    );
}
export default DeadlineBox;