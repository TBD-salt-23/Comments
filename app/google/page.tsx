'use client';

import { useSession, signIn, signOut } from 'next-auth/react';

export default function IndexPage() {
  const { data, status } = useSession();
  if (status === 'loading') return <h1> loading... please wait</h1>;
  if (status === 'authenticated') {
    const username = data.user?.name || 'unable to get name';
    const userimage = data.user?.image || 'unable to get image';

    return (
      <div>
        <h1> hi {username}</h1>
        <img src={userimage} alt={username + ' photo'} />
        <button onClick={() => signOut()}>sign out</button>
      </div>
    );
  }
  return (
    <div>
      <button
        onClick={() =>
          signIn('google', {
            callbackUrl: 'http://localhost',
          })
        }
      >
        sign in with gooogle
      </button>
    </div>
  );
}
export const getServersideProps = (ctx: any) => {
  return {
    props: {
      session:
        '// define logic to get user session here, this will be part of pageProps in _app.js',
      //...
    },
  };
};
