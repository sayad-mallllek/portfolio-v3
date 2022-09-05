import {
  Link,
  Container,
  Heading,
  Box,
  Button,
  List,
  ListItem,
  Grid,
  GridItem,
  chakra
} from '@chakra-ui/react'
import Paragraph from '../components/paragraph'
import { BioSection } from '../components/bio'
import Layout from '../components/layouts/article'
import Section from '../components/section'
import { MdWork } from 'react-icons/md'
import { VscCode } from 'react-icons/vsc'
import { IoLogoLinkedin, IoLogoGithub, IoLinkOutline } from 'react-icons/io5'
import { AiFillRobot } from 'react-icons/ai'
import { SiRedwoodjs } from 'react-icons/si'
import Image from 'next/image'
import ReactIcon from '../public/icons/icons8-react'
import NodeIcon from '../public/icons/icons8-nodejs'
import JavascriptIcon from '../public/icons/icons8-javascript'
import JavaIcon from '../public/icons/icons8-java'
import PythonIcon from '../public/icons/icons8-python'
import CIcon from '../public/icons/c-icon'
import TypescriptIcon from '../public/icons/icons8-typescript'
import LinuxIcon from '../public/icons/linux-icon'
import WordpressIcon from '../public/icons/icons8-wordpress'
import GitIcon from '../public/icons/icons8-git'
import GithubIcon from '../public/icons/icons8-github'
import MysqlIcon from '../public/icons/icons8-mysql-logo'
import PostgresqlIcon from '../public/icons/icons8-postgresql'
import AwsIcon from '../public/icons/icons8-amazon-web-services'

const ProfileImage = chakra(Image, {
  shouldForwardProp: prop => ['width', 'height', 'src', 'alt'].includes(prop)
})

const Home = () => (
  <Layout>
    <Container>
      <Box display={{ md: 'flex' }} mt={{ base: 4, md: 10 }}>
        <Box flexGrow={1}>
          <Heading as="h2" variant="page-title">
            Ibrahim ElZein
          </Heading>
          <p>
            Software Engineer / Scraper - <small>Feb 4, 2000</small>
          </p>
        </Box>
        <Box
          flexShrink={0}
          mt={{ base: 4, md: 0 }}
          ml={{ md: 6 }}
          textAlign="center"
        >
          <Box
            borderColor="purple.600"
            borderWidth={2}
            borderStyle="solid"
            w="100px"
            h="100px"
            display="inline-block"
            borderRadius="full"
            overflow="hidden"
          >
            <ProfileImage
              src="/images/Bob.webp"
              alt="Profile image"
              borderRadius="full"
              width="100%"
              height="100%"
            />
          </Box>
        </Box>
      </Box>

      <Section delay={0.1}>
        <Heading as="h3" variant="section-title" color="pink.600">
          <AiFillRobot
            fontSize={25}
            style={{
              display: 'inline',
              position: 'relative',
              top: '0.4rem',
              right: '0.1rem'
            }}
          />
          General Overview
        </Heading>
        <Paragraph>
          Junior Software Engineer and Web Scraper who loves to sleep :) ! I
          enjoy playing Football, Chess, and Billiard (Pool). I develop
          softwares (Web and Mobile) in a Full-Stack manner (mostly in
          Javascript Frameworks and Python Django). I love to write scripts
          (linux scripts, discord/telegram bots, scrapers), because why finish a
          task in 15 minutes when you can automate it for 6 hours! Moreover, I
          have basic knowledge in the DevOps field, and I am the IT
          guy&#128526;. I enjoy solving coding problems (algorithms and data
          structures) and puzzles.
        </Paragraph>
      </Section>

      <Section delay={0.2}>
        <Heading as="h3" variant="section-title" color="pink.600">
          <MdWork
            fontSize={25}
            style={{
              display: 'inline',
              position: 'relative',
              top: '0.4rem',
              right: '0.1rem'
            }}
          />
          Experience{' '}
        </Heading>
        <BioSection>
          <Heading as="h6" variant="section-subtitle" color="purple.300">
            Sep 2018 - Jun 2021
          </Heading>
          B.S in <b>Computer Science</b> at <b>Lebanese American University</b>
        </BioSection>
        <BioSection>
          <Heading as="h6" variant="section-subtitle" color="purple.300">
            Jul 2020 - Sep 2020
          </Heading>
          <b>Web Development</b> Bootcamp at <b>LetsGrant</b>
        </BioSection>
        <BioSection>
          <Heading as="h6" variant="section-subtitle" color="purple.300">
            Aug 2020 - Oct 2020
          </Heading>
          <b>Full-Stack Developer</b> Internship at <b>BluGrass Technologies</b>
        </BioSection>
        <BioSection>
          <Heading as="h6" variant="section-subtitle" color="purple.300">
            Jun 2021 - <i>Now</i>
          </Heading>
          <b>WordPress Developer</b> Freelance at <b>MENAWCA</b>
        </BioSection>
        <BioSection>
          <Heading as="h6" variant="section-subtitle" color="purple.300">
            Dec 2021 - Feb 2022
          </Heading>
          <b>Junior Software Developer</b> Freelancer at <b>SABIS® Sarl.</b>
        </BioSection>
        <BioSection>
          <Heading as="h6" variant="section-subtitle" color="purple.300">
            Mar 2022 - <i>Now</i>
          </Heading>
          <b>Full-Stack Developer</b> at <b>Poyesis</b>
        </BioSection>
      </Section>

      <Section delay={0.2}>
        <Heading as="h3" variant="section-title" color="pink.600">
          <VscCode
            fontSize={25}
            style={{
              display: 'inline',
              position: 'relative',
              top: '0.4rem',
              right: '0.1rem'
            }}
          />
          Skills
        </Heading>
        <Grid templateColumns="repeat(4, 1fr)" gap={6} pl={5}>
          <GridItem>
            <ReactIcon />
          </GridItem>
          <GridItem>
            <NodeIcon />
          </GridItem>
          <GridItem>
            <SiRedwoodjs fontSize={55} color="#bf4722" h="55" />
          </GridItem>
          <GridItem>
            <JavascriptIcon />
          </GridItem>
          <GridItem>
            <JavaIcon />
          </GridItem>
          <GridItem>
            <PythonIcon />
          </GridItem>
          <GridItem>
            <CIcon />
          </GridItem>
          <GridItem>
            <TypescriptIcon />
          </GridItem>
          <GridItem>
            <LinuxIcon />
          </GridItem>
          <GridItem>
            <WordpressIcon />
          </GridItem>
          <GridItem>
            <GitIcon />
          </GridItem>
          <GridItem>
            <GithubIcon />
          </GridItem>
          <GridItem>
            <MysqlIcon />
          </GridItem>
          <GridItem>
            <PostgresqlIcon />
          </GridItem>
          <GridItem>
            <AwsIcon />
          </GridItem>
        </Grid>
      </Section>

      <Section delay={0.3}>
        <Heading as="h3" variant="section-title" color="pink.600">
          <IoLinkOutline
            fontSize={25}
            style={{
              display: 'inline',
              position: 'relative',
              top: '0.4rem',
              right: '0.1rem'
            }}
          />
          Social Links
        </Heading>
        <List>
          <ListItem>
            <Link href="https://github.com/sayad-mallllek" target="_blank">
              <Button
                variant="ghost"
                color="purple.300"
                leftIcon={<IoLogoGithub />}
              >
                @sayad-mallllek
              </Button>
            </Link>
          </ListItem>
          <ListItem>
            <Link
              href="https://www.linkedin.com/in/ibrahim-elzein-39186919a/"
              target="_blank"
            >
              <Button
                variant="ghost"
                color="purple.300"
                leftIcon={<IoLogoLinkedin />}
              >
                @ibrahim-elzein
              </Button>
            </Link>
          </ListItem>
        </List>
      </Section>
    </Container>
  </Layout>
)

export default Home
export { getServerSideProps } from '../components/chakra'
