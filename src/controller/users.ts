import { Controller, Route, IReturn, IContext, InjectModel, ModelRecordID } from 'rewyre';
import { CustomController } from '../abstract/controller';

@InjectModel('users')
@Controller('/api/users')
export class UsersController extends CustomController {

	@Route('GET', '/')
	public async list(): Promise<IReturn> {
		const users: Array<any> = await this.models.users.find({});
		return { status: 200, content: users };
	}

	@Route('POST', '/create')
	public async create(context: IContext): Promise<IReturn> {
		await this.models.users.insertOne(context.body);
		return { status: 201, content: {} };
	}

	@Route('DELETE', '/delete/:id')
	public async delete(context: IContext): Promise<IReturn> {
		await this.models.users.deleteOne({ _id: new ModelRecordID(context.params.id) });
		return { status: 204, content: {} };
	}
}