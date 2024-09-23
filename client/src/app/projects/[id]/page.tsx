"use client";

import React, { useState } from "react";
import ProjectHeader from "../ProjectHeader";
import BoardView from "../BoardView";
import ListView from "../ListView";
import TimeLineView from "../TimeLineView";
import TableView from "../TableView";
import ModalNewTask from "@/components/ModalNewTask";

type Props = {
   params: {
      id: string;
   };
};

const Project = ({ params }: Props) => {
   const { id } = params;
   const [activeTab, setActiveTab] = useState("Board");
   const [isModalNewTaskOpen, setIsModalNewTaskOpen] = useState(false);

   return (
      <div>
         <ModalNewTask
            isOpen={isModalNewTaskOpen}
            onClose={() => setIsModalNewTaskOpen(false)}
            id={id}
         />
         <ProjectHeader activeTab={activeTab} setActiveTab={setActiveTab} />
         {activeTab === "Board" && (
            <BoardView id={id} setIsModalNewTaskOpen={setIsModalNewTaskOpen} />
         )}
         {activeTab === "List" && (
            <ListView id={id} setIsModalNewTaskOpen={setIsModalNewTaskOpen} />
         )}
         {activeTab === "Timeline" && (
            <TimeLineView id={id} setIsModalNewTaskOpen={setIsModalNewTaskOpen} />
         )}
         {activeTab === "Table" && (
            <TableView id={id} setIsModalNewTaskOpen={setIsModalNewTaskOpen} />
         )}
      </div>
   );
};

export default Project;
