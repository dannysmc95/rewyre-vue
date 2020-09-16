<template>
	<div class="view-container view-home">
		<div class="view-header">
			<p class="title">Users Manager</p>
		</div>

		<div class="user-create">
			<p class="title">Create User</p>
			<input type="text" v-model="create_user_name" placeholder="User's name..." />
			<input type="text" v-model="create_user_email" placeholder="User's email address..." />
			<input type="text" v-model="create_user_role" placeholder="User's role..." />
			<button class="btn" @click="addUser">Add User</button>
		</div>

		<div class="users-list">
			<p class="title">User List</p>
			<ul class="user-list">
				<li class="user-item" v-for="(user, index) in users" :key="index">
					<p class="user-item__text" v-text="`${user.name} - ${user.email} - ${user.role}`" />
					<button class="user-item__button" @click="deleteUser(user)">Delete</button>
				</li>
			</ul>
		</div>
	</div>
</template>

<script lang="ts">
	import { Options, Vue } from 'vue-class-component';

	@Options({})
	export default class Home extends Vue {

		public headers: any = {'Accept': 'application/json', 'Content-Type': 'application/json'};
		public users: Array<any> = [];

		public create_user_name: string = '';
		public create_user_email: string = '';
		public create_user_role: string = '';

		public async deleteUser(user: any): Promise<void> {
			const req = await fetch(`/api/users/delete/${user._id}`, {
				method: 'DELETE',
				headers: this.headers,
			});
			if (req.status === 204) this.getUsers();
		}

		public async addUser(): Promise<void> {
			const req = await fetch('/api/users/create', {
				method: 'POST',
				headers: this.headers,
				body: JSON.stringify({
					name: this.create_user_name,
					email: this.create_user_email,
					role: this.create_user_role,
				}),
			});
			if (req.status === 201) {
				this.getUsers();
				this.create_user_name = '';
				this.create_user_email = '';
				this.create_user_role = '';
			}
		}

		public async getUsers(): Promise<void> {
			const req = await fetch('/api/users');
			const res = await req.json();
			this.users = res;
		}

		public async mounted(): Promise<void> {
			this.getUsers();
		}
	}
</script>

<style lang="scss" scoped>
	@import '@/assets/styles/base/include';
	@import '@/assets/styles/views/home';
</style>