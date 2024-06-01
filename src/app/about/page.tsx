'use client'

import { useState } from 'react';
import Image from 'next/image';

import { DragDropContext, Draggable, Droppable, DropResult } from '@hello-pangea/dnd';

import pfp from '@/resources/pfp.jpg';

type Script = {
    name: string;
    code: string;
    color: string;
};

const Page = () => {
    const [tech, setTech] = useState<Script[]>([
        { name: 'JavaScript', code: 'js', color: 'bg-icon-js text-zinc-800' },
        { name: 'TypeScript', code: 'ts', color: 'bg-icon-ts text-zinc-100' },
        { name: 'Node.js', code: 'node', color: 'bg-icon-node text-zinc-800' },
        { name: 'Python', code: 'py', color: 'bg-split text-zinc-800' }
    ]);

    const handleDragEnd = (result: DropResult): void => {
        const { source , destination } = result;

        if (!destination) {
            return;
        }

        const techWithoutMovedTech: Script[] = tech.filter((_, i) => i !== source.index);
        const reOrderedTech: Script[] = [...techWithoutMovedTech.slice(0, destination.index), tech[source.index], ...techWithoutMovedTech.slice(destination.index)];

        setTech(reOrderedTech);
    };

    return (
        <div className={`w-full h-full space-y-2 lg:grid lg:grid-cols-3`}>
            <div className={`space-y-2 h-fit flex gap-2 lg:flex-col items-center`}>
                <Image className={`w-20 h-20 object-cover rounded-full`} src={pfp} alt={`profile pics`} priority={true} />
                <div className={`space-y-0.5 text-start text-white`}>
                    <p className={`text-lg font-bold`}>Anh Dung (Jamie) Nguyen</p>
                    <p className={`text-sm text-zinc-200`}>Fullstack Developer</p>
                </div>
            </div>
            <div className={`text-xs text-white lg:col-span-2 p-3 space-y-3 bg-zinc-800 border border-zinc-100/50 rounded-md`}>
                <p className={`text-xs`}>adngdev/README.md</p>
                <div className={`w-full h-[1px] bg-zinc-600`} />
                <div className={`space-y-1`}>
                    <p className={`text-lg`}>Hello :)</p>
                    <p>I&apos;m Jamie from Vietnam and currently living in Melbourne.</p>
                </div>
                <div className={`space-y-1`}>
                    <p className={`text-lg`}>Technical Skills</p>
                    <div className={`flex gap-1 items-center text-md`}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" fill="#ffffff" viewBox="0 0 256 256">
                            <path d="M58.34,101.66l-32-32a8,8,0,0,1,0-11.32l32-32A8,8,0,0,1,69.66,37.66L43.31,64,69.66,90.34a8,8,0,0,1-11.32,11.32Zm40,0a8,8,0,0,0,11.32,0l32-32a8,8,0,0,0,0-11.32l-32-32A8,8,0,0,0,98.34,37.66L124.69,64,98.34,90.34A8,8,0,0,0,98.34,101.66ZM200,40H176a8,8,0,0,0,0,16h24V200H56V136a8,8,0,0,0-16,0v64a16,16,0,0,0,16,16H200a16,16,0,0,0,16-16V56A16,16,0,0,0,200,40Z"></path>
                        </svg>
                        <p>Programming Languages</p>
                    </div>
                    <DragDropContext onDragEnd={handleDragEnd}>
                        <Droppable droppableId={`droppable`}>
                            { provided =>
                                <div ref={provided.innerRef} {...provided.droppableProps}>
                                    <div className={`space-y-1 text-zinc-800`}>
                                        { tech.map((tech: Script, index: number) =>
                                            <Draggable key={tech.code} draggableId={tech.name} index={index}>
                                                { provided => (
                                                    <div ref={provided.innerRef} {...provided.draggableProps} {...provided.dragHandleProps}>
                                                        <p className={`h-20 flex items-center justify-center text-lg font-bold ${tech.color} rounded-sm`}>{tech.name}</p>
                                                    </div>
                                                )}
                                            </Draggable>
                                        )}
                                    </div>
                                    {provided.placeholder}
                                </div>
                            }
                        </Droppable>
                    </DragDropContext>
                </div>
                <div className={`flex gap-1 items-center text-md`}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" fill="#ffffff" viewBox="0 0 256 256">
                        <path d="M58.34,101.66l-32-32a8,8,0,0,1,0-11.32l32-32A8,8,0,0,1,69.66,37.66L43.31,64,69.66,90.34a8,8,0,0,1-11.32,11.32Zm40,0a8,8,0,0,0,11.32,0l32-32a8,8,0,0,0,0-11.32l-32-32A8,8,0,0,0,98.34,37.66L124.69,64,98.34,90.34A8,8,0,0,0,98.34,101.66ZM200,40H176a8,8,0,0,0,0,16h24V200H56V136a8,8,0,0,0-16,0v64a16,16,0,0,0,16,16H200a16,16,0,0,0,16-16V56A16,16,0,0,0,200,40Z"></path>
                    </svg>
                    <p>Programming Languages</p>
                </div>
            </div>
        </div>
    );
};

export default Page;
