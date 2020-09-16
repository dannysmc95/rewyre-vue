import { Model, AbstractModel } from 'rewyre';

@Model('users', {
	name: 'string',
	email: 'string',
	role: 'string',
})
export class UsersModel extends AbstractModel {}