import { Container, Heading, SimpleGrid } from '@chakra-ui/react'
import Layout from '../components/layouts/article'
import Section from '../components/section'
import { Progress } from '@chakra-ui/react'
import { GridItem } from '../components/grid-item'
import { SkillRow } from '../components/skills'
import ReactIcon from '../public/icons/icons8-react'

const Skills = () => (
  <Layout title="Posts">
    <Container>
      <Heading as="h3" fontSize={20} mb={4} color="purple.300">
        Skills
      </Heading>

      <Section delay={0.1}>
        <SkillRow>
          <ReactIcon />
          <Container display={'inline-block'} width="100%">
            <Progress
              value={80}
              size="sm"
              colorScheme="whatsapp"
              borderRadius={4}
              transitionDuration={1}
            />
          </Container>
        </SkillRow>
      </Section>
    </Container>
  </Layout>
)

export default Skills
export { getServerSideProps } from '../components/chakra'
