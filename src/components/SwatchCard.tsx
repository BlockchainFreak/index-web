import { createStyles, Paper, Text, ThemeIcon, rem } from '@mantine/core';
import { IconColorSwatch } from '@tabler/icons-react';


interface CardGradientProps {
    title: string;
    description: string;
}

export default function CardGradient({ title, description }: CardGradientProps) {
    
    const cardClasses = "relative cursor-pointer overflow-hidden transition-all duration-100 ease-in-out p-4 pl-8 w-64"
    + " hover:shadow-md hover:scale-105"
    + " before:absolute before:inset-0 before:w-6 before:bg-gradient-to-r from-green-600 to-green-300"
    
    return (
        <Paper withBorder radius="md" className={"relative cursor-pointer overflow-hidden transition-all duration-100 ease-in-out p-4 pl-8 h-80 hover:shadow-md hover:scale-105"}>
            <div className='absolute top-0 left-0 h-full w-1 bg-gradient-to-r from-green-600 to-green-300'></div>
            <ThemeIcon
                size="xl"
                radius="md"
                variant="gradient"
                gradient={{ deg: 0, from: 'green', to: 'teal' }}
            >
                <IconColorSwatch size={rem(28)} stroke={1.5} />
            </ThemeIcon>
            <Text size="xl" weight={500} mt="md">
                {title}
            </Text>
            <Text size="sm" mt="sm" color="dimmed">
                {description.split('\n').map((line,i) => <p key={i}>{line}</p>)}
            </Text>
        </Paper>
    );
}