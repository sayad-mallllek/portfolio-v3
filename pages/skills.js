import { Container, Heading, Grid, GridItem, Text } from '@chakra-ui/react'
import { SiRedwoodjs } from 'react-icons/si'
import Layout from '../components/layouts/article'
import Section from '../components/section'
import SkillRow from '../components/skillRow'
import CIcon from '../public/icons/c-icon'
import JavaIcon from '../public/icons/icons8-java'
import JavascriptIcon from '../public/icons/icons8-javascript'
import NodeIcon from '../public/icons/icons8-nodejs'
import PythonIcon from '../public/icons/icons8-python'
import ReactIcon from '../public/icons/icons8-react'
import TypescriptIcon from '../public/icons/icons8-typescript'

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

const javaText = `First and favourite programming language. Mainly used for algorithm and data structure implementations
 as well as competitive coding. Implemented some network socket programs using Java`

const pythonText = `Love and hate relationship with this one, although working heavy with it.
 The language used to develop scripts and bots (telegram and discord bots - alongisde discord.js),
 scrape, and develop in Django as backend framework. Most proficient language currently`

const cText = `Mainly used in Linux and bash scripts.
 Mostly applied in university projects or personal interests and hobbies`

const typescriptText = `When said developing in Javascript, Typescript is the language meant.
 Almost all Javascript projects have Typescript integrated within them.`

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
          <GridItem colSpan={7}>
            <Text color="whiteAlpha.700" pl={5}>
              <b>Note:</b> The bar indicates the level of proficiency against my
              development experience
            </Text>
          </GridItem>
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
          <SkillRow
            icon={<PythonIcon />}
            progressValue={90}
            progressColor={'telegram'}
            text={pythonText}
          />
          <SkillRow
            icon={<CIcon />}
            progressValue={48}
            progressColor={'facebook'}
            text={cText}
          />
          <SkillRow
            icon={<TypescriptIcon />}
            progressValue={90}
            progressColor={'blue'}
            text={typescriptText}
          />
        </Grid>
      </Section>
    </Container>
  </Layout>
)

export default Skills
export { getServerSideProps } from '../components/chakra'
