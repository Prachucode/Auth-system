import { fail } from '@sveltejs/kit';
import bcrypt from 'bcrypt';
import User from '$lib/server/models/UserModel.js';
import { connectDB } from '$lib/server/db.js';
import jwt from 'jsonwebtoken'
export const actions = {
	default: async ({ request }) => {
		const formData = await request.formData();
		const data = Object.fromEntries(formData);

		// Basic validation
		if (!data.email || !data.password) {
			return fail(400, {
				error: 'Email and password are required',
				values: data
			});
		}

		// Connect to MongoDB
		await connectDB();

		// Find user
		const user = await User.findOne({
			email: data.email
		});

		if (!user) {
			return fail(400, {
				error: 'Invalid email or password',
				values: data
			});
		}

		// Compare passwords
		const isMatch = await bcrypt.compare(
			data.password,
			user.password
		);

		if (!isMatch) {
			return fail(400, {
				error: 'Invalid email or password',
				values: data
			});
		}
        const token = jwt.sign(payload, process.env.secretstr, {
                    expiresIn: '8h'
                })  

        return {
			success: true,
			message: 'Login successful'
		};
	}
};