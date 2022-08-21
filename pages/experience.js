import { Container, Heading, SimpleGrid, Divider } from '@chakra-ui/react'
import Layout from '../components/layouts/article'
import Section from '../components/section'
import { WorkGridItem } from '../components/grid-item'

import thumbBlugrass from '../public/images/experience/blugrass.png'
import thumbLAU from '../public/images/experience/lau.jpg'
import thumbMenawca from '../public/images/experience/menawca.jpg'

const Works = () => (
  <Layout title="Works">
    <Container>
      <Heading as="h3" fontSize={20} mb={4} color="purple.300">
        Education
      </Heading>

      <SimpleGrid columns={[1, 1, 2]} gap={6}>
        <Section>
          <WorkGridItem
            id="lau"
            title="Lebanese American University"
            date="September 2018 - June 2021"
            thumbnail={thumbLAU}
          >
            <b>B.S in Computer Science</b> at the Lebanese American University
            with a GPA of
            <b> 3.4</b>
          </WorkGridItem>
        </Section>
      </SimpleGrid>

      <Section delay={0.2}>
        <Divider my={6} />

        <Heading as="h3" fontSize={20} mb={4} color="purple.300">
          Work
        </Heading>
      </Section>

      <SimpleGrid columns={[1, 1, 2]} gap={6}>
        <Section>
          <WorkGridItem
            id="blugrass"
            title="Blugrass"
            date="August 2020 - October 2020"
            thumbnail={thumbBlugrass}
          >
            <b>Full-Stack Developer</b> Internship at Blugrass Technologies
          </WorkGridItem>
        </Section>
        <Section delay={0.3}>
          <WorkGridItem
            id="menawca"
            title="MENAWCA"
            date="June 2021 - Now"
            thumbnail={thumbMenawca}
          >
            <b>Freelance WordPress Developer</b> for MENAWCA Org.
          </WorkGridItem>
        </Section>
        <Section delay={0.3}></Section>
      </SimpleGrid>

      <Section delay={0.4}>
        <Divider my={6} />

        <Heading as="h3" fontSize={20} mb={4}>
          Old works
        </Heading>
      </Section>

      <SimpleGrid columns={[1, 1, 2]} gap={6}>
        <Section delay={0.5}></Section>
        <Section delay={0.5}></Section>
        <Section delay={0.6}></Section>
      </SimpleGrid>
    </Container>
  </Layout>
)

export default Works
export { getServerSideProps } from '../components/chakra'
