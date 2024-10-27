import { IUsers } from '@/interfaces/IUsers';
import mongoose, { Schema } from 'mongoose';


const UsersSchema: Schema = new Schema({
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
});

const Users = mongoose.model<IUsers>('Users', UsersSchema);

export default Users;
