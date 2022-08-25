import NextLink from 'next/link'
import {
  Link,
  Container,
  Heading,
  Text,
  Box,
  Button,
  List,
  ListItem,
  Grid,
  GridItem,
  useColorModeValue,
  chakra
} from '@chakra-ui/react'
import { ChevronRightIcon } from '@chakra-ui/icons'
import Paragraph from '../components/paragraph'
import { BioSection } from '../components/bio'
import Layout from '../components/layouts/article'
import Section from '../components/section'
import { MdWork } from 'react-icons/md'
import { VscCode } from 'react-icons/vsc'
import { IoLogoLinkedin, IoLogoGithub, IoLinkOutline } from 'react-icons/io5'
import { AiFillRobot } from 'react-icons/ai'
import { DiNodejs, DiReact, DiJava, DiPython } from 'react-icons/di'
import {
  SiC,
  SiJavascript,
  SiLinux,
  SiTypescript,
  SiWordpress,
  SiRedwoodjs,
  SiGit,
  SiGithub,
  SiPostgresql,
  SiMysql,
  SiGithubactions
} from 'react-icons/si'
import Image from 'next/image'

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
          (linux scripts, discord/telegram bots, scraping scripts), because why
          finish a task inn 15 minutes when you can automate it for 6 hours!
          Moreover, I have basic knowledge in the DevOps field, and I am the IT
          guy &#128526;. I enjoy solving coding problems (algorithms and data
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
          B.S in Computer Science at Lebanese American University
        </BioSection>
        <BioSection>
          <Heading as="h6" variant="section-subtitle" color="purple.300">
            Jul 2020 - Sep 2020
          </Heading>
          Web Development Bootcamp at LetsGrant
        </BioSection>
        <BioSection>
          <Heading as="h6" variant="section-subtitle" color="purple.300">
            Aug 2020 - Oct 2020
          </Heading>
          Full-Stack Developer Internship at BluGrass Technologies
        </BioSection>
        <BioSection>
          <Heading as="h6" variant="section-subtitle" color="purple.300">
            Jun 2021 - <i>Now</i>
          </Heading>
          WordPress developer Freelance at MENAWCA
        </BioSection>
        <BioSection>
          <Heading as="h6" variant="section-subtitle" color="purple.300">
            Dec 2021 - Feb 2022
          </Heading>
          Junior Software Developer Freelancer at SABIS® Sarl.
        </BioSection>
        <BioSection>
          <Heading as="h6" variant="section-subtitle" color="purple.300">
            Mar 2022 - <i>Now</i>
          </Heading>
          Full-Stack Developer at Poyesis
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
        <Grid templateColumns="repeat(4, 1fr)" gap={6}>
          <GridItem>
            <DiReact fontSize={55} />
          </GridItem>
          <GridItem>
            <DiNodejs fontSize={55} h="55" />
          </GridItem>
          <GridItem>
            <SiRedwoodjs fontSize={55} h="55" />
          </GridItem>
          <GridItem>
            <SiJavascript fontSize={55} h="55" />
          </GridItem>
          <GridItem>
            <DiJava fontSize={55} h="55" />
          </GridItem>
          <GridItem>
            <DiPython fontSize={55} h="55" />
          </GridItem>
          <GridItem>
            <SiC fontSize={55} h="55" />
          </GridItem>
          <GridItem>
            <SiTypescript fontSize={55} h="55" />
          </GridItem>
          <GridItem>
            <SiLinux fontSize={55} h="55" />
          </GridItem>
          <GridItem>
            <SiWordpress fontSize={55} h="55" />
          </GridItem>
          <GridItem>
            <SiGit fontSize={55} h="55" />
          </GridItem>
          <GridItem>
            <SiGithub fontSize={55} h="55" />
          </GridItem>
          <GridItem>
            <SiGithubactions fontSize={55} h="55" />
          </GridItem>
          <GridItem>
            <SiMysql fontSize={55} h="55" />
          </GridItem>
          <GridItem>
            <SiPostgresql fontSize={55} h="55" />
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
