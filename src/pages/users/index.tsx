/* eslint-disable @typescript-eslint/require-await */
/* eslint-disable jsx-a11y/anchor-is-valid */
import { GetStaticProps } from 'next';
import Link from 'next/link';
import { UserData } from 'data/users';

import { User } from '../../types';
import Layout from '../../components/Layout';
import List from '../../components/List';

type Props = {
  items: User[];
};

function WithStaticProps({ items }: Props) {
  return (
    <Layout title="Users List | Next.js + TypeScript Example">
      <h1>Users List</h1>
      <p>
        Example fetching data from inside
        {' '}
        <code>getStaticProps()</code>
        .
      </p>
      <p>You are currently on: /users</p>
      <List items={items} />
      <p>
        <Link href="/">
          <a>Go home</a>

        </Link>
      </p>
    </Layout>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  // Example for including static props in a Next.js function component page.
  // Don't forget to include the respective types for any props passed into
  // the component.
  const items: User[] = UserData;

  return { props: { items } };
};

export default WithStaticProps;
