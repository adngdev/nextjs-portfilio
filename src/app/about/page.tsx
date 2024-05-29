'use client'

import Image from 'next/image';

import pfp from '@/resources/pfp.jpg';
import { DragDropContext, Draggable, Droppable } from '@hello-pangea/dnd';

type Script = {
    name: string;
    code: string;
}

const techRef: Script[] = [
    { name: 'JavaScript', code: 'js' },
    { name: 'TypeScript', code: 'ts' },
    { name: 'Node.js', code: 'node' },
    { name: 'Python', code: 'py' },
    { name: 'Java', code: 'jv' }
];

const Page = () => {
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
                <div>
                    <p className={`text-lg`}>What I Can Do</p>
                    <DragDropContext onDragEnd={() => {console.log('heh')}}>
                        <Droppable droppableId={`droppable`} isCombineEnabled={true}>
                            { provided =>
                                <div ref={provided.innerRef} {...provided.droppableProps}>
                                    <div className={`space-y-1 text-zinc-800`}>
                                        { techRef.map((tech: Script, index: number) =>
                                            <Draggable key={tech.code} draggableId={tech.name} index={index}>
                                                { provided => (
                                                    <div ref={provided.innerRef} {...provided.draggableProps} {...provided.dragHandleProps}>
                                                        <p className={`text-center bg-zinc-100`}>{tech.name}</p>
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
