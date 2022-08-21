import NextLink from 'next/link'
import {
  Link,
  Container,
  Heading,
  Box,
  SimpleGrid,
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
import { IoLogoInstagram, IoLogoGithub } from 'react-icons/io5'
import {
  DiNodejs,
  DiReact,
  DiJavascript,
  DiJava,
  DiPython
} from 'react-icons/di'
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
          General Overview
        </Heading>
        <Paragraph>
          Junior Software Engineer and Web Scraper who loves to sleep :) ! I
          enjoy playing Football, Chess, and Billiard (Pool). I develop
          softwares (Web and Mobile) in a Full-Stack manner (mostly in
          Javascript Frameworks and Python Django). I have basic knowledge in
          the DevOps field aswell. I enjoy solving coding problems (algorithms
          and data structures) and puzzles
        </Paragraph>
      </Section>

      <Section delay={0.2}>
        <Heading as="h3" variant="section-title" color="pink.600">
          Experience{' '}
          <MdWork
            fontSize={25}
            style={{
              display: 'inline',
              position: 'relative',
              top: '0.4rem'
            }}
          />
        </Heading>
        <BioSection>
          <Heading as="h6" variant="section-subtitle" color="whiteAlpha.700">
            Sep 2018 - Jun 2021
          </Heading>
          B.S in Computer Science at Lebanese American University
        </BioSection>
        <BioSection>
          <Heading as="h6" variant="section-subtitle">
            Jul 2020 - Sep 2020
          </Heading>
          Web Development Bootcamp at LetsGrant
        </BioSection>
        <BioSection>
          <Heading as="h6" variant="section-subtitle">
            Aug 2020 - Oct 2020
          </Heading>
          Full-Stack Developer Internship at BluGrass Technologies
        </BioSection>
        <BioSection>
          <Heading as="h6" variant="section-subtitle">
            Jun 2021 - <i>Now</i>
          </Heading>
          WordPress developer Freelance at MENAWCA
        </BioSection>
        <BioSection>
          <Heading as="h6" variant="section-subtitle">
            Dec 2021 - Feb 2022
          </Heading>
          Junior Software Developer Freelancer at SABIS® SARL
        </BioSection>
        <BioSection>
          <Heading as="h6" variant="section-subtitle">
            Mar 2022 - <i>Now</i>
          </Heading>
          Full-Stack Developer at Poyesis
        </BioSection>
      </Section>

      <Section delay={0.2}>
        <Heading as="h3" variant="section-title" color="pink.600">
          Skills{' '}
          <VscCode
            fontSize={25}
            style={{
              display: 'inline',
              position: 'relative',
              top: '0.4rem'
            }}
          />
        </Heading>
        <Grid templateColumns="repeat(4, 1fr)" gap={6}>
          <GridItem>
            <DiReact fontSize={55} />
          </GridItem>
          <GridItem>
            <DiNodejs fontSize={55} h="55" />
          </GridItem>
          <GridItem>
            <DiJavascript fontSize={55} h="55" />
          </GridItem>
          <GridItem>
            <DiJava fontSize={55} h="55" />
          </GridItem>
          <GridItem>
            <DiPython fontSize={55} h="55" />
          </GridItem>
          {/* <GridItem w="100%" h="10" bg="blue.500" />
          <GridItem w="100%" h="10" bg="blue.500" />
          <GridItem w="100%" h="10" bg="blue.500" />
          <GridItem w="100%" h="10" bg="blue.500" /> */}
        </Grid>
      </Section>

      <Section delay={0.3}>
        <Heading as="h3" variant="section-title">
          On the web
        </Heading>
        <List>
          <ListItem>
            <Link href="https://github.com/craftzdog" target="_blank">
              <Button
                variant="ghost"
                colorScheme="highGreen"
                leftIcon={<IoLogoGithub />}
              >
                @craftzdog
              </Button>
            </Link>
          </ListItem>
          <ListItem>
            <Link href="https://instagram.com/craftzdog" target="_blank">
              <Button
                variant="ghost"
                colorScheme="highGreen"
                leftIcon={<IoLogoInstagram />}
              >
                @craftzdog
              </Button>
            </Link>
          </ListItem>
        </List>

        <Box align="center" my={4}>
          <NextLink href="/posts" passHref scroll={false}>
            <Button rightIcon={<ChevronRightIcon />} colorScheme="teal">
              Popular posts
            </Button>
          </NextLink>
        </Box>
      </Section>
    </Container>
  </Layout>
)

export default Home
export { getServerSideProps } from '../components/chakra'
