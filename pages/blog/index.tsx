import { GetStaticProps } from "next"

export default function BlogPost({ date }: any) {
  return <h1>{date}</h1>
}


export const getStaticProps: GetStaticProps = async () => {

  return {
    props: {
      date: new Date().toISOString(),
    },
    revalidate: 5
  }
}
