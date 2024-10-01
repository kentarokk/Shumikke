import { getCurrentUser, fetchUserAttributes } from "aws-amplify/auth";

export const get_user_id = async () => {
  const user = await getCurrentUser();
  return user.userId;
};

export const get_user_attributes = async () => {
  return await fetchUserAttributes();
};
