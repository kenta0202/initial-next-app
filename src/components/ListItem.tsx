import React from 'react';
import Link from 'next/link';

import { User } from '../types';

type Props = {
  data: User;
};

function ListItem({ data }: Props) {
  return (
    <Link href="/users/[id]" as={`/users/${data.id}`}>
      {data.id}
      :
      {data.name}
    </Link>
  );
}

export default ListItem;
