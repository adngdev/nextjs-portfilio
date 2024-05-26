'use client'

import Image from 'next/image';
import {
    DragDropContext,
    Droppable,
    DroppableProvided,
    Draggable,
    DraggableProvided
} from 'react-beautiful-dnd';

import pfp from '@/resources/pfp.jpg';

const Page = () => {
    return (
        <div className={`w-full h-full flex justify-center overflow-y-auto text-zinc-100`}>
            <DragDropContext onDragEnd={() => {console.log('hehe')}}>
                <Droppable droppableId={`droppable-1`}>
                    { (provided: DroppableProvided) => (
                        <div className={`space-y-5`} ref={provided.innerRef} {...provided.droppableProps}>
                            <Draggable key={`key-1`} draggableId={`draggable-1`} index={1}>
                                { (provided: DraggableProvided) => (
                                    <div ref={provided.innerRef} {...provided.draggableProps} {...provided.dragHandleProps}>
                                        <div className={`w-full h-fit p-3 space-y-3 bg-zinc-800`}>
                                             <div className={`flex justify-center`}>
                                                 <Image className={`w-40 h-40 object-cover rounded-full`} src={pfp} alt={`profile pics`} />
                                             </div>
                                             <div className={`space-y-0.5`}>
                                                 <p className={`text-center text-3xl font-bold`}>Anh Dung Nguyen</p>
                                                 <p className={`text-center`}>Fullstack Developer</p>
                                             </div>
                                         </div>
                                    </div>
                                )}
                            </Draggable>
                            <Draggable key={`key-2`} draggableId={`draggable-2`} index={2}>
                                { (provided: DraggableProvided) => (
                                    <div ref={provided.innerRef} {...provided.draggableProps} {...provided.dragHandleProps}>
                                        <div className={`px-2 py-1 bg-red-400`}>My draggable</div>
                                    </div>
                                )}
                            </Draggable>
                            {provided.placeholder}
                        </div>
                    )}
                </Droppable>
            </DragDropContext>


                {/*<Droppable droppableId={`droppableId`}>*/}
                {/*    {(provided: DroppableProvided) => (*/}
                {/*        <div ref={provided.innerRef} {...provided.droppableProps}>*/}
                {/*            {arr.map((item, i) =>*/}
                {/*                <Draggable draggableId={`${i}`} index={i}>*/}
                {/*                    {(provided: DraggableProvided) => (*/}
                {/*                        <div ref={provided.innerRef} {...provided.draggableProps} {...provided.dragHandleProps}>*/}
                {/*                            {item}*/}
                {/*                        </div>*/}
                {/*                    )}*/}
                {/*                </Draggable>*/}
                {/*            )}*/}

                {/*            /!*<Draggable draggableId={'0'} index={0}>*!/*/}
                {/*            /!*    {(provided: DraggableProvided) => (*!/*/}
                {/*            /!*        <div ref={provided.innerRef} {...provided.draggableProps} {...provided.dragHandleProps}>*!/*/}
                {/*            /!*            <div className={`w-1/2 h-fit p-3 space-y-3 bg-zinc-800`}>*!/*/}
                {/*            /!*                <div className={`flex justify-center`}>*!/*/}
                {/*            /!*                    <Image className={`w-40 h-40 object-cover rounded-full`} src={pfp} alt={`profile pics`} />*!/*/}
                {/*            /!*                </div>*!/*/}
                {/*            /!*                <div className={`space-y-0.5`}>*!/*/}
                {/*            /!*                    <p className={`text-center text-3xl font-bold`}>Anh Dung Nguyen</p>*!/*/}
                {/*            /!*                    <p className={`text-center`}>Fullstack Developer</p>*!/*/}
                {/*            /!*                </div>*!/*/}
                {/*            /!*            </div>*!/*/}
                {/*            /!*        </div>*!/*/}
                {/*            /!*    )}*!/*/}
                {/*            /!*</Draggable>*!/*/}
                {/*            /!*<Draggable draggableId={'1'} index={1}>*!/*/}
                {/*            /!*    {(provided: DraggableProvided) => (*!/*/}
                {/*            /!*        <div ref={provided.innerRef} {...provided.draggableProps} {...provided.dragHandleProps}>*!/*/}
                {/*            /!*            <div className={`w-1/2 h-fit p-3 space-y-3 bg-zinc-800`}>*!/*/}
                {/*            /!*                <div className={`flex justify-center`}>*!/*/}
                {/*            /!*                    <Image className={`w-40 h-40 object-cover rounded-full`} src={pfp} alt={`profile pics`} />*!/*/}
                {/*            /!*                </div>*!/*/}
                {/*            /!*                <div className={`space-y-0.5`}>*!/*/}
                {/*            /!*                    <p className={`text-center text-3xl font-bold`}>Anh Dung Nguyen</p>*!/*/}
                {/*            /!*                    <p className={`text-center`}>Fullstack Developer</p>*!/*/}
                {/*            /!*                </div>*!/*/}

                {/*            /!*            </div>*!/*/}
                {/*            /!*        </div>*!/*/}
                {/*            /!*    )}*!/*/}
                {/*            /!*</Draggable>*!/*/}
                {/*            {provided.placeholder}*/}
                {/*        </div>*/}
                {/*    )}*/}
                {/*</Droppable>*/}

        </div>
    );
};

export default Page;
