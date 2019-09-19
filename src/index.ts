import { User } from './models/User';

const user = User.build({ id: 1, name: 'newer name', age: 0 });

user.on('change', () => {
  console.log(user);
});

user.fetch();
