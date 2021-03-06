import { Resolver, Query, Mutation, Arg, FieldResolver, Root } from "type-graphql";
import * as bcrypt from "bcryptjs";
import { User } from "../../entity/User";
import { RegisterInput } from "./register/RegisterInput";

@Resolver(User)
export class RegesterResolver {
  @Query(() => String)
  async hello() {
    return "Hello World!";
  }

  @Mutation(() => User)
  async register(@Arg("data") {
    firstName,
    lastName,
    email,
    password
  }: RegisterInput): Promise<User> {
    const hashedPassword = await bcrypt.hash(password, 12);

    const user = await User.create({
      firstName,
      lastName,
      email,
      password: hashedPassword
    }).save();

    return user;
  }
}