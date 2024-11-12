const Tasks = ({taskname, taskcategory}) => {
    console.log(taskname)
    return(
        <div className="bg-white mt-5 shadow-md rounded-md">
            <div className="item border-b border-solid border-gray-300 p-2">
                <input type="checkbox" name="task" id="task" className="mr-1" /> <label for="task" className="mr-1"> Task Name </label> <span className="text-sm bg-green-200 font-bold rounded-full px-3 py-1"> Required </span>
            </div>
            <div className="item border-b border-solid border-gray-300 p-2">
                <input type="checkbox" name="task" id="task" className="mr-1" /> <label for="task" className="mr-1"> Responsive Design </label> <span className="text-sm bg-red-200 font-bold rounded-full px-3 py-1"> Required </span>
            </div>
            <div className="item border-b border-solid border-gray-300 p-2">
                <input type="checkbox" name="task" id="task" className="mr-1" /> <label for="task" className="mr-1"> Responsive Design </label> <span className="text-sm bg-green-200 font-bold rounded-full px-3 py-1"> Required </span>
            </div>
            <div className="item border-b border-solid border-gray-300 p-2">
                <input type="checkbox" name="task" id="task" className="mr-1" /> <label for="task" className="mr-1"> Responsive Design </label> <span className="text-sm bg-green-200 font-bold rounded-full px-3 py-1"> Required </span>
            </div>

        </div>
    );
}
export default Tasks;