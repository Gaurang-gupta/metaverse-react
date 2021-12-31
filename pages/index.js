import Head from 'next/head'
import Login from '../components/Login'
import { useMoralis } from 'react-moralis';

export default function Home() {
  const { user, isAuthenticated, logout } = useMoralis();
  console.log(isAuthenticated)
  if (!isAuthenticated) return <Login />
  return (
    <div className="h-screen">
      <Head>
        <title>Metaverse react</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <h1>Welcome to the app</h1>
      <button onClick={logout}>Logout</button>
    </div>
  )
}
