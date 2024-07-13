import React from "react";

import styles from "./TaskList.module.css";

//interface
import { ITask } from "../interfaces/Task";

//css


interface Props {
    taskList: ITask[];
    handleDelete(id: number): void
    handleEdit(task: ITask): void;
}



const TaskList = ({ taskList, handleDelete, handleEdit }: Props) => {
    return (
        <>
            {taskList.length > 0 ? (
                taskList.map((task) => (
                    <div key={task.id} className={styles.task}>
                        <div className={styles.details}>
                            <h4><p>{task.title}</p></h4>
                            <p>Dificuldade: {task.difficulty}</p>
                        </div>
                        <div className={styles.actions}>
                        <i className="bi bi-pencil" onClick={() => handleEdit(task)}></i>
                            <i onClick={() => { handleDelete(task.id) }} className="bi bi-trash"></i>
                        </div>
                    </div>
                ))
            ) : (
                <p>não há tarefas cadastradas</p>
            )}
        </>
    )
};

export default TaskList;