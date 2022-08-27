import {
  Container,
  Badge,
  ListItem,
  UnorderedList,
  Heading,
  Center,
  Image
} from '@chakra-ui/react'
import Layout from '../../components/layouts/article'
import { Title } from '../../components/work'
import { useMediaQuery } from '@chakra-ui/react'

const Work = () => {
  const isMobile = useMediaQuery('(min-width: 600px)')
  const marginTop = !isMobile ? '10rem' : '1rem'
  return (
    <Layout title="LAU">
      <Container style={{ marginTop: marginTop }}>
        <Title>
          Lebanese American University <Badge>September 2018 - June 2021</Badge>
        </Title>
        <Center my={6}>
          <Image src="/images/experience/lau_hd.jpg" alt="icon" />
        </Center>
        <Heading as="p">
          Bachelors Degree in Computer Science with Honours
        </Heading>
        <UnorderedList ml={4} my={4}>
          <ListItem>Cumulative GPA of 3.49</ListItem>
          <ListItem>Major GPA of 3.7</ListItem>
          <ListItem>
            Worked as Lab Assistant for Sophomores and Juniors
          </ListItem>
          <ListItem>
            Participated in the Lebanese Collegiate Programming Competition
            (LCPC) twice.
          </ListItem>
        </UnorderedList>
      </Container>
    </Layout>
  )
}

export default Work
export { getServerSideProps } from '../../components/chakra'
