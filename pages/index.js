import axios from "axios"

export default function HomePage({ name }) {

  return (
    <div>
      <h1>Homepage</h1>
      <h1>{name}</h1>
    </div>
  )
}

export async function getServerSideProps({ params, req, res }) {

  try {
    const response = await axios('https://test-xi-sepia.vercel.app/api/hello/')
    const name = response.data.name

    return {
      props: {
        name: name
      }
    }
  } catch (err) {
    return {
      notFound: true
    }
  }

}