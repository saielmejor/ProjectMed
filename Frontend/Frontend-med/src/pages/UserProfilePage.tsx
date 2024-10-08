
import { useGetMyUser, useUpdateMyUser } from "@/api/MyUserApi";
import UserProfileForm from "./user-profile-form/UserProfileForm";

export default function UserProfile() {
  const { currentUser, isLoading: isGetLoading } = useGetMyUser();
  const { updateUser, isLoading: isUpdateLoading } = useUpdateMyUser();

  if (isGetLoading) {
    return <span> Loading... </span>;
  }
  // add new if statement
  if (!currentUser) {
    return <span>Unable to load user profile </span>;
  }
  // it will call API for updateuser and loading
  return (
    <UserProfileForm
      currentUser={currentUser}
      onSave={updateUser}
      isLoading={isUpdateLoading}
    />
  );
}
