import { Container, Heading, SimpleGrid, Divider } from '@chakra-ui/react'
import Layout from '../components/layouts/article'
import Section from '../components/section'
import { WorkGridItem } from '../components/grid-item'

import thumbBlugrass from '../public/images/experience/blugrass.png'
import thumbLAU from '../public/images/experience/lau.jpg'
import thumbMenawca from '../public/images/experience/menawca.jpg'
import thumbSabis from '../public/images/experience/sabis.png'
import thumbPoyesis from '../public/images/experience/poyesis.jpg'
import thumbDealroom from '../public/images/experience/dealroom.avif'

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
            date="Sep 2018 - Jun 2021"
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
        <Section delay={0.3}>
          <WorkGridItem
            id="lau-lab"
            title="Lab Assistant at Lebanese American University"
            date="Sep 2019 - Dec 2020"
            thumbnail={thumbLAU}
          >
            <b>Lab Assistant</b> for Juniors and Sophomores at Lebanese American
            University
          </WorkGridItem>
        </Section>
        <Section delay={0.3}>
          <WorkGridItem
            id="blugrass"
            title="Blugrass"
            date="Aug 2020 - Oct 2020"
            thumbnail={thumbBlugrass}
          >
            <b>Full-Stack Developer</b> Internship at Blugrass Technologies
          </WorkGridItem>
        </Section>
        <Section delay={0.4}>
          <WorkGridItem
            id="menawca"
            title="MENAWCA"
            date="June 2021 - Now"
            thumbnail={thumbMenawca}
          >
            <b>Freelance WordPress Developer</b> for MENAWCA Org.
          </WorkGridItem>
        </Section>
        <Section delay={0.4}>
          <WorkGridItem
            id="sabis"
            title="SABIS"
            date="Dec 2021 - Feb 2022"
            thumbnail={thumbSabis}
          >
            <b>Junior Software Developer Freelancer</b> at SABIS Sarl.
          </WorkGridItem>
        </Section>

        <Section delay={0.5}>
          <WorkGridItem
            id="poyesis"
            title="Poyesis"
            date="Mar 2022 - Now"
            thumbnail={thumbPoyesis}
          >
            <b>Full-Stack Developer</b> at Poyesis Sarl.
          </WorkGridItem>
        </Section>

        <Section delay={0.5}>
          <WorkGridItem
            id="dealroom"
            title="Dealroom"
            date="May 2022 - Aug 2022"
            thumbnail={thumbDealroom}
          >
            <b>Data Collection Engineer</b> at Dealroom Co.
          </WorkGridItem>
        </Section>
      </SimpleGrid>
    </Container>
  </Layout>
)

export default Works
export { getServerSideProps } from '../components/chakra'
