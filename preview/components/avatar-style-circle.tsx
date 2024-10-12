import { Avatar } from "@/packages/ui";

export default function AvatarStyleCircle() {
  return (
    <Avatar>
      <Avatar.Image src="/images/avatar.jpeg" alt="Arif Logs" />
      <Avatar.Fallback>AH</Avatar.Fallback>
    </Avatar>
  );
}
