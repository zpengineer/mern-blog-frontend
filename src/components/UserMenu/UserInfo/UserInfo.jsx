import Avatar from '@mui/material/Avatar';
import style from './UserInfo.module.css';

const UserInfo = ({ fullName, avatarURL, createdAt }) => {
  const time = createdAt.replace(/T/, ' ').replace(/\..+/, '');

  return (
    <div className={style.userInfo}>
      <Avatar alt={fullName} src={avatarURL} />
      <div className={style.userWrapper}>
        <span className={style.name}>{fullName}</span>
        <span className={style.time}>{time}</span>
      </div>
    </div>
  );
};

export default UserInfo;
