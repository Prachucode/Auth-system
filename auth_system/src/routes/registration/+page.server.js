import { fail } from '@sveltejs/kit';
import { registerSchema } from '$lib/validators/auth';
import User from '$lib/server/models/UserModel.js'
import {connectdb} from '$lib/server/db.js'
import { email } from 'zod';
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'
export const actions = {
	default: async ({ request }) => {
		// Get form data
		const formData = await request.formData();

		// Convert FormData to a plain object
		const data = Object.fromEntries(formData);

		// Validate data
		const result = registerSchema.safeParse(data);

		// Validation failed
		if (!result.success) {
			return fail(400, {
				errors: result.error.flatten().fieldErrors,
				values: data
			});
		}

		// Validation passed
		console.log(result.data);
		await connectdb()

		const user = await User.findOne({email: data.email})
		const payload = {
			email: data.email
		}
		const token = jwt.sign(payload, process.env.secretstr, {
			expiresIn: '8h'
		})
		if(user) {
			return fail(400, {
				errors: {
					email: ["User exists"]
				},
				values: data
			});
		}

		const hashedPassword = bcrypt.hash(password, 10)
		await User.create({
			username: data.name,
			email: data.email,
			password: hashedPassword
		})
		
		return {
			success: true
		};
	}
};