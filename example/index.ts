import { Collection } from '../src/models/Collection';
import { UserProps, User } from './User';
import { UserList } from './UserList';

const users = new Collection(
  'http://localhost:3000/users',
  (json: UserProps) => {
    return User.build(json);
  }
);

users.on('change', () => {
  const root = document.getElementById('root');

  if (root) {
    new UserList(root, users).render();
  }
});

users.fetch();
