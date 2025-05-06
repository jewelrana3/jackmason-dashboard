import { Accordion, AccordionItem } from '@szhsin/react-accordion';

const data = [
    {
        id: 1,
        title: 'What’s the app’s main purpose?',
        content:
            'The app will use a modern, minimalist design style, focusing on clean lines, intuitive navigation, and a user-friendly interface. The aesthetic will emphasize simplicity, functionality, and responsiveness, with a consistent color palette and sleek typography for enhanced usability.',
    },
    {
        id: 2,
        title: 'What design style will the app use?',
        content:
            'The app will use a modern, minimalist design style, focusing on clean lines, intuitive navigation, and a user-friendly interface. The aesthetic will emphasize simplicity, functionality, and responsiveness, with a consistent color palette and sleek typography for enhanced usability.',
    },
    {
        id: 3,
        title: 'What type of support will be offered?',
        content:
            'Quisque eget luctus mi, vehicula mollis lorem. Proin fringilla vel erat quis sodales. Nam ex enim, eleifend venenatis lectus vitae, accumsan auctor mi.',
    },
    {
        id: 4,
        title: 'Who is the target audience?',
        content:
            'The target audience includes tech enthusiasts, developers, and users interested in minimalist design that is functional and easy to navigate.',
    },
];

export default function FAQ() {
    return (
        <div className="max-w-4xl mx-auto mt-10 px-4 text-white">
            <h1 className="text-3xl font-semibold mb-6">FAQ</h1>
            {data.map((item) => (
                <Accordion className="w-full">
                    <AccordionItem key={item.id} header={item.title} className=" mb-2 rounded-md bg-gray-800 p-2">
                        <div className="text-gray-300 mt-5">{item.content}</div>
                    </AccordionItem>
                </Accordion>
            ))}
        </div>
    );
}
