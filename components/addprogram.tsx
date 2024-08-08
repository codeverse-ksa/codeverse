"use client";

import React, { useState } from "react";

const AddProgram = () => {
    const [data, setData] = useState({ title: "", description: "", tags: "", tally: "" });
    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setData(prev => ({ ...prev, [event.target.name]: event.target.value }));
    };
    return (
        <>
            <button className="btn btn-primary btn-circle text-white text-3xl" onClick={() => (document.getElementById("add-program") as HTMLDialogElement).showModal()}>+</button>
            <dialog id="add-program" className="modal">
                <div className="modal-box">
                    <form method="dialog">
                        <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
                    </form>
                    <h3 className="font-bold text-lg mb-4">Add Program</h3>
                    <div className="flex flex-col justify-center items-center w-full gap-y-4 mb-4">
                        <input onChange={event => handleChange(event)} name="title" type="text" placeholder="Title" className="input input-sm input-bordered w-full" />
                        <input onChange={event => handleChange(event)} name="description" type="text" placeholder="Description" className="input input-sm input-bordered w-full" />
                        <input onChange={event => handleChange(event)} name="tags" type="text" placeholder="Tags" className="input input-sm input-bordered w-full" />
                        <input onChange={event => handleChange(event)} name="tally" type="text" placeholder="Tally Link" className="input input-sm input-bordered w-full" />
                        <input type="file" className="file-input file-input-sm file-input-bordered file-input-primary w-full" />
                    </div>
                    <div className="flex justify-end">
                        <button className="btn btn-primary text-white">Add</button>
                    </div>
                </div>
            </dialog>
        </>
    );
};

export default AddProgram;
