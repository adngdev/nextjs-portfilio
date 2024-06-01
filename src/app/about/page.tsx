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
                <p className={`text-2xs`}>adngdev/README.md</p>
                <div className={`w-full h-[1px] bg-zinc-600`} />
                <div className={`space-y-1`}>
                    <p className={`text-lg`}>Hello :)</p>
                    <p>I&apos;m Jamie from Vietnam and currently living in Melbourne.</p>
                </div>
                <div className={`space-y-2`}>
                    <p className={`text-lg`}>What I Code</p>
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
            </div>
        </div>
    );
};

export default Page;
