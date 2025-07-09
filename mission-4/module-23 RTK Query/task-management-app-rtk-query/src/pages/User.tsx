import { AddUserModal } from "@/components/module/users/AddUserModal";
// import UserCard from "@/components/module/users/UserCard";

function Users() {
  return (
    <div className="max-w-7xl mx-auto px-5 mt-20">
      <div className="flex justify-end items-center gap-3">
        <h1 className="mr-auto">Users</h1>

        <AddUserModal />
      </div>
      {/* <div className="space-y-5 mt-5">
        {users.map((user) => (
          <UserCard user={user} key={user.id} />
        ))}
      </div> */}
    </div>
  );
}

export default Users;
