import { GetStaticProps } from "next";

export default function Home({ repositories, date }: { repositories: any[], date: string}) {

  return (
    <>
      {date}
      <ul>
        {repositories.map((repo: string) => (
          <li key={repo}>{repo}</li>
          ))}
      </ul>
    </>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const response = await fetch('https://api.github.com/users/GlHenrique/repos').then((res) => res.json());
  
  const repoNames = response.map(({ name }: { name: string }) => name);

  return {
    props: {
      repositories: repoNames,
      date: new Date().toISOString(),
    },
    revalidate: 60 * 60 * 4 // 4 hours
  }
}
