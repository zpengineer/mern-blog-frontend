import { Image, Text, HStack } from '@chakra-ui/react';

const UserInfo = ({ fullName, avatarURL, createdAt }) => {
  const time = new Date(createdAt).toLocaleDateString();

  return (
    <HStack marginBottom="4" spacing="2" display="flex" alignItems="center">
      <Image
        borderRadius="full"
        boxSize="40px"
        objectFit="cover"
        src={avatarURL}
        alt={`Avatar of ${fullName}`}
      />
      <Text fontWeight="medium">{fullName}</Text>
      <Text>—</Text>
      <Text>{time}</Text>
    </HStack>
  );
};

export default UserInfo;
