import { Button, Container, Box, Text, Title, Grid, Flex } from "@mantine/core"
import Image from "next/image"
import { SwatchCard } from "@/components"



const agendas = [
  {
    title: "Our Mission",
    description: "To teach, encourage and celebrate design innovation, design thinking and user based problem solving by hosting tutrials, workshops , seminars and networking opportunities. To connect designers at LUMS and around the country to brew culture of sharing design knowledge"
  },
  {
    title: "Our Vision",
    description: "INDEX aims to become the primary outlet to students both undergraduate and graduate at LUMS and the entirety of Pakistan who wish to refine and showcase their skills of implementing design choices and providing design solutions to real world problems.",
  },
  {
    title: "Core Values",
    description: "- Quality\n- Change\n- Team Work\n-	Diversity\n- Integrity\n- Innovation"
  }
]


export default function Home() {

  const focus = ["Game Design",
    "Animation",
    "Graphic Design",
    "UI/UX",
  ]

  return (
    <Container className="flex flex-col gap-12 mx:auto my-8">
      <Box className="flex gap-2 justify-center">
        <Text size={32} weight={900}>Innovate.</Text>
        <Text size={32} weight={900} color="teal.5">Design.</Text>
        <Text size={32} weight={900}>Experience.</Text>
      </Box>
      <Box className="flex flex-col justify-center bg-black p-6 rounded-md bg-opacity-20">
        <Title order={2} color="teal.7" align="center">Who We Are</Title>
        <Text className="text-justify font-mono">
          INDEX: The Design and Innovation Society at LUMS is here to pave the way for savoir-faire user experience through design and innovation. The agenda is to make the community more prone to thinking from a design perspective and helping them realise the proper approach to good design.
        </Text>
      </Box>
      <Grid>
        {
          agendas.map(({ title, description }) => (
            <Grid.Col key={title} span={12} md={6} lg={4}>
              <SwatchCard
                title={title}
                description={description}
              />
            </Grid.Col>
          ))
        }
      </Grid>
      <Flex className="justify-center gap-4">
        <Title order={1} align="center">{`"`}EVERYTHING IS</Title>
        <Title order={1} color="teal.7">DESIGNED</Title>
      </Flex>
      <Flex className="justify-center gap-4">
        <Title order={1}>BUT NOT EVERYTHING IS</Title>
        <Title order={1} color="teal.7">DESIGNED</Title>
        <Title order={1}>WELL{`"`}</Title>
      </Flex>
      <Grid>
        {focus.map((focus, i) => (
          <Grid.Col key={i} span={12} md={6} lg={3}>
            <div>
              <Image
                alt={`Image ${i}`}
                src={`/Group-${i+1}.png`}
                height={220}
                width={220}
              />
              <Text size="lg" color="teal.6" className="text-center">{focus}</Text>
            </div>
          </Grid.Col>
        ))}
      </Grid>
    </Container>
  )
}
