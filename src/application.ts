
import { Server } from 'rewyre';
import { resolve } from 'path';
import { createProxyMiddleware } from 'http-proxy-middleware';
import { UsersController } from './controller/users';
import { UsersModel } from './model/users';

(async () => {

	// Create server instance.
	const application: Server = new Server({
		port: 3000,
		hostname: 'localhost',
		db_port: 27017,
		database: 'rewyre-vue',
	});

	// Initialise server functionality.
	await application.init();

	// Register controllers.
	application.registerControllers([ UsersController ]);

	// Register models.
	application.registerModels([ UsersModel ]);

	// Start server instance.
	await application.start();

	// Development: Create a proxy to the dev instance.
	if (process.env.NODE_ENV === 'development') {
		const instance = application.getExpressServer();
		instance.use('/', createProxyMiddleware({
			target: 'http://localhost:8080',
			changeOrigin: true,
		}));
	}

	// Production: Register static Vue application.
	if (process.env.NODE_ENV === 'production') {
		application.registerStatic('/', resolve(__dirname, '../app/dist'));
		application.registerStatic('*', resolve(__dirname, '../app/dist'));
	}
})();