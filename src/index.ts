import { User } from './models/User';

const user = new User({ name: 'myname', age: 20 });

user.events.on('change', () => console.log('Change 1'));
user.events.on('change', () => console.log('Change 2'));
user.events.on('save', () => console.log('Save 1'));

user.events.trigger('change');
user.events.trigger('save');

console.log(user);
