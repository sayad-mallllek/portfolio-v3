import { Container, Heading, Grid, GridItem, Text } from '@chakra-ui/react'
import { SiRedwoodjs } from 'react-icons/si'
import Layout from '../components/layouts/article'
import Section from '../components/section'
import SkillRow from '../components/skillRow'
import CIcon from '../public/icons/icons8-c'
import AwsIcon from '../public/icons/icons8-amazon-web-services'
import GitIcon from '../public/icons/icons8-git'
import GithubIcon from '../public/icons/icons8-github'
import JavaIcon from '../public/icons/icons8-java'
import JavascriptIcon from '../public/icons/icons8-javascript'
import MysqlIcon from '../public/icons/icons8-mysql-logo'
import NodeIcon from '../public/icons/icons8-nodejs'
import PostgresqlIcon from '../public/icons/icons8-postgresql'
import PythonIcon from '../public/icons/icons8-python'
import ReactIcon from '../public/icons/icons8-react'
import TypescriptIcon from '../public/icons/icons8-typescript'
import WordpressIcon from '../public/icons/icons8-wordpress'
import LinuxIcon from '../public/icons/linux-icon'

const reactText = `My favourite frontend stack due to its simplicity and 1 way binding.
 Working heavily in React (both on personal and work basis) by developing 
 multiple web apps using it. I also rate it highly as one to use in a freelance project.
 Proficient in state management, redux, context, and hooks.
`

const nodeText = `First backend technology to learn.
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

const linuxText = `My favourite operating system. Considering I am a fan of the open source ideology,
 Linux is my go-to environment in development (Ubuntu and Manjaro Distribution). Mainly used for
 development, bash scripts (and developing new bash commands in c), and deployment. Also, Linux administration
 is a skill under development.`

const wordPressText = `Alongside building websites with code, building websites using UI tools
 because why not? Handled multiple websites and plugins (developed slightly).`

const gitText = `Alongside the regular push, pull, commit, add, and branch commands,
 applied proficiency in integrating github actions and deploying to cloud services (mainly AWS).
 In addition, installing and integrating third party actions and apps into repositories, and resolving
 conflicts, head refs, and version control`

const githubText = `Similar to git experience, but repository configurations
 (installing Apps, labels, security and code automation, and branch protection)
 and code review`

const mysqlText = `The SQL to learn and test on, especially if you are on a Linux distro.
 Configured some complex queries, functions, stored procedures, and classified permissions.`

const postgresqlText = `The SQL used in production. Managed multiple Posgtres database instances on AWS.`

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
            order={1}
          />
          <SkillRow
            icon={<NodeIcon />}
            progressValue={75}
            progressColor={'lime'}
            text={nodeText}
            order={2}
          />
          <SkillRow
            icon={<SiRedwoodjs fontSize={55} color="#bf4722" h="55" />}
            progressValue={40}
            progressColor={'redwood'}
            text={redwoodText}
            order={3}
          />
          <SkillRow
            icon={<JavascriptIcon />}
            progressValue={90}
            progressColor={'yellow'}
            text={javascriptText}
            order={4}
          />
          <SkillRow
            icon={<JavaIcon />}
            progressValue={90}
            progressColor={'red'}
            text={javaText}
            order={1}
          />
          <SkillRow
            icon={<PythonIcon />}
            progressValue={90}
            progressColor={'telegram'}
            text={pythonText}
            order={5}
          />
          <SkillRow
            icon={<CIcon />}
            progressValue={48}
            progressColor={'facebook'}
            text={cText}
            order={6}
          />
          <SkillRow
            icon={<TypescriptIcon />}
            progressValue={90}
            progressColor={'blue'}
            text={typescriptText}
            order={7}
          />
          <SkillRow
            icon={<LinuxIcon />}
            progressValue={90}
            progressColor={'gray'}
            text={linuxText}
            order={8}
          />
          <SkillRow
            icon={<WordpressIcon />}
            progressValue={60}
            progressColor={'twitter'}
            text={wordPressText}
            order={9}
          />
          <SkillRow
            icon={<GitIcon />}
            progressValue={75}
            progressColor={'git'}
            text={gitText}
            order={10}
          />
          <SkillRow
            icon={<GithubIcon />}
            progressValue={75}
            progressColor={'github'}
            text={githubText}
            order={11}
          />
          <SkillRow
            icon={<MysqlIcon />}
            progressValue={77}
            progressColor={'orange'}
            text={mysqlText}
            order={12}
          />
          <SkillRow
            icon={<PostgresqlIcon />}
            progressValue={82}
            progressColor={'blue'}
            text={postgresqlText}
            order={13}
          />
          <SkillRow
            icon={<AwsIcon />}
            progressValue={65}
            progressColor={'aws'}
            text={postgresqlText}
            order={13}
          />
        </Grid>
      </Section>
    </Container>
  </Layout>
)

export default Skills
export { getServerSideProps } from '../components/chakra'
