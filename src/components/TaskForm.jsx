const TaskForm = ({handleSubmit}) => {
    
    return(
        <div className="bg-white p-2 rounded-md mt-5">
            <form action="#" className="grid grid-cols-6 gap-5" onSubmit={handleSubmit}>
                <input type="text" name="taskname" id="taskname" placeholder="Task Name" className="col-span-6 md:col-span-4 border border-solid border-gray-300 p-2 rounded-md" />
                <select name="taskcategory" id="taskcategory" className="col-span-4 md:col-span-1 text-center rounded-md p-2">
                    <option value="Required"> Required </option>
                    <option value="Challange"> Challange </option>
                    <option value="Optional"> Optional </option>
                </select>
                <input type="submit" value="Add" className="col-span-2 md:col-span-1 bg-green-500 rounded-md text-white font-bold p-2" />
            </form>
        </div>
    );
}
export default TaskForm;