import { model, models, Schema } from "mongoose";

export interface IAccount {
  userId: Schema.Types.ObjectId;
  name: string;
  image?: string;
  password?: string;
  providerid: string;
  providerAccountId: string;
}

const AccountSchema = new Schema(
  {
    userId: { type: Schema.Types.ObjectId, ref: "User", required: true },
    name: { type: String, required: true },
    image: { type: String },
    password: { type: String },
    provider: { type: String, required: true },
    providerAccountId: { type: String, rquired: true },
  },
  { timestamps: true }
);

const Account = models?.Account || model<IAccount>("Account", AccountSchema);

export default Account;
