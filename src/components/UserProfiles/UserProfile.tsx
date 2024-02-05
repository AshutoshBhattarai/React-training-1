import useApi from 'hooks/useApi';
import UserCard from './UserCard';

interface UserProps {
  id: number;
  email: string;
  first_name: string;
  last_name: string;
  avatar: string;
}
const url = 'https://reqres.in/api/users';
const UserProfile = () => {
  const { data, error, loading } = useApi<UserProps>(url, {
    method: 'GET'
  });

  if (error) {
    return <p>Error : {error}</p>;
  }

  return (
    <div className="m-5 p-5">
      <h1 className="text-center text-5xl text-white">User Profiles</h1>
      <div className="container m-3 rounded-3xl border-transparent bg-gray-700 p-3">
        {loading
          ? 'Loading ........'
          : data.map((user) => <UserCard key={user.id} userCardProps={user} />)}
      </div>
    </div>
  );
};

export default UserProfile;
