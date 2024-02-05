const UserCard = (props: {
  userCardProps: {
    email: string;
    first_name: string;
    last_name: string;
    avatar: string;
  };
}) => {
  const { email, first_name, last_name, avatar } = props.userCardProps;
  return (
    <div>
      <div className="card card-side mb-3 bg-base-100 shadow-xl">
        <figure>
          <img src={avatar} alt="User Avatar" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{first_name + ' ' + last_name}</h2>
          <p>{email}</p>
        </div>
      </div>
    </div>
  );
};

export default UserCard;
