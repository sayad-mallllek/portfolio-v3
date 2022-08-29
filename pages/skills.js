import { Container, Heading, Grid, GridItem } from '@chakra-ui/react'
import { SiRedwoodjs } from 'react-icons/si'
import Layout from '../components/layouts/article'
import Section from '../components/section'
import SkillRow from '../components/skillRow'
import JavaIcon from '../public/icons/icons8-java'
import JavascriptIcon from '../public/icons/icons8-javascript'
import NodeIcon from '../public/icons/icons8-nodejs'
import ReactIcon from '../public/icons/icons8-react'

const reactText = `My favourite frontend stack due to its simplicity and 1 way binding.
 Working heavily in React (both on personal and work basis) by developing 
 multiple web apps using it. I also rate it highly as one to use in a freelance project.
 Proficient in state management, redux, context, and hooks.
`

const nodeText = `First backend framework to learn.
 Mostly used in freelance due to its simple architecture (especially if combined with Express and Mongoose)
 alongside the npm libraries that provide essential equipment to finish the job.`

const redwoodText = `The Latest full stack framework in my arsenal of stacks.
 Have high expectations and hopes for it.
 Experimenting in it for now by developing local projects for it. (Todo list, Social Media mock app)
 `

const javascriptText = `The core of my development career. I tend to research and explore all javascript libraries,
  frameworks, and optimizations. Using ES6 version in production and ES7 version in experimental.`

const javaText = `First programming language`

const Skills = () => (
  <Layout title="Posts">
    <Container mt={10}>
      <Heading as="h3" fontSize={20} mb={4} mt={4} color="purple.300">
        Tech Stack
      </Heading>

      <Section delay={0.1}>
        <Grid
          templateRows="repeat(2, 1fr)"
          templateColumns="repeat(7, 1fr)"
          rowGap={3}
        >
          <GridItem colSpan={7} />
          <SkillRow
            icon={<ReactIcon />}
            progressValue={80}
            progressColor={'cyan'}
            text={reactText}
          />
          <SkillRow
            icon={<NodeIcon />}
            progressValue={75}
            progressColor={'green'}
            text={nodeText}
          />
          <SkillRow
            icon={<SiRedwoodjs fontSize={55} color="#bf4722" h="55" />}
            progressValue={40}
            progressColor={'orange'}
            text={redwoodText}
          />
          <SkillRow
            icon={<JavascriptIcon />}
            progressValue={90}
            progressColor={'yellow'}
            text={javascriptText}
          />
          <SkillRow
            icon={<JavaIcon />}
            progressValue={90}
            progressColor={'red'}
            text={javaText}
          />
        </Grid>
      </Section>
    </Container>
  </Layout>
)

export default Skills
export { getServerSideProps } from '../components/chakra'
